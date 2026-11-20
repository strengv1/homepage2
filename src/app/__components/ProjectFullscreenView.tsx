"use client"

import { useEffect, useRef } from 'react'

export default function ProjectFullScreenView({
  projectTitle,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelect
}: {
  projectTitle: string
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
}) {
  const image = images[currentIndex]
  const touchStartX = useRef<number | null>(null)

  // Keyboard: Esc closes, arrow keys switch images
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && images.length > 1) onPrev()
      else if (e.key === 'ArrowRight' && images.length > 1) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, onClose, onPrev, onNext])

  // Lock page scrolling while open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshots`}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg max-w-7xl w-full h-[70vh] overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Image */}
        <div
          className="relative bg-black flex items-center justify-center h-full"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null || images.length < 2) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 50) (dx < 0 ? onNext : onPrev)()
            touchStartX.current = null
          }}
        >
          <img
            src={image}
            alt={projectTitle}
            className="max-h-full max-w-full object-contain"
          />

          {images.length > 1 && (
            <>
              {/* Left */}
              <button
                onClick={onPrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ‹
              </button>

              {/* Right */}
              <button
                onClick={onNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ›
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-2 bg-black/60 px-3 py-1.5 rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onSelect(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      index === currentIndex
                        ? 'bg-white'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}