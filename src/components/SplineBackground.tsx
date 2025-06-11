import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 ">
      <Spline 
        scene="https://prod.spline.design/OAqTotUSoKrTjEQB/scene.splinecode" 
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity:60,
          mixBlendMode: 'lighten',
          transform: 'scale(1.2)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default SplineBackground;