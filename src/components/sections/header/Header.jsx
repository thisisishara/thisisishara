import React from "react";
import "./header.css";
// import CV from "../../../res/cv.pdf";
import CV from "../../../res/cvr.pdf";
// import Me from "../../../res/avatars/12.png";
import Me from "../../../res/me_sbg_round.png";
// import MeHover from "../../../res/avatars/7.png";
import MeHover from "../../../res/me_sbg_round.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.h5
          className="text__light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          This is
        </motion.h5>
        <motion.h1
          className="text__gradient_tf"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Ishara Dissanayake
        </motion.h1>
        <motion.h5
          className="text__light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          a <span className="text__gradient_spacy">Data Scientist</span> @ShoutOUT AI
        </motion.h5>
        <div className="cta">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            href={CV}
            className="btn"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            href="mailto:thisismaduishara@gmail.com"
            className="btn btn-primary"
          >
            Drop an Email
          </motion.a>
        </div>

        <HeaderSocials />

        <div className="avatar__container">
          <div className="me">
            <img src={Me} alt="Me" className="me1 no-drag" />
            <img src={MeHover} alt="Me" className="me2 no-drag" />
          </div>
        </div>

        <a href="." className="scroll__down hidden">
          Reload
        </a>
      </div>
    </header>
  );
};

export default Header;
