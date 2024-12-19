// import Image from "next/image";
// import HeroSection from "@/components/Hero";
// import SectionNm from "@/components/SectionNm";
// import MissionVisionSection from "@/components/MissionAndVision";
// import AIInitiativesSection from "@/components/AIInitiativesSection";
// import BharatAiPragati from "@/components/BharatAiPragati";

// export default function Home() {
//   return (
//     <>
//     <HeroSection />
//     <SectionNm />
//     <BharatAiPragati />
//     <MissionVisionSection />
//     <AIInitiativesSection />
//     </>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';// Import the LoadingScreen component
import HeroSection from "@/components/Hero";
import SectionNm from "@/components/SectionNm";
import MissionVisionSection from "@/components/MissionAndVision";
import AIInitiativesSection from "@/components/AIInitiativesSection";
import BharatAiPragati from "@/components/BharatAiPragati";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);  // State to control the loading screen

  const handleLoadingComplete = () => {
    setIsLoading(false);  // Hide loading screen after completion
  };

  useEffect(() => {
    // This effect is to run any side-effects, such as setting timeouts or additional actions
    if (!isLoading) {
      // Perform any actions when loading is complete, e.g., analytics, logging, etc.
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <HeroSection />
          <SectionNm />
          <BharatAiPragati />
          <MissionVisionSection />
          <AIInitiativesSection />
        </>
      )}
    </>
  );
}
