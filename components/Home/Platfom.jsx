import Image from "next/image";
import React from "react";
import { homeplatfom } from "../common/Helper";

const Platfom = () => {
  return (
    <section>
      <div className="max-w-[1120px] mx-auto mt-16 sm:mt-[80px] 3xl:mt-[117px] px-3">
        <div>
          <h2 className="font-Inter text-[36px] sm:text-3xl text-center font-bold">
            A truly unified 
          </h2>
          <div className="justify-center flex mt-[12px] 3xl:mt-[36px]">
            <p className="font-inter font-normal text-md sm:text-md max-w-[846px] text-center text-[#475467]">
              Brings together all aspects of a retailer&apos;s business,
              including inventory management, customer data, sales channels, and
              more, into a single, cohesive system
            </p>
          </div>
          <div className=" mt-10 sm:mt-[15px] 3xl:mt-20 justify-between flex flex-wrap">
            {homeplatfom.map((item, index) => (
              <div key={index} className="mt-5 sm:mt-10">
                <Image
                  className="hover:scale-[1.02] 2xl:max-w-none lg:max-w-[600px] transition-all duration-200 ease-in"
                  alt="platfom-img"
                  src={item.img}
                  width={480}
                  height={300}
                />
                <h4 className="font-Inter text-xl pt-1 text-[#101828] font-bold">
                  {item.header}
                </h4>
                <p className="font-inter font-normal text-base mt-[6px] 3xl:mt-[12px] text-[#475467] max-w-[400px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platfom;
