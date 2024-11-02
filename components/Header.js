import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
const Header = () => {
    const [toggle , setToggle] = useState(false)

  return (
        <header className='flex justify-between px-5 py-2 bg-primary' id='Header'>
            <a className='font-bold text-black' href="#">MANI KANDAN M</a>
            <nav className='hidden md:block'>
                <ul className='flex  text-white'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>

            {/* for mobile view */}

            { toggle &&  
                 <nav className='block  md:hidden mob-nav  '>
                    <ul onClick={()=>setToggle(!toggle)} className='flex flex-col   text-white mob-nav'>
                        <li><a href="/">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Resume">Resume</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>}
            <button onClick = {()=>setToggle(!toggle)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
  )
}

export default Header