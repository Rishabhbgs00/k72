import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Stairs = () => {
    
  const stairParentRef = useRef(null);


  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(stairParentRef.current, { display: "block" });

    tl.from(".stair", {
      height: 0,
      duration: 1,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      duration: 1,
      stagger: {
        amount: -0.25,
      },
    });

    tl.set(stairParentRef.current, { display: "none" }); 
  });

  return (
   <div  ref={stairParentRef}>
     <div  className="fixed inset-0 z-20 flex h-screen w-full">
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
      <div className="stair h-full w-1/5 bg-black"></div>
    </div>
   </div>
  );
};

export default Stairs;
