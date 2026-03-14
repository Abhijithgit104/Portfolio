import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = {
    name: "Abhijith T M",
    background: "A dedicated Bachelor of Computer Applications (BCA) graduate specializing in modern web technologies. Passionate about crafting high-performance, responsive web applications and continuously refining skills in both frontend and backend development to deliver comprehensive digital solutions using React, Django, and Next.js.",
    careerGoals: "Full stack developer",
    skills: ["HTML", "CSS", "Javascript", "React", "Redux", "Next JS", "Typescript", "Python", "Django", "Flask"],
    email: "abhijithtm861@gmail.com",
    phone: "8891304194",
    linkedin: "www.linkedin.com/in/abhijith-tm-34304a259",
    experience: [
      {
        role: "Python full stack development intern",
        company: "Upcode Software Labs, Calicut",
        period: "June 2025 - January 2026",
        achievements: [
          "Engineered highly responsive, user-centric web applications by leveraging the combined power of React and Django, ensuring seamless full-stack integration.",
          "Worked closely with senior engineering teams to architect and optimize PostgreSQL database schemas, improving query performance and data integrity.",
          "Designed and implemented robust RESTful APIs that facilitated efficient data communication between mobile platforms and web frontends.",
          "Gained hands-on experience in the software development lifecycle (SDLC), from initial requirement gathering to final deployment and maintenance."
        ]
      }
    ],
    projects: [
      {
        title: "Full-Stack E-commerce Application",
        description: "A comprehensive full-stack e-commerce solution with a Vite-powered React frontend and a robust Django REST API backend. Features secure JWT authentication, Redux state management, and a scalable PostgreSQL database schema.",
        tools: ["React", "Django", "PostgreSQL", "Redux", "JWT"],
        github: "https://github.com/Abhijithgit104/Django-ecommerce.git",
        demo: "#",
        image: "assets/images/ecommerce.png"
      },
      {
        title: "Next.js Ecommerce Store",
        description: "A high-performance modern storefront built with the latest Next.js App Router for optimal routing and speed. Implemented strong typing with TypeScript to ensure code reliability and focused on a seamless user experience with performance optimizations.",
        tools: ["Next.js", "App Router", "Typescript", "Tailwind CSS"],
        github: "https://github.com/Abhijithgit104/app-router-nextjs.git",
        demo: "https://app-router-nextjs-nu.vercel.app/",
        image: "assets/images/Screenshot 2026-03-11 120004.png"
      },
      {
        title: "Personal Portfolio",
        description: "A premium, responsive personal portfolio website designed and developed using React.js and glassmorphism effects. Optimized for high-quality visual experience and performance to showcase professional projects.",
        tools: ["React", "Custom CSS", "Glassmorphism", "Framer Motion"],
        github: "https://github.com/Abhijithgit104/portfolio.git",
        demo: "#",
        image: "assets/images/image.png"
      },
      {
        title: "Flipkart Homepage Clone",
        description: "A pixel-perfect recreation of the Flipkart homepage using semantic HTML and custom CSS. Focused accurately on responsive design principles and UI fidelity compared to the original site.",
        tools: ["HTML", "CSS", "Responsive Design"],
        github: "https://github.com/Abhijithgit104/Flipkart-clone.git",
        demo: "https://flipkart-clone-lyart.vercel.app/",
        image: "assets/images/flipkart_clone.png"
      }
    ],
    certifications: [
      "Python Full Stack Development Certification - Upcode",
      "Modern Web Development with React and Redux",
      "BCA Degree - Ideal College"
    ]
  };

  return (
    <div className="portfolio-container">
      {/* Background Glow */}
      <div className="bg-glow"></div>

      {/* Navigation */}
      <nav className={`navbar transition-all duration-500 ease-in-out ${scrollPosition > 50 ? 'scrolled shadow-lg' : ''}`}>
        <div className="logo gradient-text cursor-pointer hover:scale-110 transition-transform">ATM</div>
        <ul className="nav-links flex items-center space-x-8">
          <li className="hover:-translate-y-1 transition-transform"><a href="#home">Home</a></li>
          <li className="hover:-translate-y-1 transition-transform"><a href="#about">About</a></li>
          <li className="hover:-translate-y-1 transition-transform"><a href="#projects">Projects</a></li>
          <li className="hover:-translate-y-1 transition-transform"><a href="#experience">Experience</a></li>
          <li className="hover:-translate-y-1 transition-transform"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h5 className="intro-badge">Available for Hire</h5>
            <h1 className="hero-title text-6xl md:text-7xl font-extrabold tracking-tight">
              Hi, I'm <span className="gradient-text">{data.name}</span>
            </h1>
            <h2 className="hero-subtitle text-2xl md:text-3xl text-gray-400 mt-2 font-medium">{data.careerGoals}</h2>
            <p className="hero-desc">
              I am a passionate Full Stack Developer currently pursuing my BCA, with a deep focus on building 
              high-performance web applications. I blend creative design with technical excellence using React, 
              Django, and Next.js to solve complex problems and create impactful digital experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-socials">
              <a href={`mailto:${data.email}`} target="_blank" rel="noreferrer">Email</a>
              <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`tel:${data.phone}`} target="_blank" rel="noreferrer">Phone</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src="assets/images/profile.png" alt={data.name} className="hero-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-grid">
          <div className="about-card glass">
            <h3>Background</h3>
            <p>{data.background}</p>
          </div>
          <div className="about-card glass">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <div key={index} className="skill-tag hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Best Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                   {project.tools.map((tool, i) => (
                     <span key={i}>{tool}</span>
                   ))}
                </div>
                <div className="project-links mt-auto flex gap-6">
                  <a href={project.github} className="link-icon flex items-center gap-1 hover:underline">
                    GitHub
                  </a>
                  <a href={project.demo} className="link-icon flex items-center gap-1 hover:underline">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </div>
        <div className="experience-list">
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item glass">
              <div className="exp-left">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="exp-period">{exp.period}</p>
              </div>
              <div className="exp-right">
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section id="awards" className="awards-section">
        <div className="section-header">
          <h2 className="section-title">Certifications & Awards</h2>
          <div className="title-underline"></div>
        </div>
        <div className="awards-grid">
           {data.certifications.map((award, index) => (
             <div key={index} className="award-item glass">
               <span className="award-bullet">★</span>
               <p>{award}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-method glass">
              <span>Email</span>
              <p>{data.email}</p>
            </div>
            <div className="contact-method glass">
              <span>Phone</span>
              <p>{data.phone}</p>
            </div>
            <div className="contact-method glass">
              <span>LinkedIn</span>
              <p>{data.linkedin}</p>
            </div>
          </div>
          <form className="contact-form glass">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 {data.name}. Built with Modern React.</p>
      </footer>
    </div>
  );
};

export default App;
