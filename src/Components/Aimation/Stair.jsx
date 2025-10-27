import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stair = ({ children }) => {
  const currentPath = useLocation().pathname;
  const stairRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: 0,
    });
    gsap.from(pageRef.current, {
      delay: 1.5,
      opacity: 0,
      scale: 1.2,
    });
  }, [currentPath]);
  return (
    <div className="font-[font2]  h-screen w-full">
      <div ref={stairRef}>
        <div className="h-screen w-full fixed z-10 flex">
          <div className="stair bg-black h-full w-1/5"></div>
          <div className="stair bg-black h-full w-1/5"></div>
          <div className="stair bg-black h-full w-1/5"></div>
          <div className="stair bg-black h-full w-1/5"></div>
          <div className="stair bg-black h-full w-1/5"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stair;
