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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg max-w-7xl w-full h-[70vh] overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative bg-black flex items-center justify-center h-full">
          <img
            src={image}
            alt={projectTitle}
            className="h-full w-auto object-contain"
          />

          {images.length > 1 && (
            <>
              {/* Left */}
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ‹
              </button>

              {/* Right */}
              <button
                onClick={onNext}
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