import React from 'react'
import HeroImg from "../assets/hero.png"
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
        <section className='flex flex-col md:flex-row font-font-hero px-5 md:py-32 py-10 justify-center bg-linked w-full h-full' id='Hero'>
            <div className='md:w-1/2 flex flex-col justify-center '>
            <h1 className='w-1/2 md:text-6xl whitespace-nowrap'>Hi<br/>IM MANI KANDAN M</h1>
            <p className='text-3xl mt-2'>Im a React JS Developer</p>
            <div><a href="#"><FaLinkedin  size={40} className=' hover:bg-purewhite mt-3 text-pureblack'/></a></div>
             </div>
           
            <img className=' md:w-1/3' src={HeroImg} alt="hero"  />
          
        </section>
  )
}

export default Hero