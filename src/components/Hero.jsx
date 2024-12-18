// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Play, Pause, GraduationCap, Brain, Code } from "lucide-react";

// const FloatingIcon = ({ children, className }) => (
//   <div className={`absolute animate-float ${className}`}>
//     <div className="p-3 bg-white/90 rounded-xl shadow-lg">{children}</div>
//   </div>
// );

// const HeroSection = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     audioRef.current = new Audio("/assets/audio.mp3");
//     audioRef.current.loop = true;

//     if (isPlaying) {
//       audioRef.current.play().catch(() => {
//         setIsPlaying(false);
//       });
//     }

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//     };
//   }, [isPlaying]);

//   const togglePlayback = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Navigation spacer */}
//       <div className="h-20 w-full"></div>

//       {/* Gradient Orbs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-900/30 rounded-full filter blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-800/40 rounded-full filter blur-3xl animate-pulse delay-1000" />
//       </div>

//       {/* Floating Education Icons */}
//       <FloatingIcon className="top-24 left-[5%] hidden md:block">
//         <GraduationCap className="w-5 h-5 text-purple-500" />
//       </FloatingIcon>
//       <FloatingIcon className="top-48 right-[10%] hidden md:block">
//         <Brain className="w-5 h-5 text-yellow-500" />
//       </FloatingIcon>
//       <FloatingIcon className="bottom-40 right-[5%] hidden lg:block">
//         <Code className="w-5 h-5 text-red-500" />
//       </FloatingIcon>
//       <FloatingIcon className="bottom-16 left-[8%] hidden md:block">
//         <GraduationCap className="w-5 h-5 text-teal-500" />
//       </FloatingIcon>
//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
//               <span className="text-orange-500 whitespace-nowrap">
//                 Empowering India
//               </span>
//               <br />
//               <span className="text-gray-900">Through AI Education</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-700">
//               Join us in shaping the future of India with cutting-edge AI
//               education and innovation.
//             </p>
//             <button className="px-8 py-4 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
//               Get Started
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="relative max-w-xl mx-auto lg:mx-0">
//             <img
//               src="/assets/bharataihero.gif"
//               alt="AI Education"
//               className="w-3/4 mx-auto lg:w-2/3 rounded-2xl" // Reduced width
//             />
//             <button
//               onClick={togglePlayback}
//               className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
//             >
//               {isPlaying ? (
//                 <Pause className="w-6 h-6 text-gray-900" />
//               ) : (
//                 <Play className="w-6 h-6 text-gray-900" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { Play, Pause } from 'lucide-react';

// const robotImages = [
//   "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
//   "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=100&h=100&fit=crop",
//   "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=100&h=100&fit=crop",
//   "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=100&h=100&fit=crop",
//   "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=100&h=100&fit=crop",
//   "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=100&h=100&fit=crop"
// ];

// const HeroSection = () => {
//     const [isPlaying, setIsPlaying] = useState(true);
//       const audioRef = useRef(null);
    
//       useEffect(() => {
//         audioRef.current = new Audio("/assets/audio.mp3");
//         audioRef.current.loop = true;
    
//         if (isPlaying) {
//           audioRef.current.play().catch(() => {
//             setIsPlaying(false);
//           });
//         }
    
//         return () => {
//           if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current = null;
//           }
//         };
//       }, [isPlaying]);
    
//       const togglePlayback = () => {
//         if (audioRef.current) {
//           if (isPlaying) {
//             audioRef.current.pause();
//           } else {
//             audioRef.current.play();
//           }
//           setIsPlaying(!isPlaying);
//         }
//       };

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden pt-16">
//       {/* Background Gradients */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12">
//           {/* Text Content */}
//           <div className="flex-1 text-center md:text-left z-10">
//             <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">
//             Empowering India's Future with 
//             <br /> <span className='text-orange-500 text-6xl md:text-8xl'> AI Vidya </span> 
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Explore the possibilities of artificial intelligence and robotics
//             </p>
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
//               Get Started
//             </button>
//           </div>

//           {/* Robot Orbit Section */}
//           <div className="flex-1 flex justify-center items-center relative h-[400px] w-[400px] md:h-[450px] md:w-[450px]">
//             <div className="absolute inset-0 flex items-center justify-center">
//               {/* Center Robot */}
//               <div className="w-3/4 h-130 rounded-full overflow-hidden z-10">
//                 <img
//                   src="/assets/Bharataihero.gif"
//                   alt="Main Robot"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Rotating Robots */}
//               {robotImages.map((imageUrl, index) => {
//                 const angle = (index * 360) / robotImages.length;
//                 const radius = 140;
//                 const x = Math.cos((angle * Math.PI) / 180) * radius;
//                 const y = Math.sin((angle * Math.PI) / 180) * radius;

//                 return (
//                   <div
//                     key={index}
//                     className="absolute rounded-full overflow-hidden w-12 h-12 transition-all duration-1000"
//                     style={{
//                       transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
//                       animation: `orbit 20s linear infinite`,
//                       animationDelay: `${-index * (20 / robotImages.length)}s`,
//                     }}
//                   >
//                     <img
//                       src={imageUrl}
//                       alt={`Robot ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Play/Pause Button */}
//             <button
//               onClick={togglePlayback}
//               className="absolute bottom-0 right-0 bg-black p-3 rounded-full shadow-lg z-20 hover:bg-black-500 transition-colors"
//             >
//               {isPlaying ? (
//                 <Pause className="w-6 h-6" />
//               ) : (
//                 <Play className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const robotImages = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=100&h=100&fit=crop"
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
    <div className="min-h-screen bg-white relative overflow-hidden pt-20 md:pt-0">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-gray-900">
            Empowering India's Future with
            <br /> <span className="text-orange-500 text-5xl md:text-8xl">AI Vidya</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Explore the possibilities of artificial intelligence and robotics
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Robot Orbit Section */}
        <div className="flex-1 flex justify-center items-center relative h-[400px] sm:h-[450px] md:h-[500px] w-full md:w-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center Robot */}
            <div className="w-3/4 h-120 rounded-full overflow-hidden z-10">
              <img
                src="/assets/Bharataihero.gif"
                alt="Main Robot"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Robots */}
            {robotImages.map((imageUrl, index) => {
              const angle = (index * 360) / robotImages.length;
              const radius = 300;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute rounded-full overflow-hidden w-14 h-14 sm:w-16 sm:h-16 transition-all duration-1000"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${-index * (20 / robotImages.length)}s`,
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Robot ${index + 1}`}
                    className="w-full h-full object-cover"
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
    </div>
  );
};

export default HeroSection;