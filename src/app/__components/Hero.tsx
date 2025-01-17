import Image from 'next/image'
import me from "./../../../public/me.jpg"
export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <Image
            src={me}
            alt="Ville Strengell"
            width={250}
            height={250}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Ville Strengell
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
            Web Developer | Problem Solver | Just a chill guy looking for work
          </p>
          <p className="mt-10 max-w-xl mx-auto text-left text-lg text-black">
            Hey! I am a web-developer looking for work in a company that treats it&apos;s employees as valued individuals and cultivates a sense of community.
          </p>
          <p className="mt-4 max-w-xl mx-auto text-left text-lg text-black">
            I recently graduated from Aalto University School of Electrical Engineering, where I majored in Automation and minored in Computer Science.
          </p>
        </div>
      </div>
    </div>
  )
}

