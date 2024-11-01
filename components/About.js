import React from 'react'
import ABOUTIMG from '../assets/about.png'
const About = () => {
        return (
            <section className='md:flex bg-secoundary h-full' id='About' >
                <img src={ABOUTIMG} alt="FANCY PIC" className='md:w-1/2'/>
                <div className='md:w-1/2 flex flex-col justify-center items-center font-font-about font-bold'>
                    <h1 className='md:text-4xl text-2xl mt-3' >ABOUT ME</h1>
                    <p className='md:text-2xl mt-2'>Hi, Iam Mani Kandan.</p> <p className='md:text-2xl text-center mt-1'>I use React to build single-page applications with component-based architecture.</p>
                </div>
            </section>
        )
}

export default About