// import { motion } from 'framer-motion'
import Image from "next/image";

const governmentInitiatives = [
  {
    logo: "/assets/gov1.webp",
  },
  {
    logo: "/assets/gov2.webp",
  },
  {
    logo: "/assets/gov3.webp",
  },
  {
    logo: "/assets/gov4.webp",
  },
  {
    logo: "/assets/gov5.webp",
  },
  {
    logo: "/assets/gov6.webp",
  },
];

const AIInitiativesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12"
         style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", // Adds a subtle shadow
        }}>
          AI Initiatives by the Government of India
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap">
            {[...governmentInitiatives, ...governmentInitiatives].map(
              (initiative, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl min-w-[200px]"
                >
                  <Image
                    src={initiative.logo}
                    alt={initiative.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInitiativesSection;
