import Image from "next/image";
import img1 from "../Images/about-4-1.png";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img2 from "../Images/video-bg-1-1.png";
import Loan from "./Loan/layout";

export default function Home() {
  const paymentCard = [
    {
      icon: "",
      title: "Safe and Secure Payments",
      description:
        "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
    },
    {
      icon: "",
      title: "Quick Payments Process",
      description:
        "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
    },
    {
      icon: "",
      title: "No Prepayment Charges",
      description:
        "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
    },
  ];

  const serviceProvide = [
    {
      icon: "",
      title: "Mortgage Loan",
      description:
        "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
    },
    {
      icon: "",
      title: "Business Loan",
      description:
        "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
    },
    {
      icon: "",
      title: "Project Loan",
      description:
        "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
    },
  ]

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="bg-[url('../Images/slider-1-1.png')] bg-center bg-cover h-[55vw]">
          <div className="lg:col-span-7">
            <p className="text-white text-xl p-10">Easy & simple</p>
          </div>
        </div>

        {/* About Company Section */}
        <div className="pt-30">
          <div className="flex justify-around flex-col lg:flex-row">
            <div className="w-full m-5 lg:w-[45vw]">
              <p className="text-center lg:text-start">|| About Company ||</p>
              <h1 className="py-3 text-4xl font-bold">
                Personal loans to fulfill your dreams
              </h1>

              <div>
                <div className="flex items-center py-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-300">
                    <FaHandHoldingUsd className="text-xl text-red-600" />
                  </div>
                  <div className="px-6">
                    <h1>
                      We are a boutique loan consultancy where we &lsquo;bank&rsquo; on 20+ years of experience.
                    </h1>
                  </div>
                </div>

                <p className="pb-5">
                  Our associates understand clients&rsquo; requirements and &lsquo;draw&rsquo; from
                  our network of industry leaders to present cases effectively
                  and deliver the desired results in a time-bound manner.
                </p>

                <div className="flex flex-col lg:flex-row justify-around py-5">
                  <div className="p-2">
                    <div className="flex items-center gap-2">
                      <IoMdCheckmarkCircleOutline className="text-red-500 text-2xl font-black" />
                      <h2 className="font-bold">Direct card payment</h2>
                    </div>
                    <p className="text-sm py-3">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>

                  <div className="p-2">
                    <div className="flex items-center gap-2">
                      <IoMdCheckmarkCircleOutline className="text-red-500 text-2xl font-black" />
                      <h2 className="font-bold">Pay via UPN</h2>
                    </div>
                    <p className="text-sm py-3">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 
                  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Discover More
                </button>
              </div>
            </div>

            <div className="w-full m-0 lg:m-5 lg:w-[40vw]">
              <Image src={img1} alt="About Company" />
            </div>
          </div>

          {/* Payment Cards */}
          <div className="flex justify-around flex-col lg:flex-row mt-5 relative z-10 top-0 md:top-20">
            {paymentCard.map((item, index) => (
              <div
                key={index}
                className="w-full m-0 lg:m-5 lg:w-[30vw] p-6 bg-white border border-gray-200 shadow-sm"
              >
                <svg
                  className="w-7 h-7 my-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2Z" />
                </svg>
                <h5 className="my-5 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h5>
                <p className="my-5 text-gray-500">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  More Details
                  <svg
                    className="w-3 h-3 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Video Background Section */}
        <section className="relative z-0">
          <div className="bg-[url('../Images/video-bg-1-1-1.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
              <Image src={img2} alt="Video Background" />
              <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
                <h1 className="text-4xl font-bold text-white">
                  Hundreds of customers trust our company
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Offering Section */}
        <section className=" text-center">
          <h3 className="text-red-500">|| WHAT WE&apos;RE OFFERING ||</h3>
          <h1 className="font-bold text-3xl">
            We provide best service <br /> for your loans
          </h1><div className="flex justify-around flex-col lg:flex-row mt-5  z-10 top-20">
            {serviceProvide.map((item, index) => (
              <div
                key={index}
                className="w-full m-5 lg:w-[30vw] p-6 bg-white border border-gray-200 shadow-sm"
              >
                <h5 className="my-5 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h5>
                <p className="my-5 text-gray-500">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  More Details
                  <svg
                    className="w-3 h-3 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
      <section className="flex flex-col md:flex-row bg-gray-100 py-10">
        
        <Loan />
        <section className=" text-start md:text-center my-auto w-[100%] md:w-[50%]">
          <h3 className="text-red-500">|| CALCULATE YOUR RATE ||</h3>
          <h1 className="font-bold text-3xl mt-3">
            Struggling with business uncertainties<br /> and cashflow hurdles.
          </h1>
          <p className="font-normal my-5 mx-auto text-gray-700 text-start mt-10 ">Business uncertainties and cashflow challenges can make borrowing a complicated process. An experienced consultant can understand and present things in an effective manner to the right lending entity.</p>
        </section>
      </section>


      <section className=" text-center mt-10  mx-auto w-100% md:w-[80%] bg-[url('../Images/testi.png')]">
          <h3 className="text-red-500">|| OUR Benifits ||</h3>
          <h1 className="font-bold text-3xl mt-3">
            Which NBFC is right for your funding needs?
          </h1>
          <p className="font-normal my-5 mx-auto text-gray-700 text-start mt-10 ">
            Apart from Banks there are hundreds of NBFCs categorised as Upper and Middle Layer by the RBI. Each lending institution has its own area of expertise and the kind of transactions it favours. Presenting the right case, correctly to the right entity makes all the difference.
            </p>
        </section>
    </>
  );
}
