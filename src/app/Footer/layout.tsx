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
    <div className='bg-black dark:bg-[#061127] lg:dark:border dark:border-t-white'>
    <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className='w-full md:w-65 lg:w-65 h-auto p-0   flex flex-col justify-evenly'>
            <Image src={logo} alt='...' className=''  />
        </div>
        
          <p className='font-mono text-white m-auto text-lg hover:text-[#68685f] cursor-pointer decoration-[#ba181b] text-base  font-mono text-white text-lg'>+91-8860611200</p>
    </div>
    </div>
  )
}
