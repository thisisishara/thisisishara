import React from "react";
import "./about.css";
import Me from "../../../res/avatars/8.png";
import { BiCubeAlt, BiBuildings, BiBadgeCheck } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={Me} alt="About me" className="about__me__img" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a role={"button"} href="#experience">
              <article className="about__card">
                <BiBuildings className="about__icon" />
                <h5>Experience</h5>
                <small>1+ years</small>
              </article>
            </a>
            <a role={"button"} href="#publications">
              <article className="about__card">
                <BiCubeAlt className="about__icon" />
                <h5>Research Papers</h5>
                <small>1</small>
              </article>
            </a>
            <a role={"button"} href="#education">
              <article className="about__card">
                <BiBadgeCheck className="about__icon" />
                <h5>Education</h5>
                <small>BSc (Hons) Data Science</small>
              </article>
            </a>
          </div>

          <p>
            An associate data scientist (AI & NLP) and a Data Science
            undergraduate with remarkable academic performance. Keen on learning
            new trends in <code className="about__highlights">data sciene</code>
            , <code className="about__highlights">AI</code>,{" "}
            <code className="about__highlights">software development</code>, and{" "}
            <code className="about__highlights">computer security</code>.
            Focused on contributing to projects with a better social impact
            while acquiring and enhancing skills constantly.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
