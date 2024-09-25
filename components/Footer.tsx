import React from 'react'
import { Dock } from './Dock'
import { WebTeam } from './WebTeam'
import Logo from './LogoAlt'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='sm:flex'>
        <div className='basis-[60%] flex mb-10'>
          <Logo />
          <div> 
            <b className='text-white'>Venue:</b> <br /> 
            <p className='text-neutral-500'>
            Guru Nanak Institute of Technology <br />
            157/F, Nilgunj Road, Sahid Colony, <br />
            Panihati, Kolkata, West Bengal - 700114, <br /><br />
            </p>
            <b className='text-white'>Timeline:</b> <br />
            <p className='text-neutral-500'>
            November 5 - 6
            </p>

          </div>
        </div>
        <div className='basis-[40%]'>
          <WebTeam />
          <h4 className='text-white text-xl text-center mb-10 sm:mb-0'> &copy; All rights reserved by Team Techverse </h4>
        </div>
      </div>
      <div className='mt-16 mb-5'>
        <Dock/>
      </div>
    </div> 
  )
}

export default Footer