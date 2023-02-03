import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./service.css";
import slideIMage1 from "../../../public/img/services/window/image 1.png";
import slideIMage2 from "../../../public/img/services/window/image 2.png";
import slideIMage3 from "../../../public/img/services/window/image 3.png";
import Image from "next/image";
// import required modules
import { Navigation } from "swiper";

const WindowTinting = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="grid grid-cols-2">
          <div>
            <Image src={slideIMage1} alt="slide" />
          </div>
          <div>
            <Image src={slideIMage2} alt="slide" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2">
          <div>
            <Image src={slideIMage3} alt="slide" />
          </div>
          <div>
            <Image src={slideIMage2} alt="slide" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WindowTinting;
