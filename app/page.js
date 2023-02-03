"use client";
import shape from "../public/img/line_roted.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Inter } from "@next/font/google";
import Testimonial from "./component/Testimonial/Testimonial";
import { useEffect } from "react";
import { HomePageServicesSlider } from "./StaticData/services";
const inter = Inter({ subsets: ["latin"] });
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import line from "../public/img/line.png";
import Link from "next/link";
import AOS from "aos";
import { MdOutlineSmartDisplay } from "react-icons/md";
import "aos/dist/aos.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import requerment
import { Autoplay, FreeMode } from "swiper";
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
        <div className="relative px-5 pt-32 lg:px-32 ">
          <div className="flex overflow-hidden">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="basis-full md:basis-[70%] lg:basis-[55%]"
            >
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
      <div className="mt-32 px-5 lg:px-24">
        <div className="services_slider_title">
          <h5>SERVICES</h5>
        </div>
        <div className="grid overflow-hidden gap-4 md:flex justify-between md:pt-10">
          <h3
            data-aos="fade-left"
            data-aos-duration="2000"
            className="basis-[60%]"
          >
            EXCEPTIONAL QUALITY COMBINED WITH QUICK & AFFORDABLE SERVICES.
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="basis-[40%] text-base lg:text-lg"
          >
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

      <div className="mt-5">
        {/* slider here */}
        <Swiper
          slidesPerView={2.4}
          spaceBetween={15}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper px-5 md:px-0"
        >
          {HomePageServicesSlider?.map((service, index) => (
            <SwiperSlide className="grid gap-6" key={index}>
              <div className="feature_image">
                <Image
                  className="h-auto md:h-[388px]"
                  src={service.featureImage}
                  alt={service.serviceName}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== SLIDER 2 ===== */}
      <div className="casuser_container gallary_wrapper  relative ">
        <div className="px-5 py-10 lg:px-24">
          <div className="services_slider_title  lg:px-24">
            <h5 className="leading-[5px]">SERVICES</h5>
          </div>
        </div>
        <div className="px-5 flex flex-col md:flex-row items-center lg:px-24">
          <div className="pb-10">
            <h3>OUR GALLERY</h3>
            <p className="py-5 text-base lg:text-lg">
              Praesent varius est nisl, vel mollis massa malesuada non. Aenean
              nec diam ante. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <button className="btn px-5 py-2  btn_primary">Show All</button>
          </div>
        </div>
      </div>
      {/* :::::::::=== Shape Line ======::::::::: */}
      <div>
        <Image src={shape} />
      </div>

      <section id="testimonial">
        <Testimonial />
      </section>
    </section>
  );
}
