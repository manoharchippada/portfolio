import React, { useEffect, useState } from "react";

interface PreLoaderProps {
  onComplete?: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('init');

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';
    
    const runAnimation = () => {
      const container = document.querySelector('.preloader-texts');
      const spans = document.querySelectorAll('.preloader-texts span');
      const preloader = document.querySelector('.preloader-wrapper');
      const scrollingContainer = document.querySelector('.scrolling-text-container');

      if (!container || !spans.length || !preloader || !scrollingContainer) return;

      // Set initial hardware acceleration
      preloader.style.willChange = 'transform';
      container.style.willChange = 'opacity, transform';
      scrollingContainer.style.willChange = 'opacity';
      spans.forEach(span => {
        span.style.willChange = 'opacity, transform';
      });

      // Phase 1: Show container (immediate)
      requestAnimationFrame(() => {
        setAnimationPhase('showing');
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      });

      // Phase 2: Animate spans with stagger
      spans.forEach((span, index) => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          });
        }, 500 + (index * 120)); // Slower stagger for longer effect
      });

      // Phase 3: Show scrolling text after main text appears
      setTimeout(() => {
        setAnimationPhase('scrolling');
        requestAnimationFrame(() => {
          scrollingContainer.style.opacity = '1';
        });
      }, 2000);

      // Phase 4: Hold with scrolling animation
      setTimeout(() => {
        setAnimationPhase('holding');
      }, 2200);

      // Phase 5: Hide scrolling text first
      setTimeout(() => {
        requestAnimationFrame(() => {
          scrollingContainer.style.opacity = '0';
        });
      }, 5000);

      // Phase 6: Hide main text
      setTimeout(() => {
        setAnimationPhase('hiding');
        requestAnimationFrame(() => {
          container.style.opacity = '0';
          container.style.transform = 'translateY(-20px)';
        });
      }, 5500);

      // Phase 7: Slide up preloader
      setTimeout(() => {
        requestAnimationFrame(() => {
          preloader.style.transform = 'translateY(-100%)';
        });
      }, 6000);

      // Phase 8: Complete and cleanup
      setTimeout(() => {
        setAnimationPhase('complete');
        // Clean up performance optimizations
        preloader.style.willChange = 'auto';
        container.style.willChange = 'auto';
        scrollingContainer.style.willChange = 'auto';
        spans.forEach(span => {
          span.style.willChange = 'auto';
        });
        
        document.body.style.overflow = 'auto';
        document.body.style.overflowY = 'scroll';
        
        if (onComplete) {
          onComplete();
        }
      }, 6500);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(runAnimation, 100);
    
    return () => {
      clearTimeout(timer);
      // Cleanup on unmount
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <>
      <div className="preloader-wrapper">
        <div className="preloader-content">
          <div className="preloader-texts">
            <span>Full</span>
            <span>Stack</span>
            <span>/</span>
            <span>Data Science Explorer</span>
          </div>
          
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              <span>Building Amazing Experiences</span>
              <span>❤️</span>
              <span>Analyzing Complex Data</span>
              <span>❤️</span>
              <span>Creating Interactive Solutions</span>
              <span>❤️</span>
              <span>Innovating with Technology</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: #000000;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .preloader-texts {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          backface-visibility: hidden;
        }

        .preloader-texts span {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          backface-visibility: hidden;
          display: inline-block;
        }

        .scrolling-text-container {
          width: 400px;
          height: 30px;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          position: relative;
        }

        .scrolling-text {
          display: flex;
          align-items: center;
          gap: 20px;
          color: #888888;
          font-size: 14px;
          font-weight: 400;
          white-space: nowrap;
          animation: scroll-horizontal 8s linear infinite;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .scrolling-text span {
          display: inline-block;
          min-width: max-content;
        }

        @keyframes scroll-horizontal {
          0% {
            transform: translateY(-50%) translateX(100%);
          }
          100% {
            transform: translateY(-50%) translateX(-100%);
          }
        }

        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .preloader-texts {
            font-size: 20px;
            gap: 6px;
          }
          
          .scrolling-text-container {
            width: 300px;
          }
          
          .scrolling-text {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .preloader-texts {
            font-size: 18px;
            gap: 4px;
          }
          
          .scrolling-text-container {
            width: 250px;
            height: 25px;
          }
          
          .scrolling-text {
            font-size: 11px;
            gap: 15px;
          }
        }

        /* High performance animations */
        .preloader-wrapper,
        .preloader-texts,
        .preloader-texts span,
        .scrolling-text {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>
    </>
  );
};

export default PreLoader;