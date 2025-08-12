import Image from "next/image";
import img1 from '../Images/about-4-1.png'
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img2 from '../Images/video-bg-1-1.png'


export default function Home() {

  const paymentCard = [
    {icon:'',title:'Safe and Secure Payments',description:'Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.'},
    {icon:'',title:'Quick Payments Process',description:'Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.'},
    {icon:'',title:'No Prepayment Charges',description:'Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.'}
  ]
  return (
    <>
    <div className="">
     <div className="bg-[url(../Images/slider-1-1.png)] bg-center h-[55vw]">
      <div className="cols-lg-7">
        <p>Easy & simple</p>
      </div>
     </div>

     <div className="pt-30">
      <div className="flex justify-around">
        
        <div className="w-[45vw]">
          <p>|| About Company ||</p>
          <h1 className="py-3 text-4xl font-bold">Personal loans to fulfill your dreams</h1>
          <div>
            <div className="flex justify-between py-10">
              <div className="w-12 h-10 rounded-full relative bg-gray-300">
                <FaHandHoldingUsd className="absolute w-20 h-10 object cover"/>
              </div>
              <div className="px-10">
                <h1 className="">We’re in this business since 1987 and we provide the best services.</h1>
              </div>
            </div>
            <p className="pb-5">Alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.</p>
            
            <div className="flex justify-around py-5">
              <div className="p-2">
                <div className="flex ">
                  <IoMdCheckmarkCircleOutline className="text-red-500 text-2xl font-black " />
                  <h2 className="font-bold">Direct card payment</h2>
                </div>
                  <p className="text-sm py-5">Lorem ipsum dolor sit ame ed consectetur nod.</p>
              </div>
              <div className="p-2">
                <div className="flex">
                  <IoMdCheckmarkCircleOutline className="text-red-500 text-2xl font-black " />
                  <h2 className="font-bold">Pay via UPN</h2>
                </div>
                  <p className="text-sm py-5">Lorem ipsum dolor sit ame ed consectetur nod.</p>
              </div>
            </div>

            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Discover More</button>
          </div>
        </div>
        <div className="w-[40vw]">
        <Image src={img1} alt=".." />
        </div>
      </div>

      <div className="flex justify-around mt-10">
{paymentCard.map((item,index) =>{
  return(
<div key={index} className="w-[26vw] h-[30vw] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        More Details.
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
  )
})}
      </div>

     </div>

      <section className='bg-[url(../Images/video-bg-1-1-1.jpg)] z-0'>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-[url(../Images/video-bg-1-1.png] z-40">
          <div className="flex justify-around py-20">
            <div className="">
              <h1 className="text-2xl text-white">Hundreds of customers trust our company</h1>
            </div>
            <div className="">

            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}