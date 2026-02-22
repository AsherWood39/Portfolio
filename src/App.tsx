import { useState, useEffect } from 'react'
import './App.css'
import profileAvatar from './assets/ProfileAvatar.svg'
import githubIcon from './assets/GitHub.svg'
import linkedinIcon from './assets/LinkedIn Circled.svg'
import instagramIcon from './assets/Instagram Circle.svg'
import mediumIcon from './assets/Medium.svg'

function App() {
  const technicalSkills = ['Flutter', 'Python', 'JAVA', 'C', 'Canva', 'Figma', 'HTML', 'CSS'];
  const skillIcons: { [key: string]: string } = {
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'JAVA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'Canva': 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  };
  const [skillIndex, setSkillIndex] = useState(2); // Start with 'JAVA' focused

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % technicalSkills.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [technicalSkills.length]);

  const handlePrev = () => {
    setSkillIndex((prev) => (prev - 1 + technicalSkills.length) % technicalSkills.length);
  };

  const handleNext = () => {
    setSkillIndex((prev) => (prev + 1) % technicalSkills.length);
  };

  return (
    <div className="portfolio-container">
      {/* ... header and main sections remain the same ... */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-pill">
            <a href="#home" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-left">
            <div className="image-container">
              <img src={profileAvatar} alt="Profile" className="profile-large" />
              <div className="profile-small-container">
                <img src={profileAvatar} alt="Profile Small" className="profile-small" />
              </div>
            </div>
          </div>

          <div className="hero-right">
            <header className="hero-header">
              <h1 className="name">Hi, I am Athishta</h1>
              <div className="roles-carousel">
                <div className="roles-slider">
                  <h2 className="role">Data Scientist</h2>
                  <h2 className="role">Flutter Developer</h2>
                  <h2 className="role">Frontend Developer</h2>
                  <h2 className="role">Designer</h2>
                  {/* Duplicated for infinite effect */}
                  <h2 className="role">Data Scientist</h2>
                  <h2 className="role">Flutter Developer</h2>
                  <h2 className="role">Frontend Developer</h2>
                  <h2 className="role">Designer</h2>
                </div>
              </div>
            </header>

            <div className="follow-me">
              <span>Follow me:</span>
              <div className="social-icons">
                <a href="https://github.com/AsherWood39"><img src={githubIcon} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/athishta-p-a-43a7252b3"><img src={linkedinIcon} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/asherwoods_39/?__pwa=1#"><img src={instagramIcon} alt="Instagram" /></a>
                <a href="https://medium.com/@athishtapa05"><img src={mediumIcon} alt="Medium" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">About</h2>
          <p className="bio">
            Proactive and curious tech enthusiast with hands-on experience in Flutter, Python, and UI/UX tools like Figma and Canva. Demonstrates strong problem-solving and adaptability, with proven teamwork through workshop participation and design leadership. Passionate about mobile or web frontend development and AI/ML innovation.
          </p>

          <div className="journey-container">
            <h3 className="sub-title">My Journey</h3>
            <div className="timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Secondary School Examination</h4>
                  <p>CBSE | Class 10 | August, 2021</p>
                  <p>Percentage : 98.6 percent.</p>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Senior School Examination</h4>
                  <p>CBSE | Class 12 | May, 2023</p>
                  <p>Percentage : 96.8 percent.</p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Bachelor of Technology</h4>
                  <p>Computer Science and Engineering | July, 2027</p>
                  <p>Current CGPA : 9.67</p>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Core Team Member</h4>
                  <p>Design Team, MuLearn (College Chapter) <br></br> From 19 Dec 2024</p>
                  <p>Designed posters and digital content. Contributed to building chapter's visual identity.</p>
                  <a href="https://www.figma.com/design/Q79GVn089JDEi9G9qpe4Yz/Mulearn_Posters?node-id=1-12&t=46rdg5WtlJM7PW2D-1" target="_blank" rel="noopener noreferrer" className="proof-link">Proof of Work - Figma</a>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Design Intern</h4>
                  <p>TECHHelp4U <br></br> From 14 July 2025</p>
                  <p>Designed posters, banners, ID cards etc for workshops and events.</p>
                  <a href="https://www.figma.com/design/iuIK2SeFu4aMZcv15aSgzu/Untitled?t=DEK5HDa1z5J6ewqM-1" target="_blank" rel="noopener noreferrer" className="proof-link">Proof of Work - Figma</a>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <h3 className="sub-title">My Skills :</h3>
            <div className="skills-carousel-container">
              <button className="carousel-arrow left" onClick={handlePrev}>&lt;</button>
              <div className="skills-track-wrapper">
                <div className="skills-track">
                  {technicalSkills.map((skill, index) => {
                    const total = technicalSkills.length;
                    let diff = (index - skillIndex + total) % total;
                    if (diff > total / 2) diff -= total;

                    let displayClass = "hidden";
                    if (diff === 0) displayClass = "focused";
                    else if (diff === -1) displayClass = "side near-left";
                    else if (diff === 1) displayClass = "side near-right";
                    else if (diff === -2) displayClass = "side far-left";
                    else if (diff === 2) displayClass = "side far-right";
                    else if (diff < -2) displayClass = "hidden hidden-left";
                    else if (diff > 2) displayClass = "hidden hidden-right";

                    return (
                      <div key={index} className={`skill-card ${displayClass}`}>
                        <div className="skill-icon-container">
                          <img src={skillIcons[skill]} alt={skill} className="skill-icon" />
                        </div>
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="carousel-arrow right" onClick={handleNext}>&gt;</button>
            </div>

            <div className="soft-skills">
              <h4 className="soft-skills-title">Soft Skills</h4>
              <div className="skills-tags">
                {['Active Listening', 'Adaptability', 'Problem-Solving', 'Curious', 'Growth Mindset', 'Time Management'].map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-box">
            <h3 className="sub-title">Workshops & Competitions</h3>
            <p className="placeholder-text">Coming soon...</p>
          </div>

          <div className="detail-box">
            <h3 className="sub-title">Certifications & Courses</h3>
            <p className="placeholder-text">Coming soon...</p>
          </div>
          <div className="extra-details-grid">
            <div className="detail-box">
              <h3 className="sub-title">Area of Interests</h3>
              <div className="interests-list">
                {['AI/ML and Data Science', 'Mobile Frontend Development', 'Web Frontend Development'].map((interest, index) => (
                  <div key={index} className="interest-item">
                    <div className="interest-dot"></div>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-box">
              <h3 className="sub-title">Languages Known</h3>
              <div className="languages-list">
                <div className="language-item">
                  <span className="lang">English</span>
                  <span className="proficiency">Fluent</span>
                </div>
                <div className="language-item">
                  <span className="lang">Malayalam</span>
                  <span className="proficiency">Native</span>
                </div>
                <div className="language-item">
                  <span className="lang">Hindi</span>
                  <span className="proficiency">Basic</span>
                </div>
              </div>
            </div>

            <div className="detail-box hobbies-box">
              <h3 className="sub-title">Hobbies</h3>
              <div className="hobbies-grid">
                {['Chess', 'Drawing', 'Reading', 'Listening to Music'].map((hobby, index) => (
                  <div key={index} className="hobby-card">
                    <span>{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-bento-grid">
            {[
              {
                id: 'scriptclean',
                title: 'ScriptClean',
                desc: 'Adaptive Image Processing Framework for Automated Document Enhancement.',
                tech: ['Python', 'OpenCV', 'NumPy'],
                link: 'https://github.com/AsherWood39/ScriptClean-Document_Image_Enhancer'
              },
              {
                id: 'recure',
                title: 'ReCure',
                desc: 'AI-Driven Ayurvedic Drug Repurposing System using machine learning.',
                tech: ['Python', 'ML', 'Bioinformatics'],
                link: 'https://github.com/AsherWood39/ReCure'
              },
              {
                id: 'ecofinds',
                title: 'EcoFinds',
                desc: 'Sustainable Second-Hand Marketplace for eco-conscious shopping.',
                tech: ['Vite', 'React', 'Firebase'],
                link: 'https://github.com/AsherWood39/EcoFinds-Sustainable-Second-Hand-Marketplace-OdooxNMIT_Hackathon'
              },
              {
                id: 'vestr',
                title: 'Vestr',
                desc: 'Gamified investment simulator tailored for women to master financial literacy through quests.',
                tech: ['Flutter', 'Firebase', 'Django'],
                link: 'https://github.com/AsherWood39/Vestr--Invest_Adventure_Simulator',
                wide: true
              },
              {
                id: 'zora',
                title: 'Zora',
                desc: 'ML platform for EV battery degradation prediction and energy decision support.',
                tech: ['Python', 'Flask', 'Vue.js'],
                link: 'https://github.com/AsherWood39/Zora--Powering_Smarter_Energy_Decisions',
                wide: true
              }
            ].map((project) => (
              <div key={project.id} className={`project-card ${project.wide ? 'grid-wide' : ''}`}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  View Repo
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>+91 7034883659</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <a href="mailto:athishtapa05@gmail.com">athishtapa05@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <a href="https://www.linkedin.com/in/athishta-p-a-43a7252b3" target="_blank" rel="noopener noreferrer">athishta-p-a-43a7252b3</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span>Kochi, Kerala</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
