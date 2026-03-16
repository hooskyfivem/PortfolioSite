import { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const Size = 2;
  const Speed = 0.2;
  const Opacity = 6;

  const getAmount = () => {
    if (window.innerWidth < 480) return 15;
    if (window.innerWidth < 769) return 20;
    if (window.innerWidth < 1200) return 40;
    return 50;
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < getAmount(); i++) {
        particles.push(new Particle());
      }
    };

    class Particle {
      x: number; y: number; size: number; speed: number; opacity: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + Size; 
        this.speed = this.size * Speed * 1.2; 
        this.opacity = this.size / Opacity;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
        // Red Particles
        // ctx.fillStyle = `rgba(180, 1, 1, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < getAmount(); i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1001,
      }}
    />
  );
};

export default BackgroundParticles;