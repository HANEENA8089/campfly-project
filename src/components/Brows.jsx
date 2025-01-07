import React from 'react';
import image52 from '../assets/image/image 52.png';
import image53 from '../assets/image/image 53.png';
import image54 from '../assets/image/image 54.png';
import image55 from '../assets/image/image 55.png';
import image56 from '../assets/image/image 56.png';
import image57 from '../assets/image/image 57.png';
import image58 from '../assets/image/image 58.png';
import image59 from '../assets/image/image 59.png';

function Brows() {
  return (
    <>
 
      <br />
      <br />
      <br />
      <div className="flex font-title mt-6 px-4 container mx-auto font-bold text-xl justify-between items-center">
        <div className="gateway-heading">Browse Packages by Theme</div>
      </div>
      <br />
 
      <div className="grid grid-cols-2 font-title sm:grid-cols-3 lg:grid-cols-9 gap-6 container px-4 mx-auto mt-5">

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image52} alt="Mountains" />
          <span className="block mt-2">Mountains</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image53} alt="Adventure" />
          <span className="block mt-2">Adventure</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image54} alt="Beach" />
          <span className="block mt-2">Beach</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image55} alt="Off Road" />
          <span className="block mt-2">Off Road</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image56} alt="Historical" />
          <span className="block mt-2">Historical</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image57} alt="Water Falls" />
          <span className="block mt-2">Water Falls</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image58} alt="Snow" />
          <span className="block mt-2">Snow</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image59} alt="Nature" />
          <span className="block mt-2">Nature</span>
        </div>

        <div className="text-center">
          <img className="rounded-full w-32 h-32 mx-auto" src={image59} alt="Nature" />
          <span className="block mt-2">Nature</span>
        </div>
      </div>
    </>
  );
}

export default Brows;
