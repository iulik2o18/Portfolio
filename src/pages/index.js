import React from "react";
import hero from "../assets/stock-photo1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import cv from "../assets/Iulian-Spataru.pdf";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <>
      <div class="flex h-screen items-center justify-center">
        <div class="h-full w-full relative flex items-center justify-center">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              height: "100%",
              backgroundColor: "#C7493A",
              flex: "35% 1",
            }}
          >
            <div class="flex justify-start m-3 h-full items-end">
              <div class="m-12 w-full items-center flex justify-start flex-col">
                <a href="https://uk.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://en-gb.facebook.com">
                  <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                </a>
                <a href="https://www.instagram.com/?hl=en">
                  <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                </a>
                <a href="https://twitter.com/?lang=en">
                  <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                </a>
              </div>
            </div>
          </div>
          <img src={hero} class="landing--img" alt="" />
          <div
            style={{
              display: "flex",
              flex: "65% 1",
              justifyContent: "center",
              backgroundColor: "#689775",
              height: "100%",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div class="text-white w-[45%] mr-28 non-italic">
              <h6 class="font-medium text-3xl mb-[-0.85rem] opacity-80">
                Junior FrontEnd Developer
              </h6>
              <h1 class="font-semibold text-[3.25rem] leading-[110%] !my-[1rem] mx-0">
                Iulian Spătaru
              </h1>
              <p class="mt-[1.45rem] font-semibold text-[1.45rem] opacity-70">
                Competent and team oriented junior programmer with 2+ year
                experience of working as a junior php programmer. Good knowledge
                of html, css, php, javascript and personal projects in difrent
                frameworks ranging from pygame, react, vue.js, tailwind
                wordpress etc.
              </p>
              <div class="flex items-center mt-10 justify-between w-[350px]">
                <a href={cv} target="_blank">
                  <Button
                    variant="text"
                    style={{
                      color: "white",
                      width: "150px",
                      border: "3px solid white",
                      height: "50px",
                      fontSize: "1.25rem",
                      transition: "100ms ease-out",
                      fontWeight: "600",
                      borderRadius: "30px",
                      textTransform: "inherit",
                      textDecoration: "none",
                    }}
                    sx={{
                      ":hover": {
                        bgcolor: "white",
                        color: "black !important",
                        border: "3px solid white !important",
                      },
                    }}
                  >
                    <span>Download CV</span>
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    variant="text"
                    style={{
                      color: "white",
                      width: "150px",
                      border: "3px solid #A33327",
                      height: "50px",
                      fontSize: "1.25rem",
                      transition: "100ms ease-out",
                      fontWeight: "600",
                      borderRadius: "30px",
                      textTransform: "inherit",
                      textDecoration: "none",
                      backgroundColor: "#A33327",
                    }}
                    sx={{
                      ":hover": {
                        bgcolor: "transparent !important",
                        color: "white !important",
                        border: "3px solid white !important",
                      },
                    }}
                  >
                    <span>Contact</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
