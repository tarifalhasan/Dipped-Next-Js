"use client";
import { useState } from "react";
import { QuotesData } from "../../StaticData/services";

import ServicesSlider from "@/app/component/servicesSlider/ServicesSlider";

const Services = () => {
  return (
    <section id="services">
      <div className="services_hero_aria">
        <div className="px-5 lg:px-24 pt-32 md:pt-40">
          <div className="text-left">
            <h2 className="text-4xl">Paint Protection Film Installer</h2>
            <p className=" py-3 text-base lg:text-lg">
              If you’re looking for an affordable way to protect your vehicle’s
              paint job, contact us today at Dipped Auto Works. We would be more
              than happy to answer any questions you have and provide you with a
              free quote.
            </p>
            <button className="btn btn_primary px-4 py-3">Get Quotes</button>
          </div>
        </div>
      </div>
      <div className=" mx-auto 2xl:px-5">
        <div className="mt-6">
          <h2 className="text-2xl px-5 md:text-3xl text-center">
            Las Vegas Paint Protection Film Installer
          </h2>
          {/* ::::::Slider ::::::: */}

          <ServicesSlider />

          <div className="mt-5 sm:max-w-3xl mx-auto">
            {QuotesData.map((service, index) => (
              <div key={index}>
                <div className="grid  gap-10">
                  <div>
                    <h3 className="py-3 leading-[3.75rem] text-lg">
                      {service.title}
                    </h3>
                    <p className="text-justify opacity-100 text-white text-sm md:text-lg">
                      {service.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn_primary block mx-auto px-4 py-3 my-20">
            Get a Quotes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
