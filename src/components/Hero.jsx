'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

const robotImages = [
  "/assets/rotateelement1.webp",
  "/assets/rotateelement2.webp",
  "/assets/rotateelement3.webp",
  "/assets/rotateelement4.webp",
  "/assets/rotateelement5.webp",
  "/assets/rotateelement6.webp",
];

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/audio.mp3");
    audioRef.current.loop = true;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-16 md:pt-0 pb-20">

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 py-8 md:py-12 relative">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10 w-full">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-gray-900">
            Empowering India's Future with
            <br /> <span className="text-orange-500 text-5xl md:text-8xl">AI Vidya</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Explore the possibilities of artificial intelligence and robotics
          </p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full hover:from-orange-500 hover:to-orange-600 rounded-full transition-colors px-8 py-3">
            Get Started
          </button>
        </div>

        {/* Robot Orbit Section */}
        <div className="flex-1 flex justify-center items-center relative h-[450px] sm:h-[500px] md:h-[600px] w-full md:w-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center Robot */}
            <div className="rounded-full overflow-hidden z-10 relative translate-y-12">
              <Image
                src="/assets/bharataihero.gif"
                alt="Main Robot"
                width={400}
                height={800}
                className="object-cover"
              />
            </div>

            {/* Rotating Robots */}
            {robotImages.map((imageUrl, index) => {
              const angle = (index * 360) / robotImages.length;
              const radius = 320; // Increased radius
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute rounded-full -translate-y-8 overflow-hidden w-20 h-20 sm:w-35 sm:h-35 transition-all duration-1000"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${-index * (20 / robotImages.length)}s`,
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={`Robot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-black p-3 rounded-full shadow-lg z-20 hover:bg-black/70 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Global Styles for Orbit Animation */}
      <style jsx global>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
