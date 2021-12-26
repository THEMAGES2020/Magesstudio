import React, { useState } from "react";
import video from "../assets/firstvideo.mp4";
import videobannner from "../assets/bannernow1.jpg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import "../App.css";
function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className='relative '
      style={{
        height: "100vh",
        borderBottomRightRadius: "7%",
        borderBottomLeftRadius: "7%",
        overflow: "hidden",
      }}>
      <div
        className='flex justify-between absolute z-10 w-full '
        style={{ width: "100%" }}>
        <div
          style={{ display: !isOpen ? "none" : "block" }}
          className='bg-gray-800 absolute w-full pb-16 h-76'>
          <p
            className='text-blue-300 p-4 w-4/5 text-3xl'
            style={{
              fontFamily: "Poppins",
              color: "#44b2e5",
              fontWeight: 700,
            }}>
            Mages
          </p>

          <p className='text-white text-xl p-4 w-full  text-center'>HOME</p>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <Link to='/contact'>
            {" "}
            <p className='text-white p-4 w-full text-xl  text-center'>
              CONTACT
            </p>
          </Link>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <Link to='/blogs'>
            {" "}
            <p className='text-white p-4 w-full text-xl  text-center'>BLOG</p>
          </Link>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <a href='https://wa.me/+916238023468'>
            <p className='text-white p-4 w-full text-xl text-center'>
              Click <span style={{ color: "#44b2e5" }}> here </span>to Whatsapp
              us
            </p>
          </a>
          <a href='mailto:Hello@mages.studio'>
            {" "}
            <p className='text-white p-4 w-full text-xl text-center'>
              hello@mages.studio
            </p>
          </a>
        </div>
        <div
          className='flex items-center  justify-between '
          style={{ width: "100%" }}>
          <p
            className='text-3xl p-4 md:p-8 md:px-20   '
            style={{
              fontFamily: "poppins",
              color: "#44b2e5",
              fontWeight: 700,
            }}>
            Mages<span className='text-green-300'></span>
          </p>
          <div
            style={{ float: "right" }}
            className='md:hidden text-blue-300 mr-2'>
            {" "}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className=' p-8 px-12 hidden lg:flex group '>
          <Link to='/'>
            {" "}
            <p
              className='text-base font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins" }}>
              HOME{" "}
            </p>
          </Link>
          <Link to='/contact'>
            {" "}
            <p
              className='text-base font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins" }}>
              CONTACT
            </p>
          </Link>{" "}
          <Link to='/blogs'>
            {" "}
            <p
              className='text-base font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins" }}>
              BLOG
            </p>
          </Link>
        </div>
      </div>
      {/* // <div className='fixed ' style={{ zIndex:1000,top:"85%",left:"90%"}}><Modal/></div> */}

      <div className='absolute top-0 ' style={{ height: "100%" }}>
        <video
          src={video}
          autoPlay
          loop
          muted
          className='w-full h-full '
          style={{
            objectFit: "cover",
            width: "100vw",
            opacity: 1,
            filter: "brightness(0.5)",
            borderBottomRightRadius: "7%",
            borderBottomLeftRadius: "7%",
            backgroundImage: `url(${videobannner})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className='banner__text__div  top-2/4 transform -translate-y-2/4	 p-4 md:px-20  md:py-24  absolute text-5xl md:text-7xl '
          style={{ fontFamily: "Poppins", fontWeight: 800 }}>
          <h1
            className='text-white font-black '
            // style={{ fontFamily: "Poppins sans-serif" }}
          >
            WE{" "}
          </h1>
          <span className='text-white'>DESIGN </span>
          <h1 style={{ color: "#44b2e5" }}>TO ELAVATE.</h1>
          <span
            className='reachout text-2xl p-2 py-4 flex  justify-center items-center mt-4 ease-in duration-300	'
            style={{
              border: " 1px solid #44b2e5 ",
              width: "fit-content",
            }}>
            <Link to='/contact'>
              {" "}
              <p className='mr-2' style={{ fontFamily: "Poppins" }}>
                {" "}
                REACH OUT TO US{" "}
              </p>
            </Link>
            <svg
              viewBox='0 0 38.62 17.59'
              xmlns='http://www.w3.org/2000/svg'
              width='10%'
              height='10%'
              fill='currentcolor'>
              <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
            </svg>
          </span>
        </div>
        {/* <p>hi</p> */}
        <svg
          fill='white'
          className='absolute '
          style={{ height: "fit-content", top: "92%" }}
          width='100%'
          height='fit-content'
          viewBox='0 0 1289 186.38'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='m644.5 45.86c-258.99 0-490.56-17.86-644.5-45.86v186.38h1289v-186.38c-153.94 28-385.51 45.86-644.5 45.86z'></path>
        </svg>
        <svg
          fill='white'
          className=' absolute md:hidden'
          style={{ height: "fit-content", top: "95%" }}
          width='100%'
          height='fit-content'
          viewBox='0 0 1289 186.38'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='m644.5 45.86c-258.99 0-490.56-17.86-644.5-45.86v186.38h1289v-186.38c-153.94 28-385.51 45.86-644.5 45.86z'></path>
        </svg>
      </div>
    </div>
  );
}

export default Banner;
