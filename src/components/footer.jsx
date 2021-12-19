import React from "react";
import "../App.css";
import {Link} from 'react-router-dom';
function footer() {
  return (
    <div
      className=' flex flex-col md:flex-row justify-between  md:p-16 items-start   w-9/12 m-auto  md:w-full'
      style={{ minHeight: "fit-content" }}>
      <div>
        <p
          className=' text-2xl md:text-4xl lg:text-5xl  font-extrabold text-center'
          style={{ color: "#4a4a4a" }}>
         Ready to set a trend ?
        </p>
        <p
          className='mt-6 text-xl text-center md:text-left lg:text-2xl'
          style={{ color: "#B0b0b0" ,fontFamily:"sans-serif"}}>
          {" "}
         Then drop us a note. Send us a brief 
          <br className="hidden  md:block"/> Lets chat about how we can create
          <br /> something unforgettable together
        </p>

        <span className='reachout m-auto md:m-0 flex my-4 md:mt-20 p-4 border-2 border-blue-300  w-64 justify-center items-center group  hover:text-white ease-in-out duration-300 '>
          <Link to='/contact'>
            <p
              className='mr-2  font-bold   text-blue-500 group-hover:text-white'
              style={{ color: "" }}>
              REACH OUT TO US
            </p>
          </Link>
          <svg
            className='text-blue-300 group-hover:text-white'
            viewBox='0 0 38.62 17.59'
            xmlns='http://www.w3.org/2000/svg'
            width='10%'
            height='10%'
            fill='currentcolor'>
            <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
          </svg>{" "}
        </span>
      </div>
      {/* <div id="w-node-d3bfaa92-2268-19e7-7a7b-d1572f2b7894-34f1a05a" class="footer-txt-w"><h3 class="is--lc">Like what you see?</h3><div class="b1--left-text-w"><p class="b1 is--centred is--100">Then drop us a note. Send us a brief. <br/>Let’s chat about how we can create <br/>something unforgettable together.</p></div></div> */}

      <div className=" font-semibold   "  style={{fontFamily:"sans-serif "}}>
        <a href='https://wa.me/+916238023468'>
          <p className='text-xl md:text-2xl text-center m-2 md:m-0  hover:text-blue-400 text-gray-400'>
            Click{" "}
            <span className='font-bold text-blue-500' >
              here
            </span>{" "}
            to Whatsapp us
          </p>
        </a>
        <a href='mailto:Hello@mages.studio'>
          {" "}
          <p
            className=' mt-8 text-lg text-center  md:text-right'
            style={{ color: "#B0b0b0" }}>
            {" "}
            Hello@mages.studio
          </p>
        </a>
        <a href='mailto:themages2020@gmail.com' className="mt-8">
          {" "}
          <p  className="text-center  md:text-right text-2xl mt-8 text-gray-400 hover:text-blue-400 ">Job & Internship Enquiries</p>
          <p
            className=' mt-4 text-lg text-center  md:text-right'
            style={{ color: "#B0b0b0",visibility:"hidden" }}>
            {" "}
            Jobs@mages.studio
          </p>
        </a>
      
           
      
        <div className=' items-center m-2 hidden md:flex' style={{float:"right"}}>
          <a href="https://www.instagram.com">
            <img alt=""
              src='  https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg'
              className='w-16 sociallogo1'
             
            />
          </a>
          <a href='https://www.behance.net/Mages'>
            {" "}
            <svg
              
             
              className='text-black w-10 h-12 sociallogo3'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 21.16 13.4'>
              <defs>
                <style></style>
              </defs>
              <path
                class='a'
                d='M8.54,6a2.28,2.28,0,0,0,2-2.5C10.54,1.15,8.9,0,6.83,0H0V13.12H6.83S11,13.25,11,9.25C11,9.25,11.18,6,8.54,6ZM6.34,2.33h.49s.93,0,.93,1.37S7.21,5.26,6.59,5.26H3V2.33Zm.29,8.46H3V7.28H6.83s1.38,0,1.38,1.8c0,1.54-1,1.7-1.58,1.71Zm9.92-7.45c-5,0-5,5-5,5a4.66,4.66,0,0,0,5,5S21,13.65,21,9.91h-2.3s.07,1.41-2.11,1.41A2.14,2.14,0,0,1,14.32,9h6.8s.75-5.69-4.57-5.69ZM14.3,7.28a2.34,2.34,0,0,1,2.31-2,2,2,0,0,1,2,2Zm4.85-4.89H13.73V.77h5.42V2.39Z'></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com">
            <img alt=""
              src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png'
              className='w-10 h-10  sociallogo2 '
             
            />
          </a>

          <div className="sociallogo">
          <a href="https://medium.com">
            <img alt=""
            
              src=' https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png'
              className='w-10'
             
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
