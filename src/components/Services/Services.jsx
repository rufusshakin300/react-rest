import React from "react";


const Services = () => {
  return (
    <>
      <span id="gallery"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-10 max-w-[400px] mx-auto">
            {/* <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Gallery
            </p> */}
            <h1 className="text-3xl font-bold">Gallery</h1>
            <p className="text-xl text-gray-400">
              You eat with your eyes first, and we promise our food tastes just as amazing as it looks!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1080px] mx-auto mb-10 "
          ><img src="./Bento.png" alt="gallery img" /></div>
        </div>
      </div>
    </>
  );
};

export default Services;
