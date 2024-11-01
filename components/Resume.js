import React from 'react'
import RESUMEIMG from '../assets/resume.jpg'
const Resume = () => {
        return (
            <section className='  md:h-auto flex flex-col items-center  md:flex md:flex-row  bg-linked h-full' id='Resume'>
                <div className=' md:h-full py-8 md:flex md:justify-end  md:w-1/2 w-[70%]'>
                <img src={RESUMEIMG} alt="FANCY PIC" className='md:w-[400px] '/>
                </div>
                <div className=' md:w-1/2 md:px-5 md:flex md:flex-col md:justify-center md:items-start text-center md:mb-5  mb-3 font-bold'>
                    <h1 className='md:text-4xl  md:mt-3 text-2xl mb-2' >RESUME</h1>
                    <p className='md:text-2xl text-sm '>You can view my resume <a href='#'className='bg-darkblue md:px-5 md:py-1  sm:text-sm py-1 px-1 md:text-lg md:w-1/3 hover:border-2 border-pureblack'>Download</a></p> 
                </div>
            </section>
        )
}

export default Resume