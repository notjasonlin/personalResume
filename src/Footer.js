import React from 'react';
import Bubble from './Bubble';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import any icons you need
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">Jason Lin</div>
      <div className="resume">
        <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <div className="bubbles">
        <Bubble href="https://www.linkedin.com/in/not-jason-lin/" icon={FaLinkedin} />
        <Bubble href="https://github.com/notjasonlin" icon={FaGithub} />
        <Bubble href="jason@bookeventa.com" icon={FaEnvelope} />
      </div>
    </div>
  );
};

export default Footer;
