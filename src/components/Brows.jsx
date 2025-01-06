import React from 'react'
import image52 from '../assets/image/image 52.png'
import image53 from '../assets/image/image 53.png'
import image54 from '../assets/image/image 54.png'
import image55 from '../assets/image/image 55.png'
import image56 from '../assets/image/image 56.png'
import image57 from '../assets/image/image 57.png'
import image58 from '../assets/image/image 58.png'
import image59 from '../assets/image/image 59.png'

function Brows() {
  return (
    <>
    <div className="flex mt-6  ps-10  px-4  container mx-auto   font-bold text-xl justify-between align-center">
       <div className="gateway-heading ">Brows package by theme</div>
    </div>
    <div className='flex gap-10 container  ps-10  px-4  mx-auto mt-5 '>
    <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image52} alt="" />
        <span className='text-center ' >Mountains</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image53} alt="" />
        <span className='text-center ' >Adventure</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image54} alt="" />
        <span className='text-center ' >Beach</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image55} alt="" />
        <span className='text-center ' >Off Road</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image56} alt="" />
        <span className='text-center ' >Historical</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image57} alt="" />
        <span className='text-center ' >Water Falls</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image58}alt="" />
        <span className='text-center ' >Snow</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image59} alt="" />
        <span className='text-center ' >Nature</span>
        </div>
        <div className='text-center' >
        <img className='rounded-full w-32 h-32' src={image59} alt="" />
        <span className='text-center ' >Nature</span>
        </div>
        
    </div>
    </>
  )
}

export default Brows
