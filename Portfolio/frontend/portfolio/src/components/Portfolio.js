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
import icondjango from '../static/icondjango.jpeg';
import ovi from '../static/ovi.png';
import ca from '../static/ca.png';
import code from '../static/5764018.jpg';
import Robofriends from '../static/Robofriends.png'
import scriptum1 from '../static/scriptum1.png';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>ST</h1>
        <nav>
          <ul>
            <li><a href="#about"
                    style={{color: 'blue',
                    fontsize: 'bold'}}>About Me</a></li>
            <li><a href="#skills"
                    style={{color: 'blue',
                    fontsize: 'bold'}}>Skills</a></li>
            <li><a href="#education"
                    style={{color: 'blue',
                    fontsize: 'bold'}}>Education</a></li>
            <li><a href="#projects"
                    style={{color: 'blue',
                    fontsize: 'bold'}}>Projects</a></li>
            <li><a href="#contacts"
                    style={{color: 'blue',
                    fontsize: 'bold'}}>Contacts</a></li>
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
            <div className="download-cv">
                <h2 className="text-center">Download CV</h2><br></br>
                <a href="../static/TUFS.pdf" download>
                    Get CV
                </a>
            </div>
      <div id="skills" className="portfolio-section">
        <h2 className="text-center">Skills</h2>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNode}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <img src={icondjango} alt="Django"
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faPython}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faFigma}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase}
                    style={{width: '60px', height: '60px'}}/>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGithub}
                    style={{width: '60px', height: '60px'}}/>
          </div>
        </div>
      </div>

      <div id="education" className="portfolio-section">
        <h2 className="text-center">Education</h2>
        <div className="education-logos">
          <img src="../static/di.png" alt="" />
          <img src="../static/gb.jpeg" alt="" />
        </div>
      </div>

      <div id="projects" className="portfolio-section">
        <h2 className="text-center">Projects</h2>
        <div className="project-slider">
          <div className="project">
            <div className="project-image">
              <img src={ovi} alt="OVI" style={{width: '300px', height: '100%'}}/>
              <div className="project-hover">
                <h3>Alex Ovechkin Tribute Page</h3>
                <p>Bootcamp Prep Project</p>
                <a href="https://github.com/MrShtash/DI-Bootcamp-Stage1/tree/main/Final-Project"
                        target="_blank"
                        rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={ca} alt="CA" style={{width: '300px', height: '100%'}}/>
              <div className="project-hover">
                <h3>Comfortalia</h3>
                <p>Servis for Olim's</p>
                <a href="https://github.com/MrShtash/DI_Hackathon_1"
                        target="_blank"
                        rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={Robofriends} alt="" style={{width: '300px', height: '100%'}}/>
              <div className="project-hover">
                <h3>Robofriends</h3>
                <p>Mini-project</p>
                <a href="https://github.com/MrShtash/Di-Learninig/tree/45df9940a2e07a37d2bab22f19e052f2f40d5ecc/Week12/Day2/Daily/robo"
                        target="_blank"
                        rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={scriptum1} alt="" style={{width: '300px', height: '100%'}}/>
              <div className="project-hover">
                <h3>Scriptum</h3>
                <p>Bootcamp final project</p>
                <a href="https://scriptum.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>


          <div className="project">
            <div className="project-image">
              <img src={code} alt="" style={{width: '300px', height: '100%'}}/>
              <div className="project-hover">
                <h3>See Soon</h3>
                <p>See Soon</p>
                <a href="https://github.com/MrShtash"
                        target="_blank"
                        rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>




        </div>
      </div>

      <div id="contacts" className="portfolio-section">
        <h2 className="text-center">Contacts</h2>
        <div className="contact-form">
          <h3>Get in touch</h3>
          {/* <input type="text" placeholder="Name" />
          <input type="email" placeholder="Example@email.com" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit" style={{backgroundColor: 'white',
                                        color: 'blue',
                                        borderColor: 'white',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}>Send</button> */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/stuf/"
                    target="_blank"
                    rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}
                                                style={{width: '30px',
                                                height: '30px'}}/></a>
            <a href="https://github.com/MrShtash"
                    target="_blank"
                    rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}
                                                style={{width: '30px',
                                                height: '30px'}}/></a>
            <a href="https://www.facebook.com/StanislavTuf?locale=ru_RU"
                    target="_blank"
                    rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}
                                                style={{width: '30px',
                                                height: '30px'}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
