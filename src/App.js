import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Menu, X, Download, Server, Code, Database, Cloud, Wrench, ArrowUp, MapPin, Phone, Calendar, GraduationCap, Briefcase } from 'lucide-react';

// Import components from their files
import ProjectCard from './components/ProjectCard';
import SkillCategory from './components/SkillCategory';

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sections = useRef({});

  // Resume link
  const resumeUrl = '/NimishGhatiyaFullStack.pdf';

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = 'home';

    Object.keys(sections.current).forEach(sectionId => {
      const section = sections.current[sectionId];
      if (section && section.offsetTop <= pageYOffset + 150) {
        newActiveSection = sectionId;
      }
    });

    setActiveSection(newActiveSection);
    if (pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      {/* Header & Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">Nimish Ghatiya</h1>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`text-lg hover:text-cyan-400 transition-colors duration-300 ${activeSection === link.id ? 'text-cyan-400 border-b-2 border-cyan-400' : 'border-b-2 border-transparent'}`}
              >
                {link.title}
              </a>
            ))}
            <a href={resumeUrl} download="Nimish_Ghatiya_Resume.pdf" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2">
              <Download size={18} />
              <span>Resume</span>
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <nav className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="text-lg hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
              <a href={resumeUrl} download="Nimish_Ghatiya_Resume.pdf" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2">
                <Download size={18} />
                <span>Resume</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="home" ref={el => sections.current.home = el} className="flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white">Nimish Ghatiya</h2>
            <p className="text-2xl md:text-3xl text-cyan-400 mt-4">MERN Stack Developer</p>
           
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Indore, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>nimishghatiya12@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91-9174416052</span>
              </div>
            </div>
            <div className="mt-8 space-x-4">
              <button onClick={() => scrollToSection('projects')} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Me
              </button>
            </div>
        </section>

        {/* About Section */}
        <section id="about" ref={el => sections.current.about = el} className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">About Me</h3>
          <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
            <p className="text-lg text-gray-300 mb-4">
              I am a passionate and dedicated Software Engineer specializing in the MERN stack. With over 2.6 years of hands-on experience at Sofmen Technologies, I've had the opportunity to design, develop, and deploy a wide range of web applications from the ground up. My expertise lies in architecting scalable backend services with Node.js and creating dynamic, high-performance user interfaces using React.js.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              I thrive on solving complex problems and have a proven track record of implementing sophisticated features. This includes engineering real-time functionalities like live chat with WebSockets, integrating secure payment gateways like Stripe, and implementing robust user authentication flows with JWT and OAuth providers.
            </p>
            <p className="text-lg text-gray-300">
              I'm also proficient in modern DevOps practices, having established CI/CD pipelines to automate testing and deployment, ensuring code quality and rapid delivery. I am a strong collaborator, adept at working with designers and stakeholders to translate vision into reality. I'm always eager to learn new technologies and am open to exciting opportunities, whether remote or on-site.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={el => sections.current.experience = el} className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Professional Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <Briefcase className="text-cyan-400 mt-1" size={24} />
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white">Software Engineer</h4>
                  <p className="text-cyan-400 text-lg">Sofmen Technologies Pvt Ltd., Indore</p>
                  <div className="flex items-center space-x-4 text-gray-400 mt-2">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>Sept 2022 – Mar 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Full Stack Development:</strong> Designed and developed end-to-end features, building scalable backend services with Node.js/Express.js and creating dynamic, responsive user interfaces with React.js.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Frontend State & UI:</strong> Managed complex application state using Redux Toolkit or Context API and built reusable, high-performance React components to ensure a seamless user experience.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Real-Time Functionality:</strong> Implemented real-time features like live chat and data updates by engineering a WebSocket (Socket.IO) backend and effectively consuming the data stream on the React client-side.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Payment & API Integrations:</strong> Engineered full-stack payment integrations with Stripe, developing both the secure server-side processing logic and the client-side checkout flow in React.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Authentication:</strong> Implemented secure user authentication flows across the full stack, handling server-side logic with JWT and managing client-side state for providers like Google, Apple, and Microsoft.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Agile Collaboration:</strong> Collaborated with UI/UX designers to translate wireframes into functional components and defined API contracts to ensure seamless front-end and back-end integration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={el => sections.current.skills = el} className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Frontend Development" icon={<Code className="text-cyan-400" />} skills={['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'Material-UI']} />
            <SkillCategory title="Backend Development" icon={<Server className="text-cyan-400" />} skills={['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL', 'WebSockets (Socket.IO)']} />
            <SkillCategory title="Databases & ORMs" icon={<Database className="text-cyan-400" />} skills={['PostgreSQL', 'MongoDB', 'TypeORM', 'Prisma', 'Mongoose']} />
            <SkillCategory title="Cloud & DevOps" icon={<Cloud className="text-cyan-400" />} skills={['AWS','Firebase', 'CI/CD (GitHub Actions, Jenkins)', 'Git']} />
            <SkillCategory title="Authentication & Tools" icon={<Wrench className="text-cyan-400" />} skills={['OAuth 2.0', 'JWT', 'Passport.js', 'Auth0', 'Postman','Swagger', 'Stripe Integration','OpenAI Integration']} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={el => sections.current.projects = el} className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="SongHub Web Application"
              description="Led the end-to-end development of a music collaboration platform. Engineered a secure, full-stack solution with robust identity management, payment/subscription systems, and cloud storage for music files."
              techStack={['Next.js', 'TypeScript', 'MongoDB', 'Auth0', 'Stripe', 'AWS S3', 'RBAC']}
              liveUrl="https://demo.songhub.co"
            />
            <ProjectCard
              title="Tracker App"
              description="Architected and built the server-side infrastructure for a real-time employee and location tracking application. Engineered a high-frequency WebSocket data stream for live tracking and integrated FCM for reliable push notifications."
              techStack={['Node.js', 'Express.js', 'PostgreSQL', 'WebSockets', 'Firebase (FCM)']}
              liveUrl="https://trackerapp.sofmen.com/"/>
            <ProjectCard
              title="Silent Auction Vacations"
              description="Developed the backend for an admin travel portal, creating RESTful APIs to manage travel packages. Implemented dynamic PDF generation for invoices and integrated Google Analytics for dashboard data visualization."
              techStack={['Node.js', 'RESTful APIs', 'PDF Generation', 'Google Analytics API']}
              liveUrl="https://charitygetaways.com/"
              />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" ref={el => sections.current.education = el} className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Education</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-cyan-400 mt-1" size={24} />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">MCA (Master of Computer Application)</h4>
                  <p className="text-cyan-400">Medi-caps University, Indore (MP)</p>
                  <p className="text-gray-400">2022 • CGPA: 8.79</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-cyan-400 mt-1" size={24} />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">BCA (Bachelor of Computer Application)</h4>
                  <p className="text-cyan-400">Rajiv Gandhi Govt. P.G. College, Mandsaur (MP)</p>
                  <p className="text-gray-400">2020 • CGPA: 60.6</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-cyan-400 mt-1" size={24} />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">Intermediate</h4>
                  <p className="text-cyan-400">Adarsh Higher Secondary School, Sitamau (MP Board)</p>
                  <p className="text-gray-400">2017 • CGPA: 68.2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-cyan-400 mt-1" size={24} />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">High School</h4>
                  <p className="text-cyan-400">Nav-Shakti High School Sitamau (MP Board)</p>
                  <p className="text-gray-400">2015 • CGPA: 78.6</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={el => sections.current.contact = el} className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h3>
          <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
            <p className="text-center text-lg text-gray-300 mb-8">
              I'm currently open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out.
            </p>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              // Open default email client with pre-filled message
              const mailtoLink = `mailto:nimishghatiya12@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
              window.open(mailtoLink);
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 w-full">
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="mailto:nimishghatiya12@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail size={30} /></a>
              <a href="https://www.linkedin.com/in/nimish-ghatiya-1457611b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin size={30} /></a>
              <a href="https://github.com/NimishGhatiya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github size={30} /></a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Nimish Ghatiya. All Rights Reserved.</p>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;