import React from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import self3 from './assets/self3.jpg';

function App() {
  return (
    <div className="app">
      {/* --- Header --- */}
      <header className="header">
        <div className="logo"><span className="dot">Piyush Kaithwas</span></div>
        <nav className="nav">
          <a href="#Home" className="active">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>
        <button
          className="bg-amber-800"
          onClick={() => {
            const section = document.getElementById("Contact");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Connect With Me
        </button>
      </header>

      {/* --- Hero Section --- */}
      <main className="main">
        <img src={self3} alt="my-image" className="profile-pic" />
        <h1>
          I'm <span className="highlight-purple">Piyush</span>{' '}
          <span className="highlight-gradient">Kaithwas</span>, Java <br />
          developer<span className="highlight-white"></span>.
        </h1>
        <p>
          Passionate Java developer specializing in creating <br />robust and
          efficient backend systems.
        </p>
        <div className="buttons">
          <button
            className="bg-amber-800"
            onClick={() => {
              const section = document.getElementById("Contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Connect With Me
          </button>
          <a
            href="/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            My Resume
          </a>
        </div>
      </main>

      {/* --- About Me Section --- */}
      <section id="about" className="about-section">
        <h2 className="about-title">About <span className="highlight-me">me</span></h2>
        <div className="about-content">
          <img src={self3} alt="piyush-kaithwas" className="about-pic" />
          <div className="about-text">
            <p>
              A brief intro, who am I?
              A dedicated Java developer 💻 with a passion for crafting efficient and robust backend systems.
              Currently, I am expanding my skill set by delving into Data Structures and Algorithms (DSA). I believe that a solid understanding of DSA 📚 is crucial for optimizing performance & solving complex problems efficiently.🔍
              In addition to my Java expertise, I am passionate about learning Android development to build innovative mobile applications. 🚀
            </p>

            {/* ✅ Merged Slider Section Starts Here */}
            <div className="skills">
              <div className="skill">
                <span>Java & Mysql</span>
                <Slider defaultValue={90} valueLabelDisplay="auto" />
              </div>
              <div className="skill">
                <span>React JS</span>
                <Slider defaultValue={75} valueLabelDisplay="auto" />
              </div>
              <div className="skill">
                <span>Jdbc & Jsp</span>
                <Slider defaultValue={85} valueLabelDisplay="auto" />
              </div>
              <div className="skill">
                <span>Dsa</span>
                <Slider defaultValue={70} valueLabelDisplay="auto" />
              </div>
            </div>
            {/* ✅ Slider Section Ends */}
          </div>
        </div>

        <div className="divider-line"></div>
      </section>

      {/* --- My Skills Section --- */}
      <section id="skills" className="skills-section"> ✅ My Skills
        <h2 className="skills-title">
          <span className="highlight-dot green" /> My Skills <span className="highlight-dot green" />
        </h2>
        <div className="skills-container">
          <div className="skills-left">
            <h3>My Programming<br />language.</h3>
            <p>
              I focus on all things design and web related. <br />
              With each of my services, my goal is to deliver an impactful and <br />
              elevating digital experience for everyone.
            </p>
          </div>
          <div className="skills-right">
            <ul>
              <li>C language</li>
              <li>C++ language</li>
              <li>Java Core language</li>
              <li>Java Advance</li>
              <li>Kotlin (familiar)</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Toolboxes Section --- */}
      <section className="toolbox-section">
        <div className="toolbox-card">
          <div className="toolbox-left">
            <h2>
              My Development<br />
              toolboxes.
            </h2>
            <p>
              I focus on all things design and web related.<br />
              With each of my services, my goal is to
              deliver an impactful <br />
              and elevating digital experience for everyone.
            </p>
          </div>
          <div className="toolbox-right">
            <ul>
              <li>Visual - studio</li>
              <li>GitHub</li>
              <li>Git</li>
              <li>testing - units</li>
              <li>Linux</li>
              <li>Eclipse - Tools</li>
              <li>Leetcode</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="projects-section"> ✅ Projects
        <h2 className="projects-title">
          featured <span className="highlight-project">projects</span>
        </h2>
        <div className="projects-container">
          <div className="project-card">
            <img src="/port.jpg" alt="Project 1" className="project-image" />
            <h3>Portfolio Website</h3>
            <p>A modern responsive portfolio built with React, showcasing animations, skills, and contact info.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
          <div className="project-card">
            <img src="/ecomm.jpg" alt="Project 2" className="project-image" />
            <h3>E-commerce Store</h3>
            <p>A React + Redux based online store with product filters, shopping cart, and secure checkout.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
          <div className="project-card">
            <img src="/pay.jpg" alt="Project 3" className="project-image" />
            <h3>Payroll System</h3>
            <p>Typically includes a combination of front-end, back-end, database, and cloud technologies.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="Contact" className="contact-section"> ✅ Contact
        <div className="contact-left">
          <h2 className="contact-heading">Let's talk</h2>
          <p>
            I'm currently available to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-info">
            <div><span>📧</span> piyushkaithwas036@gmail.com</div>
            <div><span>📞</span> +91 97701 08221</div>
            <div><span>📍</span> indore , India</div>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <label htmlFor="message">Write your message here</label>
            <textarea id="message" rows="6" placeholder="Enter your message"></textarea>
            <button type="submit" className="send-button">Send Message</button>
            <button type="submit" className="submit-button">Submit now</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
