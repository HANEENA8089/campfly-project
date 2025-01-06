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
    <br />
    <br />
   <div className="container mx-auto px-4">
    
        <div className="flex flex-col sm:flex-row mt-16 justify-between items-center sm:px- px-4 font-bold text-xl">
          <div className="gateway-heading">Honeymoon Packages</div>
          <div>
            <a href="" className="font-normal text-sm text-green2">
              View all <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

       <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
         
          <Card className="w-full mt-5">
            <CardHeader className="relative">
              <Carousel className="rounded-xl">
                <img
                  src={image39}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
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
              <div className="absolute top-0 left-0 bg-mustard text-black text-xs px-5 py-3 rounded-br-lg">
                Member Price <br />
                Available
              </div>
              <div className="absolute top-0 right-0 px-4 py-4">
                <IconButton
                  variant="text"
                  className="bg-white rounded-full"
                >
                  <i className="fa-solid fa-share-nodes"></i>
                </IconButton>
              </div>
            </CardHeader>
            <CardBody>
              <Typography
                variant="h7"
                className="font-medium tracking-tight mb-2"
              >
                Ladakh Adventure Expedition With Turtuk Village
              </Typography>
              <Typography className="text-sm">
                <div className="flex justify-between items-center">
                  <div>5 days & 4 nights</div>
                  <div className="text-green3">
                    <i className="fa-solid fa-star"></i> 4.9 (329)
                  </div>
                </div>
              </Typography>
              <div className='border rounded-lg pl-3 mt-1 text-white bg-gradient-to-r from-p2 to-p21 w-24 h-7 ' >
              <p><i class="fa-solid fa-heart" ></i> Solo</p>
              </div>
              <ul className="flex mt-2 justify-between list-disc pl-5">
                <li>All Meals</li>
                <li>All Transport</li>
                <li>All entry tickets</li>
              </ul>
              <div className="flex  items-center gap-3 mt-3 text-sm">
                <h5 className="font-semibold">INR 21,800</h5>
                <p className="text-xs mt-1">Per couple</p>
                <h6 className="line-through">INR 29,900</h6>
                <div className="border text-green3 bg-bg px-2 py-1">
                  SAVE INR 8100
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Button className="bg-white border mt-2 border-greene">
                  <i className="fa-solid fa-phone text-green3 w-12"></i>
                </Button>
                <Button className="text-green3 bg-green2 w-64  mt-2">
                  Book now
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card className="w-full mt-5">
            <CardHeader className="relative">
              <Carousel className="rounded-xl">
                <img
                  src={image44}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
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
              <div className="absolute top-0 left-0 bg-mustard text-black text-xs px-5 py-3 rounded-br-lg">
                Member Price <br />
                Available
              </div>
              <div className="absolute top-0 right-0 px-4 py-4">
                <IconButton
                  variant="text"
                  className="bg-white rounded-full"
                >
                  <i className="fa-solid fa-share-nodes"></i>
                </IconButton>
              </div>
            </CardHeader>
            <CardBody>
              <Typography
                variant="h7"
                className="font-medium tracking-tight mb-2"
              >
                Ladakh Adventure Expedition With Turtuk Village
              </Typography>
              <Typography className="text-sm">
                <div className="flex justify-between items-center">
                  <div>5 days & 4 nights</div>
                  <div className="text-green3">
                    <i className="fa-solid fa-star"></i> 4.9 (329)
                  </div>
                </div>
              </Typography>
              <div className="border rounded-lg pl-3 mt-1 text-white bg-gradient-to-r from-purple1 to-purple2 w-36 h-7 ">
                <i className="fa-solid fa-heart"></i> Honeymoon
              </div>
              <ul className="flex mt-2 justify-between list-disc pl-5">
                <li>All Meals</li>
                <li>All Transport</li>
                <li>All entry tickets</li>
              </ul>
              <div className="flex  items-center gap-3 mt-3 text-sm">
                <h5 className="font-semibold">INR 21,800</h5>
                <p className="text-xs mt-1">Per couple</p>
                <h6 className="line-through">INR 29,900</h6>
                <div className="border text-green3 bg-bg px-2 py-1">
                  SAVE INR 8100
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Button className="bg-white border mt-2 border-greene">
                  <i className="fa-solid fa-phone text-green3 w-12"></i>
                </Button>
                <Button className="text-green3 bg-green2 w-64  mt-2">
                  Book now
                </Button>
              </div>
            </CardBody>
          </Card>

         
          <Card className="w-full mt-5">
            <CardHeader className="relative">
              <Carousel className="rounded-xl">
                <img
                  src={image43}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
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
              <div className="absolute top-0 left-0 bg-mustard text-black text-xs px-5 py-3 rounded-br-lg">
                Member Price <br />
                Available
              </div>
              <div className="absolute top-0 right-0 px-4 py-4">
                <IconButton
                  variant="text"
                  className="bg-white rounded-full"
                >
                  <i className="fa-solid fa-share-nodes"></i>
                </IconButton>
              </div>
            </CardHeader>
            <CardBody>
              <Typography
                variant="h7"
                className="font-medium tracking-tight mb-2"
              >
                Ladakh Adventure Expedition With Turtuk Village
              </Typography>
              <Typography className="text-sm">
                <div className="flex justify-between items-center">
                  <div>5 days & 4 nights</div>
                  <div className="text-green3">
                    <i className="fa-solid fa-star"></i> 4.9 (329)
                  </div>
                </div>
              </Typography>
              <div className='border rounded-lg pl-3 mt-1 text-white  bg-gradient-to-r from-p3 to-p31 w-28 h-7 ' >
              <p ><i class="fa-solid fa-people-group"></i> Family</p>
              </div>
              <ul className="flex mt-2 justify-between list-disc pl-5">
                <li>All Meals</li>
                <li>All Transport</li>
                <li>All entry tickets</li>
              </ul>
              <div className="flex  items-center gap-3 mt-3 text-sm">
                <h5 className="font-semibold">INR 21,800</h5>
                <p className="text-xs mt-1">Per couple</p>
                <h6 className="line-through">INR 29,900</h6>
                <div className="border text-green3 bg-bg px-2 py-1">
                  SAVE INR 8100
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Button className="bg-white border mt-2 border-greene">
                  <i className="fa-solid fa-phone text-green3 w-12"></i>
                </Button>
                <Button className="text-green3 bg-green2 w-64  mt-2">
                  Book now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Honeymoon
