// 'use client';

// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import { ImageGallery } from './ImageGallery';
// import { Footer } from './Footer';

// const GeminiAndAstra = () => {
//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Animated Background Effects */}
//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute -inset-[10%] animate-[spin_20s_linear_infinite] opacity-20 blur-3xl">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full" />
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full" />
//         </div>
//         <div className="absolute -inset-[10%] animate-[spin_15s_linear_infinite_reverse] opacity-20 blur-3xl">
//           <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-orange-400 rounded-full" />
//           <div className="absolute bottom-1/3 right-1/2 w-72 h-72 bg-green-400 rounded-full" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative">
//         {/* Hero Section - Gemini */}
//         <section className="relative overflow-hidden py-20">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="relative z-10 backdrop-blur-sm bg-white/70 p-8 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.2),0_0_15px_rgba(34,197,94,0.2)]">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
//                   Google&apos;s AI For India: Empowering Bharat with Gemini and Project Astra
//                 </h1>
//                 <h2 className="text-xl text-gray-600 mb-8">
//                   Gemini: Unleashing AI&apos;s Potential Across Bharat
//                 </h2>
//                 <p className="text-gray-700 mb-8">
//                 Bharat AI Pragati aspires to make India an AI powerhouse. However, for this dream to be realized, AI must grasp the essence of India's diverse languages. This is where Gemini, a groundbreaking large language model by Google, plays a crucial role. By understanding and processing the multitude of languages spoken across the nation, Gemini bridges linguistic barriers and drives advancements in artificial intelligence. Through this innovative technology, Bharat AI Pragati aims to empower every corner of India, ensuring the benefits of AI are accessible to all its citizens.
//                 </p>
//                 <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
//                   Learn More
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </div>
//               <div className="relative">
//                 <div className="relative w-full h-[550px]">
//                   <Image
//                     src="/assets/geminiastra2.avif"
//                     alt="AI Technology"
//                     fill
//                     className="object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-green-500/20 rounded-xl animate-pulse" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Project Astra Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1 relative w-4/5 mx-auto">
//                 <div className="relative w-full h-[400px]">
//                   <Image
//                     src="/assets/astra.avif"
//                     alt="Trustworthy AI"
//                     fill
//                     className="object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-bl from-green-500/20 to-orange-500/20 rounded-xl animate-pulse" />
//               </div>
//               <div className="order-1 md:order-2 relative z-10 backdrop-blur-sm bg-white/70 p-8 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.2),0_0_15px_rgba(34,197,94,0.2)]">
//                 <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
//                   Project Astra: Building Trustworthy AI for Digital India
//                 </h2>
//                 <p className="text-gray-700 mb-8">
//                 Bharat AI Pragati seeks to make India a leader in AI, but trust is essential for widespread adoption. Project Astra, a Google initiative, addresses this by building secure and reliable AI for India. This collaboration ensures that AI technology is accessible, safe, and beneficial for all, fostering trust and enabling India to harness AI's full potential. Through this partnership, Bharat AI Pragati aims to empower the nation with cutting-edge, trustworthy AI solutions that drive progress and innovation.
//                 </p>
//                 <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
//                   Explore Now
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="py-20">
//           <div className="container mx-auto">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-black" style={{
//                     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
//                   }}>
//               Bharat <span className='text-orange-500'>AI  Pragati </span> in Action

//             </h2>
//             <ImageGallery />
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default GeminiAndAstra;

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ImageGallery } from "./ImageGallery";
import { Footer } from "./Footer";

const GeminiAndAstra = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Effects - Moved behind content with lower z-index */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -inset-[10%] animate-[spin_20s_linear_infinite] opacity-20 blur-3xl">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full" />
        </div>
        <div className="absolute -inset-[10%] animate-[spin_15s_linear_infinite_reverse] opacity-20 blur-3xl">
          <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-orange-400 rounded-full" />
          <div className="absolute bottom-1/3 right-1/2 w-72 h-72 bg-green-400 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - Gemini */}
        <section className="relative overflow-hidden py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative backdrop-blur-sm bg-white/70 p-8 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.2),0_0_15px_rgba(34,197,94,0.2)]">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                  Google&apos;s AI For India: Empowering Bharat with Gemini and
                  Project Astra
                </h1>
                <h2 className="text-xl text-gray-600 mb-8">
                  Gemini: Unleashing AI&apos;s Potential Across Bharat
                </h2>
                <p className="text-gray-700 mb-8">
                  Bharat AI Pragati aspires to make India an AI powerhouse.
                  However, for this dream to be realized, AI must grasp the
                  essence of India's diverse languages. This is where Gemini, a
                  groundbreaking large language model by Google, plays a crucial
                  role. By understanding and processing the multitude of
                  languages spoken across the nation, Gemini bridges linguistic
                  barriers and drives advancements in artificial intelligence.
                  Through this innovative technology, Bharat AI Pragati aims to
                  empower every corner of India, ensuring the benefits of AI are
                  accessible to all its citizens.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {/* <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[16/9] w-full max-w-2xl mx-auto">
                <Image
                  src="/assets/geminiastra2.avif"
                  alt="AI Technology"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-orange-500/20 to-green-500/20 rounded-xl animate-pulse" />
              </div> */}

              <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-[16/9] w-full max-w-2xl mx-auto">
                <Image
                  src="/assets/geminiastra2.avif"
                  alt="AI Technology"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover -z-10 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Astra Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-[16/9] w-full max-w-2xl mx-auto">
                <Image
                  src="/assets/astra.avif"
                  alt="Trustworthy AI"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover -z-10 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-green-500/20 to-orange-500/20 rounded-xl animate-pulse" />
              </div>
              <div className="order-1 md:order-2 relative backdrop-blur-sm bg-white/70 p-8 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.2),0_0_15px_rgba(34,197,94,0.2)]">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
                  Project Astra: Building Trustworthy AI for Digital India
                </h2>
                <p className="text-gray-700 mb-8">
                  Bharat AI Pragati seeks to make India a leader in AI, but
                  trust is essential for widespread adoption. Project Astra, a
                  Google initiative, addresses this by building secure and
                  reliable AI for India. This collaboration ensures that AI
                  technology is accessible, safe, and beneficial for all,
                  fostering trust and enabling India to harness AI's full
                  potential. Through this partnership, Bharat AI Pragati aims to
                  empower the nation with cutting-edge, trustworthy AI solutions
                  that drive progress and innovation.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                  Explore Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-black"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              Bharat <span className="text-orange-500">AI Pragati</span> in
              Action
            </h2>
            <ImageGallery />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default GeminiAndAstra;
