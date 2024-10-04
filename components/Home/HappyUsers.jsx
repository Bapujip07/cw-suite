import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { homehappyuser } from "../common/Helper";
import { LeftCommaIcon, RightCommaIcon } from "../common/Icons";

const HappyUsers = () => {
  const settingssecond = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2.9,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1.75,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 1.25,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container mx-auto mt-16 sm:mt-[80px] 3xl:mt-[130px] px-3">
        <p className="font-Inter font-bold text-center text-[36px] sm:text-3xl text-darkBlack">
          Our happy users
        </p>
        <div className=" sm:mx-[0px] mx-[10px] flex justify-center mt-[25px] sm:mt-[30px] ">
          <div className="flex">
            <span>
              <LeftCommaIcon />
            </span>
            <p className="font-inter  text-center font-normal mx-3 text-[16px]  sm:text-md text-lightgrey max-w-[1196px]">
              The ease of use of Suite apps makes business operations super
              easy. Definitely more value for the money
            </p>
            <span>
              <RightCommaIcon />
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-5 sm:mt-0 ">
          <div className=" flex justify-end w-[1196px]">
            <p className="font-inter font-normal   text-base text-lightgrey">
              Vrinda Singh, Just In co-founder
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1800px] lg:mx-auto happy-user mx-5 xl:px-10 mt-10 sm:mt-[70px]  ">
        <Slider {...settingssecond}>
          {homehappyuser.map((item, index) => (
            <div
              key={index}
              className="flex justify-center max-w-[250px] sm:max-w-[400px] mx-2 mt-5"
            >
              <Image
                className="hover:scale-[1.02] transition-all duration-200 ease-in"
                alt="happyuser-img"
                src={item.img}
                width={430}
                height={275}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HappyUsers;
