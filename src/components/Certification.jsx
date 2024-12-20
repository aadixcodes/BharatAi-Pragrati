"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HelixPartition from "./PartitionLine";

const Certification = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      image: "/assets/Certification1.webp",
      title: "Save 40+ Hrs every week",
      shadowColor: "shadow-orange-500/50",
    },
    {
      image: "/assets/Certification2.webp",
      title: "Higher Employability",
      shadowColor: "shadow-sky-500/50",
    },
    {
      image: "/assets/Certification3.webp",
      title: "10x Productivity",
      shadowColor: "shadow-green-500/50",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#1a1a1a", stopOpacity: 0.2 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#333333", stopOpacity: 0.2 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="0.5"
        >
          <animate
            attributeName="r"
            from="45"
            to="50"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="0.3"
        >
          <animate
            attributeName="r"
            from="35"
            to="40"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="0.2"
        >
          <animate
            attributeName="r"
            from="25"
            to="30"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-sky-500/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-14 h-14 bg-green-500/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-orange-500/20 rounded-full animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          className="text-center mb-16"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mt-[4rem]">
            After AI Vidya Certification
          </h2>
        </div>

        {/* Certificates Slider */}
        <div className="relative flex justify-center items-center gap-4 md:gap-8 px-4 min-h-[400px]">
          {certificates.map((cert, index) => {
            const isCurrent = index === currentSlide;
            const isNext = index === (currentSlide + 1) % certificates.length;
            const isPrev =
              index ===
              (currentSlide - 1 + certificates.length) % certificates.length;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out transform ${
                  isCurrent
                    ? "w-64 md:w-96 z-20 scale-100 opacity-100 translate-x-0"
                    : isNext
                    ? "w-48 md:w-64 z-10 scale-75 opacity-60 translate-x-[60%] md:translate-x-[75%]"
                    : isPrev
                    ? "w-48 md:w-64 z-10 scale-75 opacity-60 -translate-x-[60%] md:-translate-x-[75%]"
                    : "w-48 md:w-64 z-0 scale-50 opacity-0 translate-x-full"
                }`}
              >
                <div
                  className={`
                    relative rounded-xl overflow-hidden 
                    // ${cert.shadowColor} 
                    // ${isCurrent ? "" : ""} 
                    
                  `}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-6 left-0 right-0 p-4">
                    <h3
                      className={`text-black text-center m-auto font-semibold ${
                        isCurrent ? "text-lg md:text-2xl" : "text-base"
                      }`}
                    >
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes floatDelayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
      
    </section>
    <HelixPartition />
    </>
  );
};

export default Certification;
