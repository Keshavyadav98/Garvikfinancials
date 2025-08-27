'use client'

import { useEffect, useRef, useState } from 'react'
import { BsTelephoneFill } from "react-icons/bs";



import Image from 'next/image';
import logo from '../../Images/logO.png';
import Link from 'next/link';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  AtSymbolIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  CreditCardIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PencilIcon,
  PencilSquareIcon,
  RectangleStackIcon,
  UserGroupIcon,
  VideoCameraIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'





export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const trigger = triggerRef.current;
    if (!navbar || !trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          navbar.classList.add("fixed", "z-21", "top-0", "left-0", "w-full", "shadow-lg");
        } else {
          navbar.classList.remove("fixed","z-21", "top-0", "left-0", "w-full", "shadow-lg");
        }
      },
      { threshold: 0 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <>
     <div ref={triggerRef} className="h-0"></div>
    <header  ref={navbarRef} className="bg-black" id="navbar">
      <nav aria-label="Global"  className="dark:bg-[#061127] p-3 z-10 transition-all duration-300 w-full mx-auto flex  items-center justify-between  lg:px-8">
        <div className="flex ">
          <Link href="#" className="">
            {/* <h1>Garvik Financials logo</h1> */}
            <Image src={logo} alt='...' className='' width={100} height={100} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="m-1.5   inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          <Link href="/" className=" text-base  font-mono text-white text-lg ">
            <span className='font-mono text-white text-lg  hover:text-[#68685f]   underline-animate cursor-pointer '>Home</span>
          </Link>
          <Link href="/about" className=" text-base  font-mono text-white text-lg ">
            <span className='font-mono text-white text-lg  hover:text-[#68685f]   underline-animate cursor-pointer '>About US</span>
          </Link>
          <Link href="/privacy-policy" className=" text-base  font-mono text-white text-lg ">
            <span className='font-mono text-white text-lg  hover:text-[#68685f]   underline-animate cursor-pointer '>Privacy Policy</span>
          </Link>
         

          
          <Link href="/contactUS" className="font-mono text-white text-lg hover:text-[#68685f] cursor-pointer decoration-[#ba181b] text-base  font-mono text-white text-lg">
            <span className='font-mono text-white text-lg hover:text-[#68685f]  underline-animate cursor-pointer decoration-[#ba181b]'>Contact US</span>

          </Link>
          <Link href="/joinus" className="font-mono text-white text-lg hover:text-[#68685f] cursor-pointer decoration-[#ba181b] text-base  font-mono text-white text-lg">
            <span className='font-mono text-white text-lg hover:text-[#68685f]  underline-animate cursor-pointer decoration-[#ba181b]'>Join US</span>

          </Link>
        </PopoverGroup>
        <div className=' hidden lg:flex lg:relative'>
          <BsTelephoneFill className='mx-2 mt-1' />
          <p className='font-mono text-white text-lg hover:text-[#68685f] cursor-pointer decoration-[#ba181b] text-base  font-mono text-white text-lg'>+91-8860611200</p>
        </div>
        <div className='hidden lg:block lg:relative'>
          <button type="button" className="focus:outline-none font-mono text-white text-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Request Loan</button>
        </div>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden bg-black">
        <div className="fixed inset-0 z-50 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <Link
                  href="\"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7  font-mono text-white text-lg hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="\"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7  font-mono text-white text-lg hover:bg-gray-50"
                >
                  About US
                </Link>

                <Link
                  href="\contactUS"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7  font-mono text-white text-lg hover:bg-gray-50"
                >
                  Contact US
                </Link>



              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </>
  )
}