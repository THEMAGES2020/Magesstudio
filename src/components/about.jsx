import React from "react";
import brand from "../assets/giphy(7).gif";
import designsolutions from "../assets/giphy.gif";
import "../App.css";

function About() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className='flex flex-col justify-evenly items-center  relative'>
      <h1
        className='text-center text-4xl font-bold mt-16  md:mt-32 mb-16 xl:mx-4  text-green-300 xl:text-6xl'
        style={{ color: "#4a4a4a", fontWeight: 900 }}>
        <strong>WHAT WE DO </strong>
      </h1>

      <div className='flex-row md:flex justify-center  '>
        {/* <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='block2 p-4 md:m-2   mb-16 md:px-2 md:py-0 md:mt-0   content-center shadow-xl hover:shadow-2xl  border-4 border-white md:border-gray-100 
          hover:border-blue-400 ease-in duration-800 hover:translate-x-4  w-5/6 m-auto md:w-5/12 lg:w-1/3'> */}
           <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='block2 p-4 md:m-2   mb-16 md:px-2 md:py-0 md:mt-0  content-center shadow-2xl hover:shadow-xl border-4 border-gray-1g
          00 md:border-gray-100 hover:border-blue-400 ease-in duration-200 hover:translate-x-4 w-5/6 m-auto md:w-5/12 lg:w-1/3'>
         
             <img
            
            alt='imger'
            src={brand}
            style={{ objectFit: "contain" }}
            className='w-full h-2/5 mt-2'
          />
          <div className=' md:mx-4 md:mt-12'>
            <p
              className='font-bold text-4xl mt-3 md:text-5xl px-8  md:px-4 
             xl:text-gray-500'
              style={{
                color: "#4a4a4a",
                fontFamily: "Poppins",
                fontWeight: 700,
              }}>
              BRAND STRATEGY
            </p>
            <p
              style={{
                color: "#747474",
                lineHeight: 1.78,

                fontFamily: "Poppins",
                fontWeight: 300,
              }}
              className='p-2  px-8 md:px-5 text-xl md:text-xl lg:text-2xl  lg:mt-3'>
              <span className='about__hover2'>
                Let your brand's unique voice shine through and work it's magic!
              </span>{" "}
              <span className='about__hovershow2'>
                Rest assured that our band of professionals possess the refined
                skill set required to make your ideas stand out from the rest.{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='block1 p-4 md:m-2   mb-16 md:px-2 md:py-0 md:mt-0  content-center shadow-2xl hover:shadow-xl border-4 border-gray-1g
          00 md:border-gray-100 hover:border-blue-400 ease-in duration-200 hover:translate-x-4 w-5/6 m-auto md:w-5/12 lg:w-1/3'>
          {/* <video
            autoPlay
            muted
            loop
            alt='imger'
            src={designsolutions}
            style={{ objectFit: "cover" }}
            className='h-2/5 w-full mt-2'
          /> */}
          <img
            src={designsolutions}
            alt='imger'
            style={{ objectFit: "contain" }}
            className='h-2/5 w-full mt-'
          />
          <div className=' md:mx-4 md:mt-12'>
            <p
              className='font-bold text-4xl mt-3 md:text-5xl px-8  md:px-4 
             xl:text-gray-500'
              style={{
                color: "#4a4a4a",
                fontFamily: "Poppins",
                fontWeight: 700,
              }}>
              DESIGN SOLUTIONS
            </p>
            <p
              style={{
                color: "#747474",
                lineHeight: 1.78,
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
              className='p-2 text-xl px-8 md:px-5 md:text-lg lg:text-2xl  lg:mt-3'>
              <span className='about__hover'>
                Overcome every glitch on the way with techies like us on your
                side!
              </span>{" "}
              <span className='about__hovershow'>
                Our creative minds unite to churn out designs that are the
                perfect amalgamation of class and allure leaving our clients
                wanting more.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
