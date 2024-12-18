// import { motion } from 'framer-motion';

const governmentInitiatives = [
  {
    name: 'Digital India',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
  {
    name: 'NITI Aayog',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
  {
    name: 'AI for All',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
  {
    name: 'Smart Cities Mission',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
  {
    name: 'Make in India',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
  {
    name: 'Skill India',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
];

const AIInitiativesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      AI Initiatives by the Government of India
    </h2>

    <div className="relative overflow-hidden">
      <div className="flex gap-8 whitespace-nowrap">
        {[...governmentInitiatives, ...governmentInitiatives].map((initiative, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-lg min-w-[200px]"
          >
            <img
              src={initiative.logo}
              alt={initiative.name}
              className="w-20 h-20 object-contain"
            />
            <h3 className="font-semibold text-gray-800">{initiative.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default AIInitiativesSection;
