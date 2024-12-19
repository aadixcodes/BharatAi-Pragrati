import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('benefits-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="benefits-section"
      className={`w-full py-16 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Benefits of{' '}
              <span 
                className="text-orange-500"
                style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                  }}
              >
                AI Vidya
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              AI can speed up your writing and make your stories more exciting! Plus, it's like having a clever assistant always ready to help!
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full border-2 border-orange-500 rounded-2xl shadow-xl">
            {/* Desktop Image */}
            <div className="hidden md:block relative w-full aspect-[21/9]">
              <Image
                src="/assets/benefits.svg"
                alt="AI Vidya Benefits"
                width={1500}
                height={800}
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
            </div>

            {/* Mobile Image */}
            <div className="md:hidden relative w-full aspect-square">
              <Image
                src="/assets/benefits2.svg"
                alt="AI Vidya Benefits"
                width={700}
                height={700}
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
            </div>

            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;