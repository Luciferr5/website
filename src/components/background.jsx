import { useEffect } from 'react';

export const SplineBackground = ({ splineUrl }) => {
  useEffect(() => {
    // Load the Spline viewer script if not already loaded
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <spline-viewer 
        url={splineUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        // Hide Spline logo and disable interactions for background
        loading-anim="false"
        logo="false"
      />
    </div>
  );
};