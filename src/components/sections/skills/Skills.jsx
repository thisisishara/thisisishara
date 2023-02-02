import React from "react";
import "./skills.css";
import { HiLightningBolt } from "react-icons/hi";

const Skills = () => {
  return (
    <section className="" id="skills">
      <h5>The</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__webdev">
          <h3>Web Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__datascience">
          <h3>Web Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <HiLightningBolt className="skills__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
