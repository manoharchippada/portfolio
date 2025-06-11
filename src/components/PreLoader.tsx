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

      // Phase 1: Show container
      setTimeout(() => {
        setAnimationPhase('showing');
        container.classList.add('visible');
      }, 200);

      // Phase 2: Animate spans with stagger
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('visible');
        }, 600 + (index * 100));
      });

      // Phase 3: Show scrolling text
      setTimeout(() => {
        setAnimationPhase('scrolling');
        scrollingContainer.classList.add('visible');
      }, 1500);

      // Phase 4: Hold animation
      setTimeout(() => {
        setAnimationPhase('holding');
      }, 1700);

      // Phase 5: Hide scrolling text
      setTimeout(() => {
        scrollingContainer.classList.remove('visible');
      }, 4000);

      // Phase 6: Hide main text
      setTimeout(() => {
        setAnimationPhase('hiding');
        container.classList.add('hiding');
      }, 4300);

      // Phase 7: Slide up preloader
      setTimeout(() => {
        preloader.classList.add('sliding-up');
      }, 4800);

      // Phase 8: Complete
      setTimeout(() => {
        setAnimationPhase('complete');
        document.body.style.overflow = 'auto';
        document.body.style.overflowY = 'scroll';
        
        if (onComplete) {
          onComplete();
        }
      }, 5300);
    };

    const timer = setTimeout(runAnimation, 100);
    
    return () => {
      clearTimeout(timer);
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
              <span>❤️</span>
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
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .preloader-wrapper.sliding-up {
          transform: translateY(-100%);
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 0 20px;
        }

        .preloader-texts {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
        }

        .preloader-texts.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .preloader-texts.hiding {
          opacity: 0;
          transform: translateY(-20px);
        }

        .preloader-texts span {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
        }

        .preloader-texts span.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scrolling-text-container {
          width: 100%;
          max-width: 300px;
          height: 25px;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          position: relative;
        }

        .scrolling-text-container.visible {
          opacity: 1;
        }

        .scrolling-text {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #888888;
          font-size: 12px;
          font-weight: 400;
          white-space: nowrap;
          animation: scroll-horizontal 6s linear infinite;
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

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .preloader-texts {
            font-size: 16px;
            gap: 3px;
          }
          
          .scrolling-text-container {
            max-width: 250px;
            height: 22px;
          }
          
          .scrolling-text {
            font-size: 11px;
            gap: 12px;
          }

          .preloader-content {
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .preloader-texts {
            font-size: 14px;
            gap: 2px;
          }
          
          .scrolling-text-container {
            max-width: 200px;
            height: 20px;
          }
          
          .scrolling-text {
            font-size: 10px;
            gap: 10px;
          }

          .preloader-content {
            gap: 12px;
          }
        }

        /* Very small screens */
        @media (max-width: 320px) {
          .preloader-texts {
            font-size: 12px;
            gap: 2px;
          }
          
          .scrolling-text-container {
            max-width: 180px;
            height: 18px;
          }
          
          .scrolling-text {
            font-size: 9px;
            gap: 8px;
          }
        }

        /* Larger screens */
        @media (min-width: 769px) {
          .preloader-texts {
            font-size: 24px;
            gap: 8px;
          }
          
          .scrolling-text-container {
            max-width: 400px;
            height: 30px;
          }
          
          .scrolling-text {
            font-size: 14px;
            gap: 20px;
          }

          .preloader-content {
            gap: 40px;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .preloader-texts,
          .preloader-texts span,
          .scrolling-text-container,
          .preloader-wrapper {
            transition-duration: 0.2s;
          }
          
          @keyframes scroll-horizontal {
            0% {
              transform: translateY(-50%) translateX(50%);
            }
            100% {
              transform: translateY(-50%) translateX(-50%);
            }
          }
        }
      `}</style>
    </>
  );
};

export default PreLoader;