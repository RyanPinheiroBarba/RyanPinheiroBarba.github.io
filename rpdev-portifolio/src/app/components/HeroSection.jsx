import React from 'react';
import Image from "next/image"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Olá, eu sou Ryan Pinheiro</h1>
          <p className='text-white text-base sm:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia minus expedita ducimus magni sit perferendis, accusantium amet corrupti animi quos,
          ea recusandae quibusdam. Voluptatibus dolore perferendis itaque unde repellat sunt.
          </p>
          <div>
            <button className='px-6 py-3 rounded-full mr-4 bg-[#0affb0] text-black hover:bg-slate-800 hover:text-slate-400'>CONTRATE</button>
            <button className='px-6 py-3 rounded-full mr-4 bg-transparent border border-white mt-3 text-white hover:bg-slate-800 hover:text-slate-400'>CURRÍCULO</button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-transparent w-[350px] h-[350px] sm:ml-14 lg:w-[500px] lg:h-[500px] relative'>
          <Image
            src="/images/hero-image.png"
            alt="3D Form"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-[18rem] sm:h-[18rem] lg:w-[40rem] lg:h-[40rem] lg:mt-[12rem]'
            width={500}
            height={500}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;