import React from 'react';
import Image from 'next/image';

const SectionNm = () => {
  return (
    <>

<div className="text-white py-20 bg-white relative mt-12 mb-[8rem] lg:mb-[10rem] z-10">

  <div className="bg-orange-500 pt-10 w-full h-[25rem] md:h-[40rem]">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-4 leading-tight">
          <span className="text-xl md:text-2xl font-bold">प्रेरणास्तोत्र</span> <br />
          <span className="text-md md:text-xl mb-4 leading-tight">
            AI हमारे नए भविष्य को गढ़ने का सबसे बड़ा आधार बन रही है. AI की एक बहुत बड़ी ताकत है, लोगों को Connect करने की उसकी क्षमता. AI के सही इस्तेमाल से सिर्फ देश की आर्थिक प्रगति ही सुनिश्चित नहीं होती बल्कि ये समानता और सामाजिक न्याय को भी पक्का करता है.
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          <i>~ श्री नरेंद्र मोदी जी ग्लोबल पार्टनरशिप ऑन आर्टिफिशियल इंटेलिजेंस (GPAI) समिट-2023</i>
        </p>
        <div className="relative mb-8">
          <Image 
            src="/assets/modiji.jpg"
            alt="Design team collaboration"
            width={1200}
            height={400}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default SectionNm;