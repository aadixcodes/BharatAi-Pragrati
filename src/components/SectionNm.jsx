// import { motion } from 'framer-motion';

const SectionNm = () => {
    return (
        <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl p-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                alt="AI Innovation"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Transforming India Through
                <span className="block text-primary">AI Innovation</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We're on a mission to democratize AI education across India, making cutting-edge technology accessible to everyone. Our comprehensive programs are designed to empower the next generation of AI innovators.
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default SectionNm;