import React from 'react'

const Video = () => {
  return (
    <div className="w-full h-auto">
      <video
        className="w-full h-auto object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.pixabay.com/video/2019/06/17/24497-344562750_large.mp4"
      ></video>
    </div>
  )
}

export default Video
