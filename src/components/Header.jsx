import React, { useState } from "react";
import { Navbar, ButtonGroup, Button } from "@material-tailwind/react";
import logo from "../assets/image/campflyicon.png";
import explore from "../assets/image/Vector.png";
import taj from "../assets/image/taj-mahal.png";
import goa from "../assets/image/goa.png";
import mumbai from "../assets/image/landscape.png";
import kochi from "../assets/image/kochi.png";
import ladakh from "../assets/image/ladakh.png";
import dubai from "../assets/image/dubai.png";
import gate from "../assets/image/gate-india.png";

function Header() {
  const [selected, setSelected] = useState("One");

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (
    <>     
      <div className="hidden container mx-auto md:block bg-gradient-to-r from-greene to-greene1 w-full">
        <ul className="flex text-white justify-around text-sm">
          <li>Onam sale offer. 30% off on honeymoon packages</li>
          <li>Onam sale offer. 30% off on honeymoon packages</li>
          <li>Onam sale offer. 30% off on honeymoon packages</li>
        </ul>
      </div>

     
      <Navbar className="container mx-auto justify-between flex flex-wrap py-4 px-4 md:px-8">
        <div className="flex items-center">
          <img alt="logo" src={logo} className="h-7 w-auto" />
        </div>

        <div className="flex items-center w-full md:w-64 h-8 shadow-md rounded-full px-4 mt-2 md:mt-0">
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
          <input
            className="flex-grow focus:outline-none rounded-full placeholder-gray-400 text-gray-800"
            type="text"
            placeholder="Search Destination"
          />
        </div>

        <div className="hidden md:flex gap-10 text-grey">
          <a href="#">Honeymoon</a>
          <a href="#">Family</a>
        </div>

        <div className="mt-4 md:mt-0">
          <button className="rounded-full flex items-center h-8 border border-grey1 bg-white px-3">
            <div className="flex items-center text-grey1 space-x-2">
              <img
                className="w-5 h-5"
                src="https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/India-512.png"
                alt="India Flag"
              />
              <p className="text-sm">$ INR</p>
              <p><i class="fa-solid fa-angle-down "></i></p>
            </div>
          </button>
        </div>

        <Button
          variant=""
          size="sm"
          className="bg-green2 w-36  mt-4  md:mt-0 rounded-lg"
        >
          <span className="text-black text-sm">Sign in</span>
        </Button>
      </Navbar>

      <Navbar className="container mx-auto flex flex-wrap justify-between items-center px-8 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-10 gap-10 mt-4 md:mt-0">
        <div className=" items-center ">
          <img src={explore} alt="" />
          <span className="text-black">Explore</span>
        </div>
          <div>
            <img src={taj} alt="" />
            <span className="text-black">Agra</span>
          </div>
          <div>
            <img src={ladakh} alt="" />
            <span className="text-black">Ladakh</span>
          </div>
          <div>
            <img src={gate} alt="" />
            <span className="text-black">Mumbai</span>
          </div>
          <div>
            <img src={dubai} alt="" />
            <span className="text-black">Dubai</span>
          </div>
          <div>
            <img src={mumbai} alt="" />
            <span className="text-black">Kashmir</span>
          </div>
          <div>
            <img src={goa} alt="" />
            <span className="text-black">Kerala</span>
          </div>
          <div>
            <img src={goa} alt="" />
            <span className='text-black' >Kerala</span>
          </div>
          <div>
            <img src={kochi} alt="" />
            <span className='text-black' >Kochi</span>
          </div>
          <div className="rounded border">
          <i class="fa-solid fa-chevron-right text-black"></i>
          </div>
        </div>

        <div className="border border-grey3 rounded-md mt-4 md:mt-0">
          <ButtonGroup className="bg-white rounded-md p-1 ">
            <Button
              onClick={() => handleToggle("One")}
              className={`rounded-md px-4 py-2 font-normal ${
                selected === "One" ? "bg-green2 text-white" : "bg-white text-grey2"
              }`}
            >
              Destinations
            </Button>
            <Button
              onClick={() => handleToggle("Two")}
              className={`rounded-md   font-normal ${
                selected === "Two" ? "bg-green2 text-white" : "bg-white text-grey2"
              }`}
            >
              Experiences
            </Button>
          </ButtonGroup>
        </div>
        <div >
          <Button className="bg-white border border-grey3">
          <i class="fa-solid fa-bars text-grey2 "></i>
          </Button>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
