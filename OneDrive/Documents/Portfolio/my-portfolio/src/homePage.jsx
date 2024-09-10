import Navbar from './navBar';

function HeroSection() {
  return (
    <>
      <Navbar />
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/bg-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center gloria-hallelujah-regular">
            Hi I'M Venuka Ransindu
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4 text-center">
            Undergraduate in Computer Science and full-stack web developer focused on creating and
            <br />
            managing successful web applications
          </p>
        </div>
      </div>

      <AboutMe />
      <Projects />
      <ContactSection />
      <Footer />
    </>
  );
}

function AboutMe() {
  return (
    <section className="py-16 bg-gray-800" id="about">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white text-lg md:text-2xl flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-left mb-6">
              About Me
            </h1>
            <p className="text-center md:text-left">
              I'm a full-stack developer and computer science student at the University of Westminster, specializing in React, Tailwind CSS, and backend technologies. I enjoy creating innovative, user-focused web applications and continuously refining my skills. My projects reflect my dedication to clean design and functional solutions in both front-end and back-end development.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center">Tools I Use</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'Tailwind', 'NodeJS', 'React', 'EJS', 'ExpressJS', 'MongoDB', 'PostgreSQL'].map(tool => (
                <button key={tool} className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      className="py-16 relative h-screen w-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/project-bg.jpg')` }}
      id="projects"
    >
      {/* Dark Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-20 relative z-10 mt-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-24">
          Projects
        </h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
          {[
            { imgSrc: '/project-1.png', title: 'Weather App', link: '/weather-project' },
            { imgSrc: '/project-2.png', title: 'Blog Site', link: '/blog-site' },
            { imgSrc: '/project-3.png', title: 'Ecommerce Site', link: '/ecommerce-site' }
          ].map((project, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-200 p-4 rounded-md md:w-1/3">
              <img src={project.imgSrc} alt={`Image of ${project.title}`} className="mb-4 rounded-md w-56 md:w-48 lg:w-64" />
              <p className="text-gray-700 mb-4 text-center font-bold">{project.title}</p>
              <a
                href={project.link}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                See More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#282F39] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-14">
          Contact Me
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4 text-center">
            Feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="mb-6">
            <p className="text-lg mb-2">
              <a href="mailto:venukaransindusiriwardena@gmail.com" className="text-blue-400 hover:underline">
                venukaransindusiriwardena@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-gray-800 text-white py-10">
      <div className="absolute inset-0">
        <img
          src="/bg-image.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">
            © {new Date().getFullYear()} Venuka Siriwardena. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/venuka-ransindu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/VenukaSiriwardena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HeroSection;