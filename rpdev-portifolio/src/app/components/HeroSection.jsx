"use client";
import React from 'react';
import Image from "next/image"

import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-green-400'>
            Olá, eu sou <br />              
            </span>
            <TypeAnimation
                sequence={[
                  `RYAN PINHEIRO`,
                  1000,
                  'WEB DEV',
                  1000,
                  'FULL-STACK',
                  1000,
                  'RYAN PINHEIRO',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.3em', display: 'inline-block', marginTop: '2rem'}}
                repeat={0}
                className=' sm:text-6xl lg:text-7xl font-extrabold text-white'
              />
          </h1>
          <p className='text-white text-base sm:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia minus expedita ducimus magni sit perferendis, accusantium amet corrupti animi quos,
          ea recusandae quibusdam. Voluptatibus dolore perferendis itaque unde repellat sunt.
          </p>
          <div className='mt-3 sm:mt-0'>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-green-400 to-green-700 text-black hover:bg-gradient-to-br hover:from-green-600 hover:via-green-500 hover:to-green-800'>CONTRATE</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 mt-3 bg-gradient-to-br from-green-500 via-green-400 to-green-700 text-white hover:text-green-500'>
             <span className='block bg-[#121212] rounded-full px-5 py-2'>CURRÍCULO</span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-transparent w-[350px] h-[350px] sm:ml-14 lg:w-[500px] lg:h-[500px] relative'>
          <Image
            src="/images/hero-image.png"
            alt="3D Form"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-[18rem] sm:h-[18rem] lg:w-[40rem] lg:h-[40rem] lg:mt-[12rem]'
            width={330}
            height={330}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;