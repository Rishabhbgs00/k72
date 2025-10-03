import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: 0,
      width: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".lol", 
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  });

  return (
    <div className="p-0.5">
      <div className="pt-[20vh] mb-10 text-center">
        <h2 className="font-[font1] text-[8vw] uppercase">Projects</h2>
      </div>

      <div className="space-y-6 lol">
        {/* First Row */}
        <div className="flex hero gap-6">
          <div className="relative w-1/2 h-[400px] group rounded-[10px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-[10px] transition-all duration-700 group-hover:scale-110"
              src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center rounded-[10px]">
              <h2 className="uppercase text-2xl font-[font1] border-2 border-white px-4 py-2 rounded-full text-white">
                Vior le projects
              </h2>
            </div>
          </div>

          <div className="relative w-1/2 h-[400px] group rounded-[10px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-[10px] transition-all duration-700 group-hover:scale-110"
              src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center rounded-[10px]">
              <h2 className="uppercase text-2xl font-[font1] border-2 border-white px-4 py-2 rounded-full text-white">
                Vior le projects
              </h2>
            </div>
          </div>
        </div>

        <div className="flex hero gap-6">
          <div className="relative w-1/2 h-[400px] group rounded-[10px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-[10px] transition-all duration-700 group-hover:scale-110"
              src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center rounded-[10px]">
              <h2 className="uppercase text-2xl font-[font1] border-2 border-white px-4 py-2 rounded-full text-white">
                Vior le projects
              </h2>
            </div>
          </div>

          <div className="relative w-1/2 h-[400px] group rounded-[10px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-[10px] transition-all duration-700 group-hover:scale-110"
              src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
              alt=""
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center rounded-[10px]">
              <h2 className="uppercase text-2xl font-[font1] border-2 border-white px-4 py-2 rounded-full text-white">
                Vior le projects
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
