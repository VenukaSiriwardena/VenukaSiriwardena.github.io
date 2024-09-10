import Navbar from './navBar';
import Footer from './footer';

function Project1() {
    return (
        <>
        <Navbar />
        <div
          className="relative min-h-screen flex flex-col bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/bg-image.jpg')` }}
        >
          {/* Overlay if needed */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 md:px-20 relative z-10 pt-28 pb-8 flex-grow flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-24">
              Weather App
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              {/* Image on the Left */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/2">
                <img
                  src="/project-1.png"
                  alt="Descriptive Alt Text"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Text and Buttons on the Right */}
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Nulla facilisi. Sed varius ex nec turpis consectetur, at fringilla dui luctus.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://venukasiriwardena.github.io/Weather-App/"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/VenukaSiriwardena/Weather-App"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
        </>
    );
}

export default Project1;