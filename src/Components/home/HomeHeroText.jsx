import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-white text-center flex flex-col items-center pt-20 sm:pt-16  mt-50 md:pt-20">

      <div className="uppercase leading-tight text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw]">
        The spark for
      </div>

      <div className="uppercase flex items-center justify-center gap-[0.5em] leading-tight text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] flex-wrap">
        all
        <span className="inline-flex h-[1em] w-[2.5em] sm:w-[2em] md:w-[2.2em] lg:w-[2.3em] mx-2 rounded-full overflow-hidden align-middle">
          <Video className="h-full w-full object-cover" />
        </span>
        things
      </div>

      <div className="uppercase leading-tight text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw]">
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
