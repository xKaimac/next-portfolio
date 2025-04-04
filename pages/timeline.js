import { Container } from "@/styles/contact.styled";
import { CustomHead } from "@/components/pages/head";
import { motion } from "framer-motion";
import { Title } from "@/components/pages/title";
import React from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import { ArticleTemplate } from "@/components/pages/articleTemplate";

const head = "//Work Experience";
const title = "Check out my work history!";

const Timeline = ({ contacts }) => {
  return (
    <React.Fragment>
      <CustomHead text={head} />
      <Title text={title} />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Control Systems Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SAFEgroup Automation
          </h4>
          <p>
            Developing an integrated web portal for monitor the health and
            effectiveness of IIoT solutions developed by SAFEgroup. This project
            uses Role-Based Access Control with a modular template to allow for
            building a custom version on a {"customer's"} server. Created using
            Angular/TailwindCSS.
            <br />
            <br />
            Designed, programmed, and tested a solution that will be deployed at
            over 30 remote locations in Australia that will monitor the health
            of a solar/battery system and provide telemetry back to our servers
            using a micro controller, Satellite internet, and LoRaWAN.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Flinders University
          </h4>
          <p>
            Conducted computer vision research as part of the Summer College of
            Science and Engineering Scholarship. Working with Dr Paulo Santos
            and PhD Candidate Maëlic Neau. The focus of the research was
            improving scene graph data to create more practical Visual Question
            Answering models. The resulting paper has been published in Pattern
            Recognition Letters.
            <br />
            <br />I was awarded another scholarship to develop the AI
            interactions for a collaboration with Flinders University and
            Adelaide Fringe. The research included using a novel approach to
            coordinate multi-LLM interactions when operating in an environment
            with an audience and improv actors.
            <br />
            <br />I am currently collaborating with Cisco and the Innovation
            Centre Adelaide on a project for SA Ambulance Services regarding
            Vehicle telemetry.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Academic Tutor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {"Flinders University"}
          </h4>
          <p>
            Conducted tutorial and Practical sessions for Relational Database
            Modelling and Java Programming for over 200 Undergraduate and
            Postgraduate students. Provided feedback and marked assessments for
            multiple topics
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            AMSD Communications
          </h4>
          <p>
            Designed, developed and installed Telecommunications solutions for
            the NBN project with multiple delivery partners. Worked across
            Australia to provide training and assist with interstate rollouts
            and upgrades. Handled day-to-day communications with clients and
            handled all financial obliga- tions. Employed 3 other technicians.
            Total revenue during active periods of $570,000{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Leading Hand</h3>
          <h4 className="vertical-timeline-element-subtitle">Fulton Hogan</h4>
          <p>
            Lead a team of over 50 technicians on the HFC NBN project. I lead by
            example and would regularly get on the tools to keep me up to date
            with the current state of the technology and to better understand
            the needs of my team on site.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Supervisor</h3>
          <h4 className="vertical-timeline-element-subtitle">{"McDonald's"}</h4>
          <p>
            My first job as a teenager turned into my first management
            experience.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  try {
    const contactResult = await axios.get(
      "https://strapi-portfolio.herokuapp.com/api/contact-infos",
      { params: { populate: "*" } }
    );
    const contactData = contactResult.data;
    console.log(contactData);
    return {
      props: {
        contacts: contactData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Timeline;
