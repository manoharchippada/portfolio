import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader';
import SplineBackground from './components/SplineBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide preloader after animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Increased from 3500ms to 5000ms to match new preloader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading && <PreLoader />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <SplineBackground />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Manohar. Crafted with ❤️ and lots of coffee.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;