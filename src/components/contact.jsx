import React, { useState } from "react";
import "../App.css";
import video from "../assets/firstvideo.mp4";
import videobannner from "../assets/bannernow1.jpg";
import { Link } from "react-router-dom";
// import End from "./End"
import Hamburger from "hamburger-react";
// import twilio from "twilio";
import axios from "axios";
import {db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 

function Contact() {
  const [isOpen, setOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setemail] = useState("");
  const [work, setWork] = useState("");
  const [click, setonClick] = useState(false);
  const details =
    Name + " " + Company + " " + mobile + " " + email + " " + work;
  const send = async () => {
    setonClick(!onclick)
    // await addDoc(collection(db, 'notes'), coin);

    try{
      const docref=await addDoc(collection(db,"messages"),{
Name,Company,mobile,email,work
      })
      console.log(docref)
    }

 catch (e) {
  console.error("Error adding document: ", e);
}

    await axios
      .post(
        "https://magsqwertyui.herokuapp.com/api/messages",
        { to: "+916238023468", body: details },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setMobile("");
        setWork("");
        setCompany("");
        setemail("");
        setName("");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className='relative  pb-36'>
      <div
        className='flex justify-between items-center absolute z-10 w-full'
        style={{ width: "100%", zIndex: 1000 }}>
        <div
          style={{ display: !isOpen ? "none" : "block" }}
          className='bg-gray-800 absolute top-0 w-full pb-16 '>
          <p
            className='text-blue-300 p-4 w-4/5 text-3xl'
            style={{
              fontFamily: "poppins",
              color: "#44b2e5",
              fontWeight: 700,
            }}>
            Mages
          </p>

          <Link to='/'>
            {" "}
            <p className='text-white text-xl p-4 w-full  text-center'>HOME</p>
          </Link>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <Link to='/contact'>
            {" "}
            <p className='text-white p-4 w-full text-xl  text-center'>
              Contact
            </p>
          </Link>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <Link to='/blogs'>
            {" "}
            <p className='text-white p-4 w-full text-xl  text-center'>Blog</p>
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
              hello@mages.com
            </p>
          </a>
        </div>
        <div
          className='flex w-full items-center justify-between md:justify-between  m-auto '
          style={{ width: "90vw" }}>
          <Link to='/'>
            <p
              className='text-3xl p-2 md:p-8 md:px-16 '
              style={{
                fontFamily: "poppins",
                color: "#44b2e5",
                fontWeight: 700,
              }}>
              Mages<span className='text-green-300'></span>
            </p>
          </Link>
          <div style={{ float: "right" }} className='md:hidden text-blue-300 '>
            {" "}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className=' p-8 px-12 hidden lg:flex group'>
          <Link to='/'>
            {" "}
            <p
              className='text-base font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins", textTransform: "uppercase" }}>
              Home{" "}
            </p>
          </Link>
          <Link to='/contact'>
            {" "}
            <p
              className='text-base font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins", textTransform: "uppercase" }}>
              Contact
            </p>
          </Link>{" "}
          <Link to='/blogs'>
            {" "}
            <p
              className='text-base font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins", textTransform: "uppercase" }}>
              Blog
            </p>
          </Link>
        </div>
      </div>

      <div className='absolute top-0 ' style={{ zIndex: -1 }}>
        <video
          src={video}
          autoPlay
          loop
          muted
          className='w-full h-full '
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "90vh",

            opacity: 1,
            filter: "brightness(0.4)",

            backgroundImage: `url(${videobannner})`,
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
      </div>
     

      <div
        className=' mb-48 p-2 py-6 absolute  w-full  top-2/4  '
        id='new'
        style={{ zIndex: 100 }}>
        <div
          className='flex flex-col lg:flex-row justify-between m-auto  items-center'
          style={{ width: "90vw" }}>
          <p
            style={{ fontWeight: 800, color: "#44b2e5  " }}
            className='text-5xl md:text-5xl  mt-10 mb-8 xl:text-6xl '>
            <span className='text-2xl text-white'> START A </span>
            <br />
            NEW PROJECT ?
          </p>
          <div className='m-2  flex flex-col items-start md:items-end '>
            <span className='text-xl font-medium text-white hover:text-white flex'>
              If you don’t tell us, we’ll never know.
            </span>
            <a href='https://wa.me/+916238023468'>
              <span
                className=' text-xl font-bold  text-white hover:text-blue-400 ease-in duration-150  my-4 flex '
                style={{ fontFamily: "Poppins", fontWeight: 400 }}>
                <svg
                  className='w-8 h-8 mx-2 md:mx-3  text-blue-400'
                  fill='currentcolor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 49.89 50.11'>
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    class='a'
                    d='M42.62,7.28a24.85,24.85,0,0,0-39.1,30L0,50.11l13.17-3.45a24.78,24.78,0,0,0,11.87,3h0A24.84,24.84,0,0,0,42.62,7.28M25.05,45.49h0a20.63,20.63,0,0,1-10.51-2.88l-.75-.44L6,44.21,8.05,36.6l-.49-.78a20.65,20.65,0,1,1,17.49,9.67M36.37,30c-.62-.31-3.67-1.81-4.24-2s-1-.31-1.39.31-1.61,2-2,2.44-.72.46-1.34.15a16.8,16.8,0,0,1-5-3.08A18.51,18.51,0,0,1,19,23.53c-.36-.62,0-1,.27-1.26s.63-.73.94-1.09a4.21,4.21,0,0,0,.62-1,1.13,1.13,0,0,0-.06-1.08c-.15-.31-1.39-3.37-1.91-4.61s-1-1-1.4-1.06-.77,0-1.19,0a2.29,2.29,0,0,0-1.65.78,7,7,0,0,0-2.17,5.18c0,3.05,2.22,6,2.53,6.42s4.38,6.68,10.6,9.36a35.12,35.12,0,0,0,3.54,1.31,8.55,8.55,0,0,0,3.91.25c1.2-.18,3.67-1.5,4.19-2.95a5.11,5.11,0,0,0,.36-2.95c-.15-.26-.56-.42-1.19-.73'></path>
                </svg>{" "}
                Click{" "}
                <p className='font-semibold  mx-2 text-blue-400'> here </p> to
                WhatsApp us{" "}
              </span>
            </a>
            <a href='mailto:Hello@mages.studio'>
              <span
                className=' text-xl font-semibold text-white hover:text-blue-400 ease-in duration-150 text-right flex'
                style={{ fontFamily: "Poppins" }}>
                <svg
                  className='w-8 h-8 mx-2 md:mx-3 text-blue-400'
                  fill='currentcolor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 56.01 40.01'>
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    class='a'
                    d='M54,0H2A2,2,0,0,0,0,2V38a2,2,0,0,0,2,2H54a2,2,0,0,0,2-2V2A2,2,0,0,0,54,0ZM50.73,4,28,21.48,5.28,4ZM52,36H4V8.06L26.79,25.59a2,2,0,0,0,2.44,0L52,8.06Z'></path>
                </svg>
                hello@mages.com
              </span>
            </a>
          </div>
        </div>
        <div
          className=' w-full border-2 border-blue-100 m-auto shadow-lg px-4 py-10 bg-white md:mt-16'
          style={{ width: "90vw" }}>
          <p
            className=' text-xl md:text-2xl m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Your Name
          </p>
          <input
            required
            value={Name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name Surname'
            className='border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-xl  ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className=' text-xl  md:text-2xl m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Company/Organisation
          </p>
          <input
            required
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
            type='text'
            placeholder='Company'
            className='border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-xl  ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className='md:text-xl text-lg  md:textm-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Your Email
          </p>
          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type='text'
            placeholder='youremail@gmail.com'
            className='border-2 hover:border-blue-300  text-blue-500 hover:shadow-xl  text-xl  ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className='md:text-xl text-lg  md:text m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Phone Number
          </p>
          <input
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type='number'
            placeholder='9995559992'
            className='border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-xl  ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className='md:text-xl text-lg md:text m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Tell us a bit about your project
          </p>
          <input
            required
            value={work}
            onChange={(e) => setWork(e.target.value)}
            type='text'
            placeholder='Details are like good news. The more you share,the better'
            className='border-2 hover:border-blue-300 hover:shadow-xl text-blue-500  text-xl  ease-in duration-300 w-5/6 p-4 h-40 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />

          {!click ? (
            <p
              onClick={() => send()}
              className='reachout border-2 flex justify-center items-center mt-8 md:mx-8  font-bold border-blue-300 md:p-4 h-16  w-4/5 md:w-2/5 m-4 text-green-300 text-xl  hover:text-white ease-linear duration-300'>
              Send Message &nbsp;{" "}
              <svg
                viewBox='0 0 38.62 17.59'
                xmlns='http://www.w3.org/2000/svg'
                width='10%'
                height='50%'
                fill='currentcolor'>
                <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
              </svg>{" "}
            </p>
          ) : (
            <p className="text-center text-blue-400 p-4 text-2xl">
              {" "}
              {/* <svg
                viewBox='0 0 38.62 17.59'
                xmlns='http://www.w3.org/2000/svg'
                width='10%'
                height='50%'
                fill='currentcolor'>
                <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
              </svg> */}
              We got your message and we will reach out to you soon
            </p>
          )}
        </div>
      </div>
      {/* <p className='absolute text-gray-500  top-full'>Mages</p> */}
    </div>
  );
}

export default Contact;
