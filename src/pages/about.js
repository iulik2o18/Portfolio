import React from "react";
import hero from "../assets/tech.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <>
      <div class="flex h-screen items-center justify-center">
        <div class="h-full w-full relative flex items-center justify-center">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "100%",
              width: "100%",
              backgroundColor: "#C7493A",
            }}
          >
            <div class="flex h-fit flex-row items-start justify-around p-20">
              <div class="flex flex-col items-start h-fit justify-evenly flex-[0.5 1] w-full">
                <h2
                  style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                  class="text-white text-[3.25rem] font-semibold"
                >
                  Who I am
                </h2>
                <p class="mt-[1.45rem] font-semibold text-[1.45rem] opacity-70 text-white w-[80%]">
                  My name is Iulian. I am a Junior FrontEnd Developer based in
                  Bedford UK.
                </p>
                <p class="mt-[1.45rem] font-semibold text-[1.45rem] opacity-70 text-white w-[80%]">
                  My day to day consists working as Junior FrontEnd Developer at
                  local company and speding my free time on my hobbies and
                  passions. At the moment I am learing new technologies as
                  React, Tailwind, Es6 and other usefull tools. I love learning
                  more and developing my skills.
                </p>
                <div class="p-[2rem 1rem 1rem] flex items-center flex-col justify-start min-h-[30vh]">
                  <Slider {...settings}>
                    <div>
                      <FontAwesomeIcon icon={faHtml5} size="4x" />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCss3Alt} size="4x" />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faJsSquare} size="4x" />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faReact} size="4x" />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faWordpress} size="4x" />
                    </div>
                  </Slider>
                </div>
              </div>
              <div class="w-[60%]">
                <img
                  src={hero}
                  style={{
                    border: "4px solid white",
                  }}
                  class="rounded-r-[4rem] rounded-bl-[2rem]"
                />
              </div>
            </div>
            {/* <div class="absolute flex items-center justify-between top-[52rem] left-[10%] h-[50px] w-[85%]">
              <div class="w-[95%] h-1 rounded-lg bg-black"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
