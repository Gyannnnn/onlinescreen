import React, { useRef, useEffect, useState } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface StarsScreenProps {
  tool: Tool;
  locale: Locale;
}

export default function StarsScreen({ tool, locale }: StarsScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [starDensity, setStarDensity] = useState(120); // denser field for richer sky

  // Fullscreen handling
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Idle cursor hide when fullscreen
  useEffect(() => {
    if (!isFullscreen) {
      setIsIdle(false);
      return;
    }
    let timer: number;
    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(timer);
      timer = window.setTimeout(() => setIsIdle(true), 3000);
    };
    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    resetIdle();
    return () => {
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      clearTimeout(timer);
    };
  }, [isFullscreen]);

  // Stars canvas animation (copied from AmbientScreen)
  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let width = (canvas.width = canvas.clientWidth || 800);
    let height = (canvas.height = canvas.clientHeight || 480);
    
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
      angle: number;
    }

    let stars: Star[] = Array.from({ length: starDensity }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      // size varies more for depth effect
      size: 0.8 + Math.random() * 2.2,
      // subtle opacity for twinkling
      alpha: 0.3 + Math.random() * 0.5,
      speed: 0.02 + Math.random() * 0.08,
      angle: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const oldWidth = width;
      const oldHeight = height;
      width = canvas.width = canvas.clientWidth || 800;
      height = canvas.height = canvas.clientHeight || 480;

      stars.forEach((star) => {
        if (oldWidth <= 10 || oldHeight <= 10) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        } else {
          star.x = (star.x / oldWidth) * width;
          star.y = (star.y / oldHeight) * height;
        }
      });
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = -1000; // no mouse interaction for simplicity
      const my = -1000;
      stars.forEach((star) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        if (star.x < 0) star.x = width;
        else if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        else if (star.y > height) star.y = 0;
        // twinkle with gentle fluctuation
        star.alpha += (Math.random() - 0.5) * 0.04;
        star.alpha = Math.min(Math.max(star.alpha, 0.3), 0.9);
        // draw with glow effect
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.shadowBlur = star.size * 1.5;
        ctx.shadowColor = ctx.fillStyle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        // reset shadow for next star
        ctx.shadowBlur = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [starDensity, isFullscreen]);

  return (
    <div
      ref={containerRef}
      className={`star-container relative w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl select-none ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''
      } ${isIdle && isFullscreen ? 'cursor-none' : ''}`}
      style={{ backgroundColor: '#020617' }}
    >
      {/* Stars canvas */}
      <canvas
        ref={starsCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Fullscreen trigger */}
      {!isFullscreen && (
        <div onClick={toggleFullscreen} className="absolute inset-0 cursor-pointer z-10" title="Click to go Fullscreen" />
      )}
      {/* Top right controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2.5 z-20 transition-opacity duration-300 ${isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}">
        <button
          onClick={toggleFullscreen}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-all duration-200 backdrop-blur-md hover:border-white/25"
          aria-label="Toggle Fullscreen"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14h6v6M20 10h-6V4" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
