import React from 'react'
import { Dock } from './Dock'
import { WebTeam } from './WebTeam'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='sm:flex'>
        <div className='basis-[60%]'>
          <h1 className='text-white text-xl text-center mb-10 sm:mb-0'> All rights reserved by Team Techverse </h1>
        </div>
        <div className='basis-[40%]'>
          <WebTeam />
        </div>
      </div>
      <div className='mt-16 mb-5'>
        <Dock/>
      </div>
    </div> 
  )
}

export default Footer