"use client";
import React from 'react';

const HelixPartition = () => {
  return (
    <div className="w-full h-32 relative overflow-hidden">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
      >
        {/* First Helix Wave */}
        <path
          d="M0,40 Q300,80 600,40 T1200,40"
          fill="none"
          stroke="rgba(249, 115, 22, 0.3)"
          strokeWidth="2"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,40 Q300,80 600,40 T1200,40;
              M0,40 Q300,0 600,40 T1200,40;
              M0,40 Q300,80 600,40 T1200,40
            "
          />
        </path>

        {/* Second Helix Wave */}
        <path
          d="M0,40 Q300,0 600,40 T1200,40"
          fill="none"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="2"
          className="animate-wave-normal"
        >
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="
              M0,40 Q300,0 600,40 T1200,40;
              M0,40 Q300,80 600,40 T1200,40;
              M0,40 Q300,0 600,40 T1200,40
            "
          />
        </path>

        {/* Third Helix Wave */}
        <path
          d="M0,40 Q300,80 600,40 T1200,40"
          fill="none"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="2"
          className="animate-wave-fast"
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0,40 Q300,80 600,40 T1200,40;
              M0,40 Q300,0 600,40 T1200,40;
              M0,40 Q300,80 600,40 T1200,40
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default HelixPartition;