'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds for quicker loading
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next === 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center flex-col"
      initial={{ y: 0 }}
      animate={{ y: progress === 100 ? '-100%' : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Video player */}
        <motion.video
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <source src="/assets/BharatAiloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(to right, #FF9933 ${progress}%, white ${progress}%, #138808 0%)`,
            }}
            initial={{ width: 0 }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
