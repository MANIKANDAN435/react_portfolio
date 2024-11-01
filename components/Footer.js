import React from 'react'

const Footer = () => {
    const currentYear =new Date().getFullYear()

  return (  <div className='bg-linked h-10 text-center py-2'>
             <h1>&copy;manikandan {currentYear}</h1>
            </div>
  )
}

export default Footer