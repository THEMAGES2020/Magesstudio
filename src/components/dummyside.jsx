import React from "react";
import video from "../assets/22video.mp4";
import videobannner2 from "../assets/videobannner2.jpg";
// import Mages from "../assets/Mages.png";

function Dummyside() {
  return (
    <div
      style={{ minHeight: "fit-content", width: "100vw" }}
      className='pt-12 md:pt-0  '>
      {/* <p>YOU DREAM IT ,WE DESIGN IT</p> */}
      <div className='relative w-full  md:mt-0'>
        <p
          class='absolute top-2/4  transform	-translate-y-2/4 md:left-2/4 text-4xl p-3 text-white md:text-white md:text-6xl font-bold text-center'
          style={{
            fontWeight: 800,
            
            textTransform: "uppercase",
            zIndex: 1,
          }}>
          Design is the silent ambassador of your brand
        </p>
        {/* <img
          src={Mages}
          alt=''
          className='w-40 h-40 absolute hidden md:block  mt-4  md:absolute top-2/3 md:top-2/4 transform	-translate-y-2/4 animate-pulse left-1/3  md:left-40'
          style={{ zIndex: 1, filter: "brightness(1.2)" }}
        />
        <img
          src={Mages}
          alt=''
          className='w-40 h-40 absolute hidden   mt-4  md:absolute top-2/3 md:top-2/4 transform	-translate-y-2/4 animate-pulse left-20'
          style={{ zIndex: 1, filter: "brightness(1.2)" }}
        /> */}
        <video
          src={video}
          autoPlay
          loop
          muted
          className='relative  h-screen    w-full'
          style={{
            backgroundImage: videobannner2,
            objectFit: "cover",
            borderBottom: "25%",
            top: "50%",
            filter: "brightness(0.5)",
            borderBottomRightRadius: "1%",
            borderBottomLeftRadius: "1%",

            //   transform: "translateY(-50%)",
          }}></video>
       
         <svg
          fill='white'
          width='100%'
          className=' absolute  hidden md:block'
          style={{ top: "-1%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>   <svg
          fill='white'
          width='100%'
          className=' absolute   md:hidden'
          style={{ top: "0%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          width='100%'
          className=' absolute   md:hidden'
          style={{ top: "-1%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>  <svg
          fill='white'
          width='100%'
          className=' absolute   md:hidden'
          style={{ top: "0.1%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <div className="w-full h-14 bg-white absolute md:hidden"          style={{  top: "96.9%" }}
></div>

        <svg
          fill='white'
          width='100%'
          className=' absolute   md:hidden'
          style={{ transform: "rotate(180deg)", top: "95%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg> <svg
          fill='white'
          width='100%'
          className=' absolute   md:hidden'
          style={{ transform: "rotate(180deg)", top: "96%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          width='100%'
          className=' absolute   md:hidden'
          style={{ transform: "rotate(180deg)", top: "95.5%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          width='100%'
          className=' absolute   sm:hidden'
          style={{ transform: "rotate(180deg)", top: "96.5%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>  <svg
          fill='white'
          width='100%'
          className=' absolute   sm:hidden'
          style={{ transform: "rotate(180deg)", top: "97%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg> <svg
          fill='white'
          width='100%'
          className=' absolute   sm:hidden'
          style={{ transform: "rotate(180deg)", top: "98%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          width='100%'
          className=' absolute   sm:hidden'
          style={{ transform: "rotate(180deg)", top: "97.5%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          width='100%'
          className=' absolute   hidden md:block'
          style={{ transform: "rotate(180deg)", top: "96%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          width='100%'
          className=' absolute   hidden lg:block'
          style={{ transform: "rotate(180deg)", top: "94%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>  <svg
          fill='white'
          width='100%'
          className=' absolute   hidden lg:block'
          style={{ transform: "rotate(180deg)", top: "92%" }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
      </div>
    </div>
  );
}

export default Dummyside;
