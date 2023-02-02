import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { ImNpm } from 'react-icons/im';
import { SiPython } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/thisisishara" target="_blank" rel='noreferrer'><BsGithub /></a>
      <a href="https://www.linkedin.com/in/isharadissanayake" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://www.npmjs.com/~thisisishara" target="_blank" rel='noreferrer'><ImNpm /></a>
      <a href="https://pypi.org/user/thisisishara/" target="_blank" rel='noreferrer'><SiPython /></a>
    </div>
  )
};

export default HeaderSocials;