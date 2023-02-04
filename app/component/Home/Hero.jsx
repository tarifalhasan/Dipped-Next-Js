import { MdOutlineSmartDisplay } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeroImage from "../../../public/img/hero.png";
const Hero = () => {
  return (
    <section>
      <div className="grid max-w-[1440px]  pt-20 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12">
        <div className="lg:pl-[7rem] place-self-center lg:col-span-7 relative px-5 md:px-0">
          <h2 className="leading-[4rem] text-[2rem] lg:text-[3.25rem]">
            The Best Custom Automotive Shop In Las Vegas
          </h2>
          <p className="py-7 text-base lg:text-lg text-white opacity-100">
            Dipped Auto Works specializes in full-car transformations including
            vehicle wraps, window tinting, ceramic coating, and more!
          </p>
          <div className="btn_group mt-1 gap-4 flex">
            <button className="btn px-12 py-2 btn_primary">Call Us</button>
            <button className="btn flex px-2 py-2 gap-2 btn_secondary">
              <MdOutlineSmartDisplay /> Play Video
            </button>
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 flex">
          <div>
            {" "}
            <Image className="[w-740px]" src={HeroImage} alt="mockup" />
          </div>
        </div>
      </div>
      <div className="w-[1003px] h-[5px] float-right bg-[#4ff]"></div>
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
    </section>
  );
};

export default Hero;
