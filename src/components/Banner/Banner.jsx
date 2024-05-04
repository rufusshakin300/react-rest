import React from "react";
import BiryaniImg from "../../assets/image 38 (1).png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
 
  return (
    <>
      <div className="min-h-[550px] my-10 gap-4">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[80%] h-[500px] rounded-xl sm:w-full mx-auto relative drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] p-2 border-none"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Traditional Pan-Asian Cuisine
                   With a Modern Twist
                </h1>
                <p className="text-sm text-gray-950 tracking-wide  leading-7 line-clamp-10 gap-2 dark:text-gray-300">
                  Our Pan Asian Cuisine is a fusion of inspiration from the east. We strive to bring traditional dishes with a modern flair.
                  <br />
                  
                  Our ever evolving menu, you will find dishes that are nuanced in nostalgia from various parts of Asia
                  <br />
                  
                  Come enjoy a sensory experience where we assimilate various cuisines from the other side of the world, showcasing some of your all time favorites.
                  
                  <br />
                  At The Rose, we enhance our dishes using elements of love and passion!
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
