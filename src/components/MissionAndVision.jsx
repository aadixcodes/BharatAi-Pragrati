'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const content = {
    mission: {
      title: 'Our Mission',
      description: 'To democratize AI education across India by providing accessible, high-quality learning resources that empower individuals to become proficient in artificial intelligence and contribute to India\'s technological advancement.',
      image: 'https://images.unsplash.com/photo-1700729471341-0b0c9bcd2b9e?auto=format&fit=crop&q=80',
    },
    vision: {
      title: 'Our Vision',
      description: 'To establish India as a global leader in AI innovation by creating a skilled workforce capable of developing and implementing AI solutions that address real-world challenges and drive economic growth.',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80',
    },
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Mission and Vision</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {['mission', 'vision'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {content[tab].title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <img
                src={content[activeTab].image}
                alt={content[activeTab].title}
                className="rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl" />
            </div>
            
            <div className="text-left space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">{content[activeTab].title}</h3>
              <p className="text-gray-600 leading-relaxed">{content[activeTab].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVisionSection;