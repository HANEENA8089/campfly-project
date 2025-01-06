import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton
  } from "@material-tailwind/react";
  import { Carousel } from "@material-tailwind/react";
  import image44 from '../assets/image/image 44.png'
  import image39 from '../assets/image/image 39.png'
  import image43 from '../assets/image/image 43.png'


function Honeymoon() {
  return (
    <>
      <div className="flex mt-6  container mx-auto  ps-10  px-4 font-bold text-xl justify-between align-center">

<div className="gateway-heading  ">Honeymoon Packages</div>

</div>
<div className='flex  container  ps-10  px-4   mx-auto'>
<div className='m-20 mt-6 container mx-auto'>
       <Card className="mt-6 w-96 ">
      <CardHeader color="blue-gray" className="relative  container mx-auto">
          <Carousel className="rounded-xl">
      <img
        src={image39}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div  className="absolute top-0 left-0 bg-mustard text-black text-xs px-5 py-3 rounded-br-lg">
               Member Price <br /> Availabe
              </div>
              <div className='absolute  border-none  right-0 px-4 py-4 '>
              <IconButton variant="text" className=" bg-white rounded-full">
              <i class="fa-solid fa-share-nodes"/>
      </IconButton>
              </div>
      <img
         src={image39}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
         src={image39}
         alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
      </CardHeader>
      <CardBody className='container mx-auto'>
        <Typography variant="h7" color="blue-gray" className="font-medium container mx-auto flex mb-2 tracking-tight">
        Ladakh Adventure Expedition With Turtuk Village
        </Typography>
        <Typography>
          <div className='flex justify-between '>
            <div>
            5 days & 4 nights
            </div>
            <div className='justify-end mr-4 text-green3 text-sm '>
            <i class="fa-solid fa-star" >4.9</i>(329)
            </div>
          </div>
        </Typography>
        
        <Typography>
        <div className='border rounded-lg pl-3 mt-1 text-white bg-gradient-to-r from-p2 to-p21 w-24 h-7 ' >
            <p><i class="fa-solid fa-heart" ></i> Solo</p>
        </div>
        </Typography>
        <Typography >
        <ul className='flex mt-2 justify-between list-disc pl-5' >
            <li>All Meals</li>
            <li>All Transport</li>
            <li>All entry tickets</li>
        </ul>
        </Typography>
        <Typography>
        <div className='flex gap-3 mt-3  text-sm '>
        <h5 className='font-semibold'>INR 21,800</h5>
        <p className='text-xs mt-2'>Per couple</p>
        <h6 className='line-through'>INR 29,900</h6>
        <div className='border w-24 pl-2 text-green3 bg-bg '>SAVE INR 8100</div>
      </div>
        </Typography>
        <Typography>
          <div className='flex gap-8'>
          <Button className='bg-white border mt-2 border-greene'>          
              <i class="fa-solid fa-phone text-green3 w-12"></i>
          </Button>
          <Button className='text-green3 bg-green2 w-64  border mt-2'>          
            Book now
          </Button>
          </div>
    
        </Typography>
      </CardBody>
    </Card>
    </div>
<div className='m-20 mt-6 container mx-auto'>
       <Card className="mt-6 w-96 ">
      <CardHeader color="blue-gray" className="relative  container mx-auto">
          <Carousel className="rounded-xl ">
      <img
        src={image44}
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <div  className="absolute top-0 left-0 bg-mustard text-black text-xs px-5 py-3 rounded-br-lg">
               Member Price <br /> Availabe
              </div>
              <div className='absolute  border-none  right-0 px-4 py-4 '>
              <IconButton variant="text" className=" bg-white rounded-full">
              <i class="fa-solid fa-share-nodes"/>
      </IconButton>
              </div>

              
      <img
        src={image44}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image44}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
      </CardHeader>
      <CardBody className='container mx-auto'>
        <Typography variant="h7" color="blue-gray" className="font-medium container mx-auto flex mb-2 tracking-tight">
        Ladakh Adventure Expedition With Turtuk Village
        </Typography>
        <Typography>
          <div className='flex justify-between '>
            <div>
            5 days & 4 nights
            </div>
            <div className='justify-end mr-4 text-green3 text-sm '>
            <i class="fa-solid fa-star" >4.9</i>(329)
            </div>
          </div>
        </Typography>
        
        <Typography>
        <div className='border rounded-lg pl-3 mt-1 text-white bg-gradient-to-r from-purple1 to-purple2 w-36 h-7 ' >
            <p><i class="fa-solid fa-heart" ></i> Honey moon</p>
        </div>
        </Typography>
        <Typography >
        <ul className='flex mt-2 justify-between list-disc pl-5' >
            <li>All Meals</li>
            <li>All Transport</li>
            <li>All entry tickets</li>
        </ul>
        </Typography>
        <Typography>
        <div className='flex gap-3 mt-3  text-sm '>
        <h5 className='font-semibold'>INR 21,800</h5>
        <p className='text-xs mt-2'>Per couple</p>
        <h6 className='line-through'>INR 29,900</h6>
        <div className='border w-24 pl-2 text-green3 bg-bg '>SAVE INR 8100</div>
      </div>
        </Typography>
        <Typography>
          <div className='flex gap-8'>
          <Button className='bg-white border mt-2 border-greene'>          
              <i class="fa-solid fa-phone text-green3 w-12"></i>
          </Button>
          <Button className='text-green3 bg-green2 w-64  border mt-2'>          
            Book now
          </Button>
          </div>
    
        </Typography>
      </CardBody>
    </Card>
    </div>
  
    <div className='m-20 mt-6 container mx-auto'>
       <Card className="mt-6 w-96 ">
      <CardHeader color="blue-gray" className="relative  container mx-auto">
          <Carousel className="rounded-xl">
      <img
        src={image43}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div  className="absolute top-0 left-0 bg-mustard text-black text-xs px-5 py-3 rounded-br-lg">
               Member Price <br /> Availabe
              </div>
              <div className='absolute  border-none  right-0 px-4 py-4 '>
              <IconButton variant="text" className=" bg-white rounded-full">
              <i class="fa-solid fa-share-nodes"/>
      </IconButton>
              </div>
      <img
        src={image43}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image43}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
      </CardHeader>
      <CardBody className='container mx-auto'>
        <Typography variant="h7" color="blue-gray" className="font-medium container mx-auto flex mb-2 tracking-tight">
        Ladakh Adventure Expedition With Turtuk Village
        </Typography>
        <Typography>
          <div className='flex justify-between '>
            <div>
            5 days & 4 nights
            </div>
            <div className='justify-end mr-4 text-green3 text-sm '>
            <i class="fa-solid fa-star" >4.9</i>(329)
            </div>
          </div>
        </Typography>
        
        <Typography>
        <div className='border rounded-lg pl-3 mt-1 text-white  bg-gradient-to-r from-p3 to-p31 w-28 h-7 ' >
            <p ><i class="fa-solid fa-people-group"></i> Family</p>
        </div>
        </Typography>
        <Typography >
        <ul className='flex mt-2 justify-between list-disc pl-5' >
            <li>All Meals</li>
            <li>All Transport</li>
            <li>All entry tickets</li>
        </ul>
        </Typography>
        <Typography>
        <div className='flex gap-3 mt-3  text-sm '>
        <h5 className='font-semibold'>INR 21,800</h5>
        <p className='text-xs mt-2'>Per couple</p>
        <h6 className='line-through'>INR 29,900</h6>
        <div className='border w-24 pl-2 text-green3 bg-bg '>SAVE INR 8100</div>
      </div>
        </Typography>
        <Typography>
          <div className='flex gap-8'>
          <Button className='bg-white border mt-2 border-greene'>          
              <i class="fa-solid fa-phone text-green3 w-12"></i>
          </Button>
          <Button className='text-green3 bg-green2 w-64  border mt-2'>          
            Book now
          </Button>
          </div>
    
        </Typography>
      </CardBody>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Honeymoon
