import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import HotelIcon from "@mui/icons-material/Hotel";
import Typography from "@mui/material/Typography";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Portfolio = () => {
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
              backgroundColor: "#689775",
            }}
          >
            <div class="flex justify-between w-full items-center flex-col flex-[0.5 1]">
              <div class="flex flex-col items-start h-fit justify-evenly w-full ml-20 mb-12">
                <h2
                  style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                  class="text-white text-[3rem] font-semibold"
                >
                  What my programming skills include
                </h2>
                <p class="mt-[1.45rem] font-semibold text-[1.50rem] opacity-90 text-white w-[80%]">
                  There are a few skills that I use most frequent and they are
                  the following.
                </p>
              </div>
              <div class="flex flex-row w-full ml-[2rem]">
                <ProgressBar
                  className="border-4 rounded-lg border-white bg-white w-[50%] text-black my-4 mx-5"
                  barContainerClassName="bg-[#A33327] rounded-lg w-[85%]"
                  completedClassName="bg-[#A33327] w-[80%] rounded-lg h-[1.4rem]"
                  completed={85}
                />
                <p class="mt-[1rem] font-bold text-[1.45rem] text-white w-[10%]">
                  HTML
                </p>
              </div>
              <div class="flex flex-row w-full ml-[2rem]">
                <ProgressBar
                  className="border-4 rounded-lg border-white bg-white w-[50%] text-black my-4 mx-5"
                  barContainerClassName="bg-[#A33327] rounded-lg w-[70%]"
                  completedClassName="bg-[#A33327] w-[80%] rounded-lg h-[1.4rem]"
                  completed={70}
                />
                <p class="mt-[1rem] font-bold text-[1.45rem] text-white w-[10%]">
                  CSS
                </p>
              </div>
              <div class="flex flex-row w-full ml-[2rem]">
                <ProgressBar
                  className="border-4 rounded-lg border-white bg-white w-[50%] text-black my-4 mx-5"
                  barContainerClassName="bg-[#A33327] rounded-lg w-[60%]"
                  completedClassName="bg-[#A33327] w-[80%] rounded-lg h-[1.4rem]"
                  completed={60}
                />
                <p class="mt-[1rem] font-bold text-[1.45rem] text-white w-[10%]">
                  JavaScript
                </p>
              </div>
              <div class="flex flex-row w-full ml-[2rem]">
                <ProgressBar
                  className="border-4 rounded-lg border-white bg-white w-[50%] text-black my-4 mx-5"
                  barContainerClassName="bg-[#A33327] rounded-lg w-[72%]"
                  completedClassName="bg-[#A33327] w-[80%] rounded-lg h-[1.4rem]"
                  completed={72}
                />
                <p class="mt-[1rem] font-bold text-[1.45rem] text-white w-[10%]">
                  PHP
                </p>
              </div>
            </div>
            <div
              style={{ flex: "1 1 50%" }}
              class="flex justify-between w-full flex-col"
            >
              <div class="flex flex-col items-center h-fit justify-evenly w-full content-center">
                <h2
                  style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                  class="text-white text-[3rem] font-semibold"
                >
                  Experience
                </h2>
              </div>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="white"
                  >
                    Mar 2020 - Present
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <ApartmentIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2, color: "white" }}>
                    <Typography variant="h6" component="span">
                      Xigen
                    </Typography>
                    <Typography>Frontend/Backend Developer</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="white"
                  >
                    Oct 2019 - Mar 2020
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2, color: "white" }}>
                    <Typography variant="h6" component="span">
                      Cromwell Hotel
                    </Typography>
                    <Typography>Receptionist</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="white"
                  >
                    Apr 2018 - Sep 2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="success">
                      <LocalConvenienceStoreIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2, color: "white" }}>
                    <Typography variant="h6" component="span">
                      Prime Advertising
                    </Typography>
                    <Typography>Junior Web Developer</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="white"
                  >
                    Oct 2016 - Apr 2017
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot color="secondary">
                      <PhoneInTalkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2, color: "white" }}>
                    <Typography variant="h6" component="span">
                      GFK
                    </Typography>
                    <Typography>Call Center Operator</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
