import Image from "next/image";
import React, { useState } from "react";
import { homebussinesssize } from "../common/Helper";

const Business = () => {
  const businessdata = [
    {
      firstimage: "/images/bussiness-1.png",
      secondimage: "/images/bussiness-2.png",
    },
    {
      firstimage: "/images/retail-image-1.png",
      secondimage: "/images/resturant-image-2.png",
    },
    {
      firstimage: "/images/restaurant-1-image.png",
      secondimage: "/images/restaurant-2-image.png",
    },
  ];
  const [busssinessImg, setBussinessImg] = useState(businessdata[0]);

  return (
    <div className="bg-[#D7E9A9] mt-16 sm:mt-[80px] 3xl:mt-[125px] relative">
      <div className="max-w-[100px] sm:max-w-full absolute z-[0] hidden sm:block">
        <Image
          src="/images/bussiness-3.png"
          width={120}
          height={120}
          alt="bussiness-img"
        />
      </div>
      <div className="container mx-auto px-3 py-5 sm:py-24 z-10">
        <div className="grid xl:grid-cols-2">
          <div className="sm:mt-10">
            <h2 className="font-Inter font-bold text-[36px] sm:leading-[64px] sm:text-[38px] text-[#101828] max-w-[667px]">
              Empowering businesses of all sizes with scalable solutions
            </h2>
            {homebussinesssize.map((item, index) => (
              <div
                key={index}
                className="group"
                onMouseOver={() => setBussinessImg(businessdata[index])}
              >
                <h6 className="font-Inter group-hover:text-[#040D26] font-bold text-xl text-[#040D26] mt-8 sm:mt-10">
                  {item.header}
                </h6>
                <p className="font-inter group-hover:text-[#040D26] font-normal mb-10 text-sm sm:text-md text-[#040D26] max-w-[687px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center relative xl:mt-0">
            <img
              className="h-[500px] w-[450px] object-contain"
              alt="bussiness-img-1"
              src={busssinessImg.firstimage}
            />
            <img
              className="w-[300px] h-[327px] my-4 mx-auto sm:mt-0 sm:absolute bottom-0 right-[70px] xl:-right-[30px] 2xl:-right-[70px]"
              src={busssinessImg.secondimage}
              alt="bussiness-img-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
