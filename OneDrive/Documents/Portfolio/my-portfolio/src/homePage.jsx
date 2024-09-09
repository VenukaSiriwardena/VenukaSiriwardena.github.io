import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 bg-opacity-70 p-8 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold dela-gothic-one-regular">
            Venuka Siriwardena
          </div>

          <div className="hidden md:flex space-x-16">
            <a href="#" className="font-bold text-lg text-white hover:text-purple-800">HOME</a>
            <a href="#" className="font-bold text-lg text-white hover:text-purple-800">ABOUT</a>
            <a href="#" className="font-bold text-lg text-white hover:text-purple-800">PROJECTS</a>
            <a href="#" className="font-bold text-lg text-white hover:text-purple-800">CONTACT</a>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-70 p-4">
            <a href="#" className="block text-white py-2">HOME</a>
            <a href="#" className="block text-white py-2">ABOUT</a>
            <a href="#" className="block text-white py-2">PROJECTS</a>
            <a href="#" className="block text-white py-2">CONTACT</a>
          </div>
        )}
      </nav>

      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/bg-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center gloria-hallelujah-regular">
            Hi I'M Venuka Ransindu
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4 text-center">
            Undergraduate in Computer Science and full-stack web developer focused on creating and<br />
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
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="w-full md:w-1/2 text-white text-lg md:text-2xl flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-left mb-6">
              About Me
            </h1>
            <p className="text-center md:text-left mr-10">
              I'm a full-stack developer and computer science student at the University of Westminster, specializing in React, Tailwind CSS, and backend technologies. I enjoy creating innovative, user-focused web applications and continuously refining my skills. My projects reflect my dedication to clean design and functional solutions in both front-end and back-end development.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center">Tools I Use</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                HTML
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                JavaScript
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                CSS
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Bootstrap
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Tailwind
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                NodeJS
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                React
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                EJS
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                ExpressJS
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                MongoDB
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                PostgreSQL
              </button>
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
      className="py-16 relative h-screen w-full bg-center bg-repeat md:bg-no-repeat"
      style={{ backgroundImage: `url('/project-bg.jpg')` }}
    >
      {/* Dark Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-20 relative z-10 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-left mb-24">
            Projects
          </h1>
        </div>
        
        {/* Responsive Flex Containers */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
          {/* Container 1 */}
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-md md:w-1/3">
            <img src="/project-1.png" alt="Image 1" className="mb-4 rounded-md w-56 md:w-48 lg:w-64"/>
            <p className="text-gray-700 mb-4 text-center font-bold">Weather App</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">See More</button>
          </div>

          {/* Container 2 */}
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-md md:w-1/3">
            <img src="/project-2.png" alt="Image 2" className="mb-4 rounded-md w-56 md:w-48 lg:w-64"/>
            <p className="text-gray-700 mb-4 text-center font-bold">Blog Site</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">See More</button>
          </div>

          {/* Container 3 */}
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-md md:w-1/3">
            <img src="/project-3.png" alt="Image 3" className="mb-4 rounded-md w-56 md:w-48 lg:w-64"/>
            <p className="text-gray-700 mb-4 text-center font-bold">Ecommerce Site</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">See More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection () {
  return (
    <section id="contact" className="bg-[#282F39] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-left mb-14 ml-16">Contact Me</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">Feel free to reach out to me via email or connect with me on social media.</p>
          
          <div className="mb-6">
            <p className="text-lg mb-2"><a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">venukaransindusiriwardena@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

function Footer (){
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
          <p className="text-lg mb-4">© {new Date().getFullYear()} Venuka Siriwardena. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
