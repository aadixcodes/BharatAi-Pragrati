"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      title: "Our Mission",
      description:
        "Our mission is to empower Tier 2 and 3 cities by breaking language barriers in AI education, enhancing national employability through increased productivity and quality output using AI. We aim to lead the AI revolution by democratizing AI knowledge and tools, fostering an inclusive, technologically advanced society.",
      image: "/assets/ourmission.webp",
    },
    vision: {
      title: "Our Vision",
      description:
        "Our vision is to develop a future-ready workforce capable of leveraging AI for national growth, positioning India as a global leader in AI through homegrown innovation, and creating impactful AI solutions tailored to India’s unique challenges and opportunities. We aim to foster a culture of continuous learning and collaboration to drive sustainable progress.",
      image: "/assets/ourvision.webp",
    },
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 to-white"></div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-16">
          Our Mission and Vision
        </h2>

        <div className="flex justify-center gap-6 mb-12">
          {["mission", "vision"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 rounded-full border-2 border-orange-500 font-semibold transition-all shadow-lg ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-orange-500/50 hover:shadow-orange-500/70"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
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
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="flex justify-center">
              <img
                src={content[activeTab].image}
                alt={content[activeTab].title}
                className="rounded-xl shadow-2xl w-[500px] h-[300px] object-cover"
              />
            </div>

            <div className="text-left space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                {content[activeTab].title}
              </h3>
              <p className="text-md md:text-xl text-gray-600 leading-relaxed">
                {content[activeTab].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVisionSection;
