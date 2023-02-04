"use client";
import shape from "../public/img/line_roted.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Inter } from "@next/font/google";
import Testimonial from "./component/Testimonial/Testimonial";
import { useEffect } from "react";
import { HomePageServicesSlider } from "./StaticData/services";
const inter = Inter({ subsets: ["latin"] });
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Hero } from "./component";
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
      <Hero />

      <div>
        <Image src={line} alt="line" />
      </div>
      {/* services slider */}
      <div className="mt-32 pb-10 px-5 lg:px-24">
        <div className="services_slider_title">
          <h5>SERVICES</h5>
        </div>
        <div className="grid overflow-hidden gap-4 md:flex justify-between md:pt-10">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            className="basis-[60%]"
          >
            EXCEPTIONAL QUALITY COMBINED WITH QUICK & AFFORDABLE SERVICES.
          </h3>
          <p
            data-aos="fade-left"
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
        <div className="px-5 pb-10 lg:px-52">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <h1 className="text-5xl md:text-8xl text-[#4FFEF3]">01</h1>
              <h3 className="text-2xl  md:text-3xl">VEHICLE WRAP</h3>
            </div>

            <div className="py-2 md:mt-20">
              <p className="text-base lg:text-lg">
                Praesent varius est nisl, vel mollis massa malesuada non. Aenean
                nec diam ante. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
              <button className="btn px-4 py-2 mt-5 btn_secondary text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
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
