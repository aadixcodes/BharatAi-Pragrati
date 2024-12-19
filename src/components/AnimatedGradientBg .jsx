import React from 'react';

const AnimatedGradientBg = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Orange Gradient */}
      <div className="absolute top-[5%] right-[15%] w-[500px] h-[500px] bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
      
      {/* Green Gradient */}
      <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] bg-green-500/20 rounded-full filter blur-3xl animate-pulse delay-700" />
      
      {/* Sky Blue Gradient */}
      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-sky-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />

      {/* Additional ambient gradients */}
      <div className="absolute top-[60%] right-[25%] w-[300px] h-[300px] bg-orange-400/10 rounded-full filter blur-2xl animate-pulse delay-500" />
      <div className="absolute top-[20%] left-[20%] w-[250px] h-[250px] bg-green-400/10 rounded-full filter blur-2xl animate-pulse delay-1500" />
    </div>
  );
};

export default AnimatedGradientBg;