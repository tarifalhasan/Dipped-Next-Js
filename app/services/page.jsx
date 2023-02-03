import React from "react";
import Image from "next/image";
import { servicesData, serviceGallaryImage } from "../StaticData/services";
const Services = () => {
  return (
    <section id="services">
      <div className="services_hero_aria">
        <div className="px-5 lg:px-24 pt-32">
          <div className="text-left">
            <h2>Car + Vehicle Wrap</h2>
            <p className="text-base lg:text-lg py-3">
              Specializing in all shapes+ sizes of vehicles and various
              materials
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-24">
        <div className="mt-6">
          <h2 className="text-4xl text-center">Quality Las Vegas Car Wraps</h2>
          {/* test */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              {servicesData.map((item, index) => (
                <div key={index}>
                  <h3 className="py-3">{item.title}</h3>
                  <p className="text-justify rounded-lg text-base lg:text-lg opacity-100 text-white ">
                    {item.subTitle}
                  </p>
                </div>
              ))}
            </div>
            {/* image gallary */}
            <div className="mt-8">
              <div className="grid grid-cols-2 grid-rows-[] gap-4">
                {serviceGallaryImage.map((data) => (
                  <>
                    <Image
                      src={data.image1}
                      className="rounded-lg"
                      key={data.id}
                    />
                    <Image
                      src={data.image2}
                      className="rounded-lg"
                      key={data.id}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
