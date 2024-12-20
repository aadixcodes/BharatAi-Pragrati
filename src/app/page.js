'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from "@/components/Hero";
import SectionNm from "@/components/SectionNm";
import MissionVisionSection from "@/components/MissionAndVision";
import AIInitiativesSection from "@/components/AIInitiativesSection";
import BharatAiPragati from "@/components/BharatAiPragati";
import AIVidya from '@/components/AiVidya';
import Courses from '@/components/Courses';
import Benefits from '@/components/Benefits';
import Certification from '@/components/Certification';
import GeminiSection from '@/components/GeminiSection';
import GeminiAndAstra from '@/components/GeminiAndAstra';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);  

  const handleLoadingComplete = () => {
    setIsLoading(false);  
  };

  useEffect(() => {
    if (!isLoading) {
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
          <AIVidya />
          <Courses />
          <Benefits />
          <Certification />
          <GeminiSection />
          <GeminiAndAstra />
        </>
      )}
    </>
  );
}
