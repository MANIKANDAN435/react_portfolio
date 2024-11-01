import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col md:w-full bg-primary md:h-[300px] h-[200px] items-center justify-center w-sm' id='Contact'> 
        <h1 className='md:text-4xl md:pb-2 font-bold pb-2 text-2xl'>CONTACT</h1>
        <h2 className='md:text-2xl px-3 text-center'><span className='whitespace-nowrap'> If you'd like to get in touch,</span> <span className='whitespace-nowrap'> feel free to reach out via email </span></h2>
        <h3 className='md:text-2xl whitespace-nowrap '><span>Email:</span> maniikandan825@gmail.com</h3>
    </div>
  )
}

export default Contact