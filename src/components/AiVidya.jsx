// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const AIVidya = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       setMousePosition({ x: clientX, y: clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">
//       <div className="relative max-w-7xl w-full bg-orange-500 rounded-3xl p-8 md:p-12">
//         {/* Animated Spotlights */}
//         <div 
//           className="absolute inset-0 overflow-hidden rounded-3xl"
//           style={{
//             background: `
//               radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
//               rgba(255,255,255,0.1), 
//               transparent 40%)
//             `,
//           }}
//         >
//           {/* Static Spotlight Effects */}
//           <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-spotlight-1" />
//           <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-spotlight-2" />
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-spotlight-3" />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
//           {/* Left Side - Image */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
//               <Image
//                 src="/assets/BharatAIBrochure.webp"
//                 alt="AI Vidya Learning Platform"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="w-full md:w-1/2 text-white">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
//               <span>AI</span>{" "}
//               <span className="font-extrabold">Vidya</span>
//             </h1>
            
//             <h2 className="text-xl md:text-2xl font-semibold mb-6 animate-slide-up">
//               Empowering India's Future
//             </h2>
            
//             <p className="text-base md:text-lg leading-relaxed opacity-90 animate-fade-in-up">
//               AI Vidya is your golden ticket to the world of Artificial Intelligence 
//               and top AI tools, transforming the way you learn and helping you reach 
//               new heights in this AI era! Created by Bharat AI Pragati, AI Vidya 
//               covers everything from basics to future prospects. Explore various AI 
//               tools, learn to use them effectively, and understand their benefits. 
//               The course introduces prompt engineering, essential for optimal AI 
//               tool usage. With AI Vidya, boost your work efficiency by up to 10 
//               times, enhancing productivity and creativity. Join AI Vidya and 
//               unlock your potential in the AI world today!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIVidya;


import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const AiVidya = () => {
  const [isVisible, setIsVisible] = useState({
    heading: false,
    subheading: false,
    paragraph: false,
    image: false
  });

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2
    });

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white py-16 mt-[4rem] px-4 sm:px-6 lg:px-8">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/30 rounded-full 
          filter blur-3xl animate-pulse"
          style={{ animationDuration: '7s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full 
          filter blur-3xl animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '1s' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading Section */}
        <div 
          data-section="heading"
          className={`transform transition-all duration-1000 delay-100
          ${isVisible.heading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-orange-600 mb-6">
            <span className="relative inline-block animate-float">AI</span>{" "}
            <span className="relative inline-block animate-float-delayed font-extrabold">Vidya</span>
          </h1>
        </div>

        {/* Subheading Section */}
        <div 
          data-section="subheading"
          className={`transform transition-all duration-1000 delay-200
          ${isVisible.subheading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-600 mb-8">
            Empowering India's Future
          </h2>
        </div>

        {/* Paragraph Section */}
        <div 
          data-section="paragraph"
          className={`max-w-4xl mx-auto text-center mb-12 transform transition-all duration-1000 delay-300
          ${isVisible.paragraph ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            AI Vidya is your golden ticket to the world of Artificial Intelligence 
            and top AI tools, transforming the way you learn and helping you reach 
            new heights in this AI era! Created by Bharat AI Pragati, AI Vidya 
            covers everything from basics to future prospects. Explore various AI 
            tools, learn to use them effectively, and understand their benefits. 
            The course introduces prompt engineering, essential for optimal AI 
            tool usage. With AI Vidya, boost your work efficiency by up to 10 
            times, enhancing productivity and creativity. Join AI Vidya and 
            unlock your potential in the AI world today!
          </p>
        </div>

        {/* Image Section */}
        <div 
          data-section="image"
          className={`transform transition-all duration-1000 delay-400
          ${isVisible.image ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="relative w-full max-w-7xl flex justify-center mx-auto rounded-xl overflow-hidden">
            <Image
              src="/assets/BharatAIBrochure.webp"
              alt="AI Vidya Learning Platform"
              width={900}
              height={300}
              className="object-cover hover:scale-[1.02] transition-transform duration-500 rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiVidya;