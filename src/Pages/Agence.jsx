import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imgRef = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 36%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const imageIndex = Math.floor(self.progress * (imageArray.length - 1));
          if (imgRef.current) {
            imgRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });
  });

  return (
    <div className='sm:pt-16'>
      <div className="section1 sm:absolute">
        <div
          ref={imageDivRef}
          className="absolute h-[50vw] overflow-hidden rounded-2xl w-[30vh] top-60 left-[50vh]"
        >
          <img
            ref={imgRef}
            className="object-cover"
            src="https://img.freepik.com/premium-photo/futuristic-portraits-men-with-digital-faces-artificial-intelligence-technology_921026-15371.jpg?w=2000"
            alt=""
          />
        </div>
      </div>

      <div className="relative section2 font-[font2]">
        <div className="mt-[55vh]">
          <h1 className="text-[17vw] text-center uppercase leading-[15vw]">
            SEVENTY <br />
            TWO
          </h1>
        </div>

        <div className="mt-20 flex justify-end">
          <p className="text-4xl ml: lg:w-1/2 pr-10 leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            We’re inquisitive and open-minded, and we make sure creativity crowds
            out ego from every corner. A brand is a living thing, with values, a
            personality and a story. If we ignore that, we can achieve short-term
            success, but not influence that goes the distance. We bring that
            perspective to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agence;
