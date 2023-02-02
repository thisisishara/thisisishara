import React from "react";
import "./experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import Typography from "@mui/material/Typography";
import ShoutoutLabs from "../../../res/socials/sl.jpg";

const Experience = () => {
  return (
    <section className="" id="experience">
      <h5>The</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <img src={ShoutoutLabs} alt="ShoutOUT Labs Logo" style={{width: "80px"}} />
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#fff"
              className="timeline__date"
            >
              <p>Apr 2021</p>
              <p>until</p>
              <p>Aug 2022</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <WorkOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Associate Data Scientist
              </Typography>
              <Typography>
                Because you need strength Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need{" "}
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", width: "5rem" }}
              align="right"
              variant="body2"
              color="#fff"
              className="timeline__date"
            >
              <p>Sep 2021</p>
              <p>until</p>
              <p>Mar 2022</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <WorkHistoryOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Data Science Intern (AI & NLP)
              </Typography>
              <Typography>
                Because you need strength Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need Because you need strength Because you
                need strength Because you need strength Because you need
                strength Because you need{" "}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
