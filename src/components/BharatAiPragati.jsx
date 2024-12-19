
// "use client";

// import React from "react";
// import Image from "next/image";

// const BharatAiPragati = () => {
//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(135deg,rgb(240, 187, 90), #FFFFFF,rgb(127, 236, 127))",
//         minHeight: "60vh",
//         marginTop: "8rem", // Adjusted for consistent spacing
//       }}
//       className="flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Blur Background */}
//       <div className="absolute inset-0 bg-blur"></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center">
//         {/* Image Section */}
//         <div className="flex-shrink-0">
//           <Image
//             src="/assets/modiWalking1.png"
//             alt="Person wearing headphones and sunglasses"
//             width={300}
//             height={300}
//             className="rounded-lg object-contain"
//             priority // Loads the main image faster
//           />
//         </div>

//         {/* Text Section */}
//         <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
//           {/* Badge */}
//           <div className="bg-orange-500 text-black text-sm px-3 py-1 rounded-full inline-block mb-4">
//             Introducing Bharat AI
//           </div>

//           {/* Title */}
//           <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
//             Bharat AI Pragati
//           </h1>

//           {/* Image Thumbnails */}
//           <div className="flex justify-center md:justify-start space-x-6 md:space-x-20 mb-6">
//             {[
//               "/assets/bharatai4.jpg",
//               "/assets/bharatai2.jpg",
//               "/assets/bharatai3.jpg",
//             ].map((src, idx) => (
//               <Image
//                 key={idx}
//                 src={src}
//                 alt={`Thumbnail ${idx + 1}`}
//                 width={80}
//                 height={80}
//                 className="rounded-lg object-cover"
//               />
//             ))}
//           </div>

//           {/* Description */}
//           <p className="text-black mt-4">
//             In line with Prime Minister Modi's vision of a technologically
//             advanced India, Bharat AI Pragati is dedicated to making AI
//             education accessible to every Indian. We believe that by providing
//             the right tools and knowledge, we can help everyone, young and old,
//             thrive in the digital age. Bharat AI Pragati addresses the
//             challenges of unequal access to knowledge and language barriers. We
//             offer inclusive, practical courses taught by industry experts,
//             ensuring top-quality learning experiences for everyone, regardless
//             of their socioeconomic background or language skills. Our mission is
//             to make advanced AI education available to every aspiring individual
//             in India, empowering them to reach their full potential and compete
//             at a global level. Join Bharat AI Pragati today and take the first
//             step towards a technologically advanced and successful AI-enabled
//             future.
//           </p>
//           <div className="w-full py-2 flex justify-center md:justify-start">
//             <button className="bg-orange-500 text-black px-6 py-2 mt-4 rounded-full shadow-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
//               <span>Try Now</span>
//               <i className="fas fa-arrow-right"></i>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS */}
//       <style jsx>{`
//         .bg-blur {
//           background: rgba(255, 255, 255, 0.3);
//           filter: blur(50px);
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           z-index: -1;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BharatAiPragati;


"use client";

import React from "react";
import Image from "next/image";

const BharatAiPragati = () => {
  return (
    <div
      style={{
        
        minHeight: "60vh",
        marginTop: "8rem", // Adjusted for consistent spacing
      }}
      className="flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-orange-700/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-[12%] left-[20%] w-[500px] h-[500px] bg-green-700/30 rounded-full filter blur-3xl delay-1000 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/modiWalking1.png"
            alt="Person wearing headphones and sunglasses"
            width={300}
            height={300}
            className="rounded-lg object-contain"
            priority // Loads the main image faster
          />
        </div>

        {/* Text Section */}
        <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
          {/* Badge */}
          <div className="bg-orange-500 text-black text-sm px-3 py-1 rounded-full inline-block mb-4">
            Introducing Bharat AI
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Bharat AI Pragati
          </h1>

          {/* Image Thumbnails */}
          <div className="flex justify-center md:justify-start space-x-6 md:space-x-20 mb-6">
            {[
              "/assets/bharatai4.jpg",
              "/assets/bharatai2.jpg",
              "/assets/bharatai3.jpg",
            ].map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-black mt-4">
            In line with Prime Minister Modi's vision of a technologically
            advanced India, Bharat AI Pragati is dedicated to making AI
            education accessible to every Indian. We believe that by providing
            the right tools and knowledge, we can help everyone, young and old,
            thrive in the digital age. Bharat AI Pragati addresses the
            challenges of unequal access to knowledge and language barriers. We
            offer inclusive, practical courses taught by industry experts,
            ensuring top-quality learning experiences for everyone, regardless
            of their socioeconomic background or language skills. Our mission is
            to make advanced AI education available to every aspiring individual
            in India, empowering them to reach their full potential and compete
            at a global level. Join Bharat AI Pragati today and take the first
            step towards a technologically advanced and successful AI-enabled
            future.
          </p>
          <div className="w-full py-2 flex justify-center md:justify-start">
            <button className="bg-orange-500 text-black px-6 py-2 mt-4 rounded-full shadow-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <span>Try Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BharatAiPragati;
