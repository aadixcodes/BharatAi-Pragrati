'use client';
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const governmentInitiatives = [
  {
    logo: "/assets/gov1.webp",
  },
  {
    logo: "/assets/gov2.webp",
  },
  {
    logo: "/assets/gov3.webp",
  },
  {
    logo: "/assets/gov4.webp",
  },
  {
    logo: "/assets/gov5.webp",
  },
  {
    logo: "/assets/gov6.webp",
  },
];

const AIInitiativesSection = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isImagesVisible, setIsImagesVisible] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    
    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        if (newPosition >= maxScroll) {
          return 0;
        }
        return newPosition;
      });
    };

    const intervalId = setInterval(scroll, 30);
    scrollContainer.scrollLeft = scrollPosition;

    // Add scroll observers for all sections
    const observerCallback = (setVisibility) => (
      ([entry]) => setVisibility(entry.isIntersecting)
    );

    const observer = new IntersectionObserver(
      observerCallback(setIsHeaderVisible),
      { threshold: 0.1 }
    );

    const imagesObserver = new IntersectionObserver(
      observerCallback(setIsImagesVisible),
      { threshold: 0.1 }
    );

    const quoteObserver = new IntersectionObserver(
      observerCallback(setIsQuoteVisible),
      { threshold: 0.1 }
    );

    const headerElement = document.getElementById('floating-header');
    const imagesElement = document.getElementById('floating-images');
    const quoteElement = document.getElementById('floating-quote');

    if (headerElement) observer.observe(headerElement);
    if (imagesElement) imagesObserver.observe(imagesElement);
    if (quoteElement) quoteObserver.observe(quoteElement);

    return () => {
      clearInterval(intervalId);
      if (headerElement) observer.unobserve(headerElement);
      if (imagesElement) imagesObserver.unobserve(imagesElement);
      if (quoteElement) quoteObserver.unobserve(quoteElement);
    };
  }, [scrollPosition]);

  return (
    <section className="relative py-6 px-6 overflow-x-hidden">
      
      {/* Background Gradients */}
      {/* <div className=" absolute inset-0 pointer-events-none">
        <div className="absolute top-[13%] right-[35%] w-[100px] md:w-[200px] h-[100px] md:h-[200px] bg-orange-700/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-[12%] left-[30%] w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-green-700/30 rounded-full filter blur-3xl delay-1000 animate-pulse" />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Floating Header Section */}
        <div
          id="floating-header"
          className={`transform transition-all duration-1000 ${
            isHeaderVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6 md:mb-12"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            AI Initiatives by the Government of India
          </h2>
        </div>

        {/* Floating Images Section */}
        <div
          id="floating-images"
          className={`relative overflow-hidden transform transition-all duration-1000 ${
            isImagesVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Left blur mask - hidden on mobile */}
          <div className="absolute left-0 top-0 w-24 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
          
          {/* Right blur mask - hidden on mobile */}
          <div className="absolute right-0 top-0 w-24 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
          
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-8 whitespace-nowrap overflow-x-hidden"
          >
            {[
              ...governmentInitiatives,
              ...governmentInitiatives,
              ...governmentInitiatives,
              ...governmentInitiatives
            ].map((initiative, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-2 rounded-xl min-w-[300px] md:min-w-[200px]"
              >
                <Image
                  src={initiative.logo}
                  alt={initiative.name}
                  width={120}
                  height={120}
                  className="object-contain w-[90px] h-[90px] md:w-[100px] md:h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Floating Quote Section */}
        <div 
          id="floating-quote"
          className={`mt-2 max-w-3xl mx-auto transform transition-all duration-1000 ${
            isQuoteVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg md:text-xl text-gray-600 text-center italic leading-relaxed">
            "AI is going to change the world, and we need to be ready with policies that ensure it benefits everyone."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIInitiativesSection;