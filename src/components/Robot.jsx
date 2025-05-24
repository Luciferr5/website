import { useEffect } from 'react';

export const Robot = () => {
  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <spline-viewer 
        url="https://prod.spline.design/hB965mFWo51kJqC2/scene.splinecode"
        style={{
          width: '275%', // Make it much wider to give space for the logo
          height: '100%',
          border: 'none',
          background: 'transparent',
          transform: 'translateX(-26%)', // Shift left to center the robot in visible area
          transformOrigin: 'center center'
        }}
        // Hide Spline logo and loading screen
        loading-anim="false"
        logo="false"
      />
    </div>
  );
};