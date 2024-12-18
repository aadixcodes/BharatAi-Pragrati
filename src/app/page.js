import Image from "next/image";
import HeroSection from "@/components/Hero";
import SectionNm from "@/components/SectionNm";
import MissionVisionSection from "@/components/MissionAndVision";
import AIInitiativesSection from "@/components/AIInitiativesSection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <SectionNm />
    <MissionVisionSection />
    <AIInitiativesSection />
    </>
  );
}
