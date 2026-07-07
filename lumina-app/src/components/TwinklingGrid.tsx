import { useEffect, useRef } from 'react';

export function TwinklingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    // We will have a set of dots that slowly fade in and out.
    let dots: { x: number; y: number; opacity: number; speed: number; maxOpacity: number }[] = [];
    
    // Grid settings
    const spacing = 32; // distance between possible dot locations
    const dotSize = 1; // very small dots

    const initDots = () => {
      dots = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Ensure canvas is high resolution for sharp dots
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          // Only 15% of grid intersections get a dot, so they appear randomly
          if (Math.random() > 0.85) {
            dots.push({
              x: i * spacing,
              y: j * spacing,
              opacity: Math.random() * 0.1,
              speed: (Math.random() * 0.002) + 0.001, // extremely slow fade
              maxOpacity: (Math.random() * 0.2) + 0.1, // very faint max opacity (0.1 to 0.3)
            });
          }
        }
      }
    };

    const draw = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, width, height);
      
      for (const dot of dots) {
        dot.opacity += dot.speed;
        
        // If it fades out or hits max opacity, reverse direction
        if (dot.opacity >= dot.maxOpacity) {
          dot.speed = -Math.abs(dot.speed);
        } else if (dot.opacity <= 0) {
          dot.speed = Math.abs(dot.speed);
          // Randomize max opacity and speed for a natural feel when it comes back
          dot.maxOpacity = (Math.random() * 0.2) + 0.1;
          dot.speed = (Math.random() * 0.002) + 0.001;
          
          // Optionally, randomly move the dot to a new grid intersection!
          if (Math.random() > 0.5) {
            const cols = Math.ceil(width / spacing);
            const rows = Math.ceil(height / spacing);
            dot.x = Math.floor(Math.random() * cols) * spacing;
            dot.y = Math.floor(Math.random() * rows) * spacing;
          }
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, dot.opacity)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    initDots();
    draw();

    window.addEventListener('resize', initDots);
    return () => {
      window.removeEventListener('resize', initDots);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 
        Subtle Large Static Grid lines 
      */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '128px 128px'
        }}
      />
      
      {/* Animated Twinkling Dots */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
}
