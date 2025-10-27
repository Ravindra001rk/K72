import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { NavBarContext } from "../Context/NavContext";

const Fullnav = () => {
  const [navOpen, setNavOpen] = useContext(NavBarContext);

  const fullLinkNav = useRef(null);
  const fullScreenNav = useRef(null);
  const tlRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    if (!fullScreenNav.current) return;

    ctxRef.current = gsap.context(() => {
      const stairs = fullScreenNav.current.querySelectorAll(".stairs");
      const links = fullLinkNav.current
        ? fullLinkNav.current.querySelectorAll(".link")
        : [];

      tlRef.current = gsap
        .timeline({ paused: true })
        .from(stairs, {
          height: 0,
          stagger: { amount: -0.2 },
        })
        .from(fullLinkNav.current, { opacity: 0, x: 100 }, "<")
        .from(links, {
          rotateX: 90,
          opacity: 0,
          stagger: { amount: -0.2 },
        });
    }, fullScreenNav);

    if (fullScreenNav.current) fullScreenNav.current.style.display = "none";

    return () => {
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    const el = fullScreenNav.current;
    if (!tl || !el) return;

    tl.eventCallback("onReverseComplete", null);

    if (navOpen) {
      el.style.display = "block";
      tl.restart();
    } else {
      tl.eventCallback("onReverseComplete", () => {
        if (el) el.style.display = "none";

        tl.eventCallback("onReverseComplete", null);
      });
      tl.reverse();
    }
  }, [navOpen]);

  return (
    <div>
      <div
        id="fullScreenNav"
        ref={fullScreenNav}
        className="fixed py-1 top-0 left-0 z-50 bg-black overflow-hidden uppercase h-screen w-full text-white"
      >
        <div>
          <div className="h-screen py-1 w-full absolute left-0 top-0 flex">
            <div className="stairs h-full bg-black w-1/5"></div>
            <div className="stairs h-full bg-black w-1/5"></div>
            <div className="stairs h-full bg-black w-1/5"></div>
            <div className="stairs h-full bg-black w-1/5"></div>
            <div className="stairs h-full bg-black w-1/5"></div>
          </div>
        </div>

        <div ref={fullLinkNav}>
          <div className="flex p-3 -full justify-between items-start">
            <Link to="/">
              <svg
                onClick={() => {
                  setNavOpen(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="53"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </Link>
            <div
              onClick={() => {
                setNavOpen(false);
              }}
              className=" h-20 w-20  relative cursor-pointer"
            >
              <div className=" h-28  w-0.5 -rotate-45 origin-top absolute bg-white"></div>
              <div className=" h-28  w-0.5 right-0 rotate-45 origin-top absolute bg-white"></div>
            </div>
          </div>
          <div className="lg:pt-[3vw] pt-[50vw] cursor-pointer select-none">
            <Link to="projects">
              <div className="link origin-top overflow-hidden relative border-t border-white">
                <h1 className="font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                  Projets
                </h1>
                <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                  <div className="moveX flex items-center">
                    <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                      Pour Tout voir
                    </h2>
                    <img
                      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                      Pour Tout voir
                    </h2>
                    <img
                      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                      Pour Tout voir
                    </h2>
                    <img
                      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                      Pour Tout voir
                    </h2>
                    <img
                      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>

            <div className="link origin-top overflow-hidden relative border-t border-white">
              <h1 className="font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Agency
              </h1>
              <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    know us
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    know us
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    know us
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    know us
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="link origin-top overflow-hidden relative border-t border-white">
              <h1 className="font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Contact
              </h1>
              <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    send us a fax
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="link origin-top overflow-hidden relative border-y border-white">
              <h1 className="font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                blog
              </h1>
              <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    Read articel
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    Read articel
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    Read articel
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-6xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    Read articel
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fullnav;
