import React, { useState } from "react";
import { motion } from 'framer-motion';
import img1 from '../../assets/image 34.png';
import img2 from '../../assets/image 39.png';
import img3 from '../../assets/image 35.png';
import img4 from '../../assets/Chair.png';
import img5 from '../../assets/image 43.png';



const Testimonial = () => {
   const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4]);

   const handleNext = () =>{
    setPositionIndexes((prevIndexes =>{
        const updatedIndexes = prevIndexes.map((prevIndex)=> (prevIndex + 1) % 5)
        return updatedIndexes

    }))
   };
   const images =[
    img1,
    img2,
    img3,
    img4,
    img5
   ]
   const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };
  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container ">
          <div className="text-center mb-1   p-2 gap-2 ">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Gallery</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          
        <div className="flex items-center rounded flex-col justify-center bg-white w-full  p-2 gap-2 mb-10 dark:bg-gray-900">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] shadow "
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "43%", position: "absolute", height: "48%" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[390px] bg-red-500 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[390px] bg-red-500 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
