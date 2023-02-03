"use client";
import { Inter } from "@next/font/google";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import line from "../public/img/line.png";
import Link from "next/link";
import AOS from "aos";
import { MdOutlineSmartDisplay } from "react-icons/md";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      once: true,
    });
  }, []);
  return (
    <section className="pt-5 md:pt-20">
      <div className="home_banner realtive">
        <div className="relative px-5 pt-14 lg:px-24 ">
          <div className="flex">
            <div className="basis-full md:basis-[70%] lg:basis-[55%]">
              <h2 className="leading-[3rem]">
                The Best Custom Automotive Shop In Las Vegas
              </h2>
              <p className="py-7 text-base lg:text-lg text-white opacity-100">
                Dipped Auto Works specializes in full-car transformations
                including vehicle wraps, window tinting, ceramic coating, and
                more!
              </p>
              <div className="btn_group mt-1 gap-4 flex">
                <button className="btn px-12 py-2 btn_primary">Call Us</button>
                <button className="btn flex px-2 py-2 gap-2 btn_secondary">
                  <MdOutlineSmartDisplay /> Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] top-[50%] sm:top-[49%] lg:top-[88%] left-[40%] absolute bg-[#4ffef3] h-1"></div>
      </div>
      <div className="px-5 mt-0 md:mt-8 lg:mt-[2rem] lg:px-24">
        <div className="flex py-5 pt-[1rem] sm:pt-1 md:justify-end gap-5 items-start">
          <div>
            <h3>Full Car Transform</h3>
            <Link href="/">Learn more...</Link>
          </div>
          <div className="flex mt-2 items-center gap-3">
            <IoIosArrowBack className="text-xl" />
            <IoIosArrowForward className="text-xl" />
          </div>
        </div>
      </div>
      <div>
        <Image src={line} alt="line" />
      </div>
      {/* services slider */}
      <div className=" px-5 lg:px-24">
        <div className="services_slider_title">
          <h5>SERVICES</h5>
        </div>
        <div className="grid gap-4 md:flex justify-between md:pt-10">
          <h3 className="basis-[60%]">
            EXCEPTIONAL QUALITY COMBINED WITH QUICK & AFFORDABLE SERVICES.
          </h3>
          <p className="basis-[40%] text-base lg:text-lg">
            Dipped Auto Works not only provides Las Vegas with the best car
            wraps but we also provide superior window tinting, collision repair,
            ceramic coating and much more! We also provide inexpensive pricing
            without compromising our high quality of service. As we continue to
            increase in demand and earn rave customer reviews, we would love for
            you to join in our journey to earning the position as the best place
            in Las Vegas to customize your vehicle.
          </p>
        </div>
      </div>
      {/* slider here */}

      <div className="px-5 lg:px-52">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <h1 className="text-5xl md:text-8xl text-[#4FFEF3]">01</h1>
            <h3 className="text-2xl  md:text-3xl">VEHICLE WRAP</h3>
          </div>

          <div className="py-2 md:mt-20">
            <p className="text-base lg:text-lg">
              Praesent varius est nisl, vel mollis massa malesuada non. Aenean
              nec diam ante. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <button className="btn px-4 py-2 mt-5 btn_secondary text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* ===== SLIDER 2 ===== */}
      <div className="casuser_container flex relative items-center">
        <div className="grid overflow-hidden px-5 md:px-0  gap-5 grid-cols-1 lg:px-24 md:grid-cols-2">
          <div>
            <h3>OUR GALLERY</h3>
            <p className="py-5 text-base lg:text-lg">
              Praesent varius est nisl, vel mollis massa malesuada non. Aenean
              nec diam ante. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <button className="btn px-5 py-2  btn_primary">Show All</button>
          </div>
          {/* effective slider */}
        </div>
      </div>
      {/* :::::::::=== Shape Line ======::::::::: */}

      {/* Testimonial */}
      <section id="testimonial">{/* <Testimonial /> */}</section>
    </section>
  );
}
