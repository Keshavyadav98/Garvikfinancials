'use client'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import logo from '../../Images/image-removebg-preview.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='bg-black dark:bg-[#061127] lg:dark:border dark:border-t-white p-5 mt-5'>
    <div className='flex flex-col md:flex-row lg:flex-row justify-evenly py-10'>
        <div className='w-full md:w-65 lg:w-65 h-auto p-0   flex flex-col justify-evenly'>
            <Image src={logo} alt='...' className=''  />
        </div>
        <div className='w-full md:w-60 lg:w-50 flex flex-col justify-evenly  text-center'>
            <h1 className='text-[#ffee32] sm:text-xl font-bold  text-xl'>Find Us</h1>
            <p className='text-white sm:text-xl font-thin text-lg '>Garvik Financials</p>
            <p className='text-white sm:text-xl font-thin  '>Address</p>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 flex flex-col justify-between'>
            <h1 className='text-[#ffee32] sm:text-xl font-bold  text-xl text-center'>Connect With Us</h1>
            <div className='flex justify-evenly lg:justify-between '>
            <CiFacebook className='text-white sm:text-xl' />
            <FaTwitter className='text-white sm:text-xl' />
            <FaGoogle className='text-white sm:text-xl' />
            <FaLinkedin className='text-white sm:text-xl' />
            <ImYoutube2 className='text-white sm:text-xl' />
            <FaSquareInstagram className='text-white sm:text-xl' />
            </div>
            {/* <p className='text-white sm:text-xl font-thin text-lg text-center'>Brands Door</p> */}
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 '>
            <h1 className='text-[#ffee32] sm:text-xl font-bold  text-xl text-center'>Welcome</h1>
        </div>
    </div>
    </div>
  )
}
