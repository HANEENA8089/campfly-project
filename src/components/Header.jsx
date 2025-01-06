import React, { useState } from "react";
import { Navbar, Typography, ButtonGroup, Button,Select,Input } from "@material-tailwind/react";
import logo from '../assets/image/campflyicon.png'
import explore from '../assets/image/Vector.png'
import taj from '../assets/image/taj-mahal.png'
import goa from '../assets/image/goa.png'
import mumbai from '../assets/image/landscape.png'
import kochi from '../assets/image/kochi.png'
import ladakh from '../assets/image/ladakh.png'
import dubai from '../assets/image/dubai.png'
import gate from '../assets/image/gate-india.png'

function Header() {
  const [selected, setSelected] = useState("One");

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (
    <>
    <div class="h-6 container mx-auto bg-gradient-to-r from-greene to-greene1 w-440 h-35">
        <ul className='flex text-white  ms-10 me-8 justify-between w-42  text-sm gap-10 '>
          <li>Onam sale offer. 30% off on honeymoon packages</li>
          <li>Onam sale offer. 30% off on honeymoon packages</li>
          <li>Onam sale offer. 30% off on honeymoon packages</li>
        </ul>
      </div>
    <Navbar className='container mx-auto justify-between'>
    <div className="flex container mx-auto px-2   gap-10">
              <img
                alt="logo"
                src={logo}
                className="h-7  w-auto"
              />
              {/* <div>
          <input type="text"
          className='rounded-full w-300 pl-3 h-7   text-grey text-sm shadow-sm shadow-grey ' 
          placeholder='Search Destination' */}
          {/* /> */}
          {/* <Input className='rounded-full w-300   text-sm shadow-inner shadow-grey ' 
          placeholder='Search Destination'>
          </Input> */}
          {/* </div> */}
          <div className="flex items-center w-64 h-8 shadow-md rounded-full px-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19a8 8 0 100-16 8 8 0 000 16zm10-2l-4.35-4.35"
    />
  </svg>
  {/* Input Field */}
  <input
    className="flex-grow focus:outline-none rounded-full placeholder-gray-400 text-gray-800"
    type="text"
    placeholder="Search Destination"
  />
</div>



          <div className='container mx-auto'>
            <div className='flex  gap-20 pl-10'>
            <a href="#" className='text-grey'>
          Honeymoon
        </a>
        <a href="" className='text-grey'>
          Family
        </a>
            </div>
            
          </div>
          {/* <div className='container mx-auto '>
           <Button className='rounded-full flex mb-2  h-8 border border-grey1 bg-white'>
            <div className='flex mb-4 text-grey1  w-20 pr-3   '>
             
              <img className='w-5 h-5 justify-start' src="https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/India-512.png" alt="" />
             <p className="flex">$ INR</p>
              
            </div>
           </Button>
            
          </div> */}
          <div className="container mx-auto ms-44">
  <button className="rounded-full flex items-center mb-2 h-8 border border-grey1 bg-white px-3">
    {/* Icon and Currency */}
    <div className="flex items-center text-grey1 w-auto space-x-2">
      {/* Flag Icon */}
      <img
        className="w-5 h-5"
        src="https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/India-512.png"
        alt="India Flag"
      />
      {/* Currency Text */}
      <p className="text-sm">$ INR</p>
    </div>
  </button>
</div>

          <Button
                variant=""
                size="sm"
                className=" bg-green2 container w-96 me-16  rounded-lg"
              >
                <span className='text-black' >Sign in</span>
              </Button>
          
          
            </div>
    </Navbar>
    <Navbar className='container mx-auto  '>
      <div className=' flex justify-between '>
         <div>
         <img src={explore} alt="" />
         <span className='text-black ' >Explore</span>
          </div> 
          <div>
            <img src={taj} alt="" />
            <span className='text-black' >Agra</span>
          </div>
          <div>
            <img src={ladakh} alt="" />
            <span className='text-black' >Ladakh</span>
          </div>
          <div>
            <img src={gate} alt="" />
            <span className='text-black' >Mumbai</span>
          </div>
          <div>
            <img src={dubai} alt="" />
            <span className='text-black' >Dubai</span>
          </div>
          <div>
            <img src={mumbai} alt="" />
            <span className='text-black' >Kashmir</span>
          </div>
          <div>
            <img src={mumbai} alt="" />
            <span className='text-black' >Goa</span>
          </div>
          <div>
            <img src={goa} alt="" />
            <span className='text-black' >Kerala</span>
          </div>
          <div>
            <img src={kochi} alt="" />
            <span className='text-black' >Kochi</span>
          </div>
          <div>
            <img src={mumbai} alt="" />
            <span className='text-black' >Explore</span>
          </div>
          <div className="rounded border">
          <i class="fa-solid fa-chevron-right text-black"></i>
          </div>
          <div className=''>
          <div className="border border-green2 rounded-md">
              <ButtonGroup className="bg-white  rounded-md p-1">
                <Button
                  onClick={() => handleToggle("One")}
                  className={`rounded-md px-4 py-2 font-normal ${
                    selected === "One" ? "bg-green2 text-white " : "bg-white text-grey2"
                  }`}
                >
                  Destinations
                </Button>
                <Button
                  onClick={() => handleToggle("Two")}
                  className={`rounded-md px-4 py-2 font-normal ${
                    selected === "Two" ? "bg-green2  text-white " : "bg-white text-grey2"
                  }`}
                >
                  Experiences
                </Button>
              </ButtonGroup>
            </div>
          </div>

          </div>
    </Navbar>
    </>
  )
}

export default Header
