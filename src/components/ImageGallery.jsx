// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const images = [
//   {
//     url: '/assets/img1.webp',
//     title: 'Image 1',
//   },
//   {
//     url: '/assets/img2.webp',
//     title: 'Image 2',
//   },
//   {
//     url: '/assets/img3.webp',
//     title: 'Image 3',
//   },
//   {
//     url: '/assets/img4.webp',
//     title: 'Image 4',
//   },
//   {
//     url: '/assets/img5.webp',
//     title: 'Image 5',
//   },
//   {
//     url: '/assets/img6.webp',
//     title: 'Image 6',
//   },
// ];

// export function ImageGallery() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % (images.length - 2));
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + (images.length - 2)) % (images.length - 2));
//   };

//   return (
//     <div className="relative w-full overflow-hidden rounded-xl px-4">
//       <div className="relative h-[300px] flex gap-6">
//         {[...Array(3)].map((_, i) => {
//           const imageIndex = (currentIndex + i) % images.length;
//           return (
//             <div
//               key={i}
//               className="w-1/3 transition-all duration-500 transform hover:scale-105"
//               style={{
//                 transform: `translateX(-${currentIndex * 33.33}%)`,
//               }}
//             >
//               <div className="relative h-full rounded-xl overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.2),0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(249,115,22,0.3),0_0_20px_rgba(34,197,94,0.3)] transition-shadow">
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={images[imageIndex].url}
//                     alt={images[imageIndex].title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     priority={i === 0}
//                   />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
//                   <h3 className="text-white text-lg font-semibold">{images[imageIndex].title}</h3>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <button
//         onClick={prev}
//         className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={next}
//         className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: '/assets/img1.webp',
    title: 'Image 1',
  },
  {
    url: '/assets/img2.webp',
    title: 'Image 2',
  },
  {
    url: '/assets/img3.webp',
    title: 'Image 3',
  },
  {
    url: '/assets/img4.webp',
    title: 'Image 4',
  },
  {
    url: '/assets/img5.webp',
    title: 'Image 5',
  },
  {
    url: '/assets/img6.webp',
    title: 'Image 6',
  },
];

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Number of slides to show based on screen size
  const slidesToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const totalSlides = images.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(next, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative w-full overflow-hidden px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[300px] md:h-[400px] flex transition-all duration-500">
        <div 
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            width: `${(100 * totalSlides) / slidesToShow}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full md:w-1/3 flex-shrink-0"
            >
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === currentIndex}
                />
                {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-lg font-medium">
                    {image.title}
                  </h3>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.preventDefault();
          prev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}