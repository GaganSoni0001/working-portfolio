 import React, { useState } from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import my from './assets/self2.jpeg';
import myPhoto from './assets/self2.jpeg'; // <-- Your photo
import blood from '../public/blood.jpg';
import oms from '../public/oms.jpg';
import doctor from '../public/doctor.jpg';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      {/* --- Header --- */}
      <div className="header-container">
        <div className="logo"><span className="dot">Gagan Soni</span></div>
        
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a href="#Home" className="active" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      {/* --- Hero Section --- */}
      <main className="main">
        <img src={my} alt="Gagan Soni" className="profile-pic" />
        <h1>
          I'm <span className="highlight-purple">Gagan</span>{' '}
          <span className="highlight-gradient">Soni</span>, Java <br />
          Developer<span className="highlight-white"></span>.
        </h1>
        <p>
          Fresher Java developer with a passion for creating<br />
          efficient backend systems and dynamic web applications.
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
            href="\public\GAGAN SONI.pdf"
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
          <img src={myPhoto} alt="gagan-soni" className="about-pic" />
          <div className="about-text">
            <p>
              Hello! I am a dedicated Java developer 💻 with strong knowledge in
              Core Java, JDBC, JSP, MySQL, and ReactJS.  
              I have built projects like Blood Bank Management, E-Book Store, and Apna Doctor.  
              I’m also learning Data Structures & Algorithms 📚 to improve problem-solving skills
              and have a keen interest in full-stack and mobile app development 🚀.
            </p>

            <div className="skills">
              <div className="skill">
                <span>Java & MySQL</span>
                <Slider defaultValue={90} valueLabelDisplay="auto" />
              </div>
              <div className="skill">
                <span>React JS</span>
                <Slider defaultValue={80} valueLabelDisplay="auto" />
              </div>
              <div className="skill">
                <span>JDBC & JSP</span>
                <Slider defaultValue={85} valueLabelDisplay="auto" />
              </div>
              <div className="skill">
                <span>DSA</span>
                <Slider defaultValue={70} valueLabelDisplay="auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="divider-line"></div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="skills-section">
        <h2 className="skills-title">
          <span className="highlight-dot green" /> My Skills <span className="highlight-dot green" />
        </h2>
        <div className="skills-container">
          <div className="skills-left">
            <h3>Programming<br />Languages</h3>
            <p>
              Strong foundation in backend and web development,<br />
              focusing on scalable and maintainable solutions.
            </p>
          </div>
          <div className="skills-right">
            <ul>
              <li>Java Core & Advanced</li>
              {/* <li>C & C++</li>
              <li>Kotlin (Basic)</li> */}
              <li>MySQL</li>
              <li>JavaScript & React</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
<section id="projects" className="projects-section">
  <h2 className="projects-title">
    featured <span className="highlight-project">projects</span>
  </h2>
  <div className="projects-container">
    <div className="project-card">
      <img src={blood} alt="Blood Bank" className="project-image" />
      <h3>Blood Bank Management</h3>
      <p>
        Java + MySQL based system for managing blood donations, donors, and requests.
        Frontend developed using <strong>React</strong> for a modern and responsive UI.
      </p>
      <a href="#" className="project-link">View Project →</a>
    </div>

    <div className="project-card">
      <img src={oms} alt="Offline Management System" className="project-image" />
      <h3>Offline Management System (OMS)</h3>
      <p>
        Java + MySQL desktop-based system for managing courses, student enquiries,
        and records offline. Frontend interface created with <strong>React</strong>.
      </p>
      <a href="#" className="project-link">View Project →</a>
    </div>

    <div className="project-card">
      <img src={doctor} alt="Apna Doctor" className="project-image" />
      <h3>Apna Doctor</h3>
      <p>
        Java + MySQL healthcare management system for booking appointments,
        managing doctors, and storing patient records. UI built using <strong>React</strong>.
      </p>
      <a href="#" className="project-link">View Project →</a>
    </div>
  </div>
</section>

      {/* --- Contact Section --- */}
      <section id="Contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-heading">Let's talk</h2>
          <p>
            I’m available for internships, freelance work, and full-time opportunities.
            Drop me a message anytime.
          </p>
          <div className="contact-info">
            <div><span>📧</span> gagansoni80551@gmail.com</div>
            <div><span>📞</span> +91 8815808602</div>
            <div><span>📍</span> Khandwa, Madhya Pradesh, India</div>
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
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
