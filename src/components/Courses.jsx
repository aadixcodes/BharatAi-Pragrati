import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const coursesData = [
  {
    id: 1,
    image: '/assets/course1.png',
    title: 'AI Vidya for School Students',
  },
  {
    id: 2,
    image: '/assets/course2.png',
    title: 'AI Vidya for College Students',
  },
  {
    id: 3,
    image: '/assets/course3.png',
    title: 'AI Vidya for Teachers',
  },
  {
    id: 4,
    image: '/assets/course5.png',
    title: 'AI Vidya for Professionals',
  },
];

const Courses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('courses-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coursesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coursesData.length) % coursesData.length);
  };

  return (
    <div id="courses-section" className="w-full min-h-[600px] py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Static Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                Explore Our
                <span className="block text-orange-600">Courses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-xl">
                Transform your career with cutting-edge AI courses designed for the future of technology.
              </p>
            </div>

            {/* View Courses Button */}
            <div className="flex items-center space-x-6">
              <button className="bg-orange-600 text-white px-8 py-2 rounded-3xl font-semibold 
                hover:bg-orange-700 transition-colors duration-300">
                Enroll Now!!
              </button>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full border-2 border-gray-300 hover:border-orange-600 
                    transition-colors duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-orange-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full border-2 border-gray-300 hover:border-orange-600 
                    transition-colors duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-orange-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {coursesData.map((course, index) => (
                <div
                  key={course.id}
                  className="min-w-full"
                >
                  <div className="relative">
                    {/* Updated Orange Background Card with Image */}
                    <div className="bg-orange-500 rounded-[2rem] p-2">
                      <div className="bg-orange-500 rounded-[1.5rem] p-2">
                        <div className="relative aspect-[4/2.5] rounded-2xl overflow-hidden">
                          <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={300}
                            className="object-cover rounded-2xl"
                          />
                        </div>
                        {/* Course Title moved outside the image */}
                        <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mt-4 text-center ml-2">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Updated Dots Indicator - moved below the card */}
            <div className="flex justify-center space-x-2 mt-4">
              {coursesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 
                    ${currentSlide === index ? 'bg-orange-600' : 'bg-orange-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;