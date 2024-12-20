"use client";
import React from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import HelixPartition from './PartitionLine';

// Orbit Image Constants
const orbitImages = {
  center: "/assets/geminicenter.webp",
  orbit1: "/assets/gpt.webp",
  orbit2: "/assets/gemini.webp",
  orbit3: "/assets/midjourney.webp"
};

// Gradient Constants
const gradients = {
  primary: "from-purple-600 to-blue-600",
  rings: {
    primary: "border-purple-500/20",
    secondary: "border-blue-500/20",
    tertiary: "border-indigo-500/20"
  },
  background: {
    orange: "bg-orange-500/10",
    green: "bg-green-500/10"
  }
};

// OrbitingCircle Component
const OrbitingCircle = ({ imageUrl, rotation, delay, size, distance }) => (
  <div
    className={`absolute rounded-full ${size} ${distance}`}
    style={{ 
      animation: `orbit 20s linear infinite ${delay}`,
      transformOrigin: 'center'
    }}
  >
    <Image
      src={imageUrl}
      alt=""
      width={80}
      height={80}
      className="w-full h-full rounded-full object-cover"
    />
  </div>
);

// OrbitsAnimation Component
const OrbitsAnimation = () => (
  <div className="relative h-[400px] flex items-center justify-center">
    {/* Central Image */}
    <div className="relative w-32 h-32 rounded-full overflow-hidden z-10 shadow-lg shadow-purple-500/20">
      <Image
        src={orbitImages.center}
        alt="Gemini Center"
        width={128}
        height={128}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Orbit 1 */}
    <div className={`absolute w-64 h-64 rounded-full border-2 ${gradients.rings.primary} animate-spin-slow shadow-lg shadow-purple-500/10`}>
      <OrbitingCircle
        imageUrl={orbitImages.orbit1}
        rotation="animate-reverse-spin"
        delay="0s"
        size="w-12 h-12"
        distance="top-0"
      />
    </div>

    {/* Orbit 2 */}
    <div className={`absolute w-96 h-96 rounded-full border-2 ${gradients.rings.secondary} animate-spin-slower shadow-lg shadow-blue-500/10`}>
      <OrbitingCircle
        imageUrl={orbitImages.orbit2}
        rotation="animate-spin"
        delay="2s"
        size="w-16 h-16"
        distance="top-4"
      />
    </div>

    {/* Orbit 3 */}
    <div className={`absolute w-[500px] h-[500px] rounded-full border-2 ${gradients.rings.tertiary} animate-spin-slowest shadow-lg shadow-indigo-500/10`}>
      <OrbitingCircle
        imageUrl={orbitImages.orbit3}
        rotation="animate-reverse-spin"
        delay="1s"
        size="w-20 h-20"
        distance="top-8"
      />
    </div>
  </div>
);

const GeminiSection = () => {
  return (
    <>
    <section className="relative w-full overflow-hidden  py-20 my-4">
      {/* Enhanced background effects */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${gradients.background.orange} rounded-full blur-[160px] animate-pulse-slow transform hover:scale-110 transition-transform duration-1000`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${gradients.background.green} rounded-full blur-[160px] animate-pulse-slower transform hover:scale-110 transition-transform duration-1000`} />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-[100px] animate-pulse-slowest" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <OrbitsAnimation />
          
          <div className="relative z-10">
          <div className='flex justify-center md:justify-start'>
            <h2 className={`text-6xl font-bold mb-6 bg-gradient-to-r ${gradients.primary} bg-clip-text text-transparent flex items-center gap-4 mt-6 md:mt-0`}>
              Gemini
              <Sparkles className="w-8 h-8 text-purple-500" />
            </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Discover the power of duality with Gemini, where innovation meets imagination. 
              Our cutting-edge technology transforms complex challenges into elegant solutions, 
              creating a seamless bridge between possibility and reality.
            </p>
            <div className='flex justify-center md:justify-start'>
            <button className={`px-8 py-2 rounded-full bg-gradient-to-r ${gradients.primary} text-white font-semibold 
              hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1`}>
              Read More
            </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100%) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100%) rotate(-360deg);
          }
        }
        
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes reverse-spin {
          to {
            transform: rotate(-360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-slowest {
          animation: spin-slow 40s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slowest {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
    <HelixPartition />
    </>
  );
};

export default GeminiSection;