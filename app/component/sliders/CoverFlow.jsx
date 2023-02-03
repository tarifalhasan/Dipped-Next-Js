import React from "react";
import Coverflow from "react-coverflow";

const CoverFlowSlider = () => {
  return (
    <Coverflow
      width={960}
      height={500}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr--12BB6HK6NHBBMgsYszZ_D0_ndNknBdLJZw1KhF&s"
        alt="Image 1"
      />
      <img
        src="https://www.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"
        alt="Image 2"
      />
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Image 3"
      />
    </Coverflow>
  );
};

export default CoverFlowSlider;
