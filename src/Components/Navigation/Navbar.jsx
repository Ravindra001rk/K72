import React, { useContext, useRef } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Fullnav from "./Fullnav";
import { NavBarContext } from "../Context/NavContext";

const Navbar = () => {
  const navRef = useRef(null);
  const IconRef = useRef(null);

    const [navOpen, setNavOpen] = useContext(NavBarContext);
  
  return (
    <div>
      <div className="fixed z-2  flex top-0  w-full  justify-between">
        <div className="p-3 mix-blend-difference">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="53"
              viewBox="0 0 103 44"
            >
              <path
                fill=""
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </Link>
        </div>
        <div
        onClick={()=>{
          setNavOpen(true)
          
        }}
          onMouseEnter={() => {
            navRef.current.style.height = "100%";
            IconRef.current.style.color = "black";
          }}
          onMouseLeave={() => {
            navRef.current.style.height = "0%";
            IconRef.current.style.color = "white";
          }}
          className="relative lg:h-16 h-12 bg-black cursor-pointer w-[40vw] lg:w-[16vw] "
          id="nanOpener"
        >
          <div className="bg-black relative cursor-pointer flex items-center justify-end text-white text-3xl lg:text-5xl h-full w-full">
            <div ref={IconRef} className="absolute z-10 pr-8">
              <BiMenuAltRight />
            </div>
          </div>
          <div
            ref={navRef}
            className="bg-[#d2fd51] transition-all absolute top-0 h-0 w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
