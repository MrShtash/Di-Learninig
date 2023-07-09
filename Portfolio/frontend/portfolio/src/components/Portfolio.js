import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faFigma} from '@fortawesome/free-brands-svg-icons';
import {faFacebook,
        faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {
        faPython,
        faNode,
        faReact,
        faCss3Alt,
        faHtml5
    } from '@fortawesome/free-brands-svg-icons';
import icondjango from '../static/icondjango.jpeg'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>ST</h1>
        <nav>
          <ul>
            <li><a href="#about" style={{color: 'blue', fontsize: 'bold'}}>About Me</a></li>
            <li><a href="#skills" style={{color: 'blue', fontsize: 'bold'}}>Skills</a></li>
            <li><a href="#education" style={{color: 'blue', fontsize: 'bold'}}>Education</a></li>
            <li><a href="#projects" style={{color: 'blue', fontsize: 'bold'}}>Projects</a></li>
            <li><a href="#contacts" style={{color: 'blue', fontsize: 'bold'}}>Contacts</a></li>
          </ul>
        </nav>
      </header>

      <div id="about" className="portfolio-section">
        <div className="about-content">
            <div className="about-image">
            <img src="../static/avatar.jpeg" alt="" />
            </div>
            <div className="about-text">
            <h2>Stanislav Tuf</h2><br></br>
            <h3>Development and design</h3><br></br>
            <p>I believe that any product can be developed and improved</p>
            <a href="#projects" style={{color: 'blue', fontsize: 'bold'}}>See More</a>
            </div>
        </div>
       </div>
      <div id="skills" className="portfolio-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">
            {/* <img src="html_icon.png" alt="HTML" /> */}
            <FontAwesomeIcon icon={faHtml5} style={{width: '60px', height: '60px'}}/>
            {/* <span>HTML</span> */}
          </div>
          <div className="skill">
            {/* <img src="css_icon.png" alt="CSS" /> */}
            <FontAwesomeIcon icon={faCss3Alt} style={{width: '60px', height: '60px'}}/>
            {/* <span>CSS</span> */}
          </div>
          <div className="skill">
            {/* <img src="react_icon.png" alt="React" /> */}
            <FontAwesomeIcon icon={faReact} style={{width: '60px', height: '60px'}}/>
            {/* <span>React</span> */}
          </div>
          <div className="skill">
            {/* <img src="react_icon.png" alt="Node.js" /> */}
            <FontAwesomeIcon icon={faNode} style={{width: '60px', height: '60px'}}/>
            {/* <span>Node.js</span> */}
          </div>
          <div className="skill">
            {/* <img src="../../public/static/icon-django.jpeg" alt="Django" /> */}
            <img src={icondjango} alt="Django" style={{width: '60px', height: '60px'}}/>
            {/* <span>Django</span> */}
          </div>
          <div className="skill">
            {/* <img src="react_icon.png" alt="Python" /> */}
            <FontAwesomeIcon icon={faPython} style={{width: '60px', height: '60px'}}/>
            {/* <span>Python</span> */}
          </div>
          <div className="skill">
            {/* <img src="react_icon.png" alt="Figma" /> */}
            <FontAwesomeIcon icon={faFigma} style={{width: '60px', height: '60px'}}/>
            {/* <span>Figma</span> */}
          </div>
          <div className="skill">
            {/* <img src="./static/database-solid.svg" alt="PostgreSQL" /> */}
            <FontAwesomeIcon icon={faDatabase} style={{width: '60px', height: '60px'}}/>
            {/* <span>PostgreSQL</span> */}
          </div>
          <div className="skill">
            {/* <img src="./static/database-solid.svg" alt="GitHub" /> */}
            <FontAwesomeIcon icon={faGithub} style={{width: '60px', height: '60px'}}/>
            {/* <span>GitHub</span> */}
          </div>
        </div>
      </div>

      <div id="education" className="portfolio-section">
        <h2>Education</h2>
        <div className="education-logos">
          <img src="./static/di.png" alt="" />
          <img src="./static/gb.jpeg" alt="" />
        </div>
      </div>

      <div id="projects" className="portfolio-section">
        <h2>Projects</h2>
      </div>

      <div id="contacts" className="portfolio-section">
        <h2>Contacts</h2>
        <div className="contact-form">
          <h3>Get in touch</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/stuf/"><FontAwesomeIcon icon={faLinkedin} style={{width: '30px', height: '30px'}}/></a>
            <a href="https://github.com/MrShtash"><FontAwesomeIcon icon={faGithub} style={{width: '30px', height: '30px'}}/></a>
            <a href="https://www.facebook.com/StanislavTuf?locale=ru_RU"><FontAwesomeIcon icon={faFacebook} style={{width: '30px', height: '30px'}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
