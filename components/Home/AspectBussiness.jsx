import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { aspectbussinessdata } from "../common/Helper";
import { LeftArrow } from "../common/Icons";

const AspectBussiness = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1436,
        settings: {
          arrows: true,

          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true,

          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1.8,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 533,
        settings: {
          slidesToShow: 1.4,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 422,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="apps">
      <div className="container mx-auto mt-16 sm:mt-[80px] 3xl:mt-[89px]">
        <h2 className="font-Inter font-bold text-2xl sm:text-3xl text-[#101828] text-center leading-[47px] sm:leading-normal">
          Apps for every aspect of your business
        </h2>
        <div className="justify-center flex mt-3 mx-2 sm:mx-0">
          <p className="font-inter font-normal text-sm sm:text-md xl:text-lg max-w-[846px] text-center text-[#475467]">
          Select specific tools that best meet your needs and goals from
            our collection of apps that are designed to support various aspects
            of a business
          </p>
        </div>
      </div>
      <div className="container mx-auto px-3 mt-10">
        <Slider {...settings} className="aspect-of-your-business-slider">
          {aspectbussinessdata &&
            aspectbussinessdata.map((obj, index) => (
              <div key={index}>
                <div className="bussinessCard-shadow border-[#e4e7ec] border-[1px] sm:mx-4 rounded-[16px]  xl:h-[540px]">
                  <div className="flex justify-between flex-col h-[100%]">
                    <Image
                      className="aspect-img"
                      src={obj.imageURL}
                      width={400}
                      height={170}
                      alt="imgUrl"
                    />
                    <div className="flex flex-col justify-between h-full px-3 py-7">
                      <div className="flex flex-col justify-center">
                        <h4 className="font-Inter font-normal text-xl xl:text-xl text-center text-[#101828]">
                          {obj.heading}
                        </h4>
                        <p className="font-inter font-normal text-base text-center text-[#475467] max-w-[447px] my-4 xl:mt-5  mx-auto">
                          {obj.description}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <Link href={obj.link}>
                          <button className="bg-[#101828]  rounded-[4px] w-[266px] h-[46px] flex justify-center items-center font-inter font-bold text-[16px] text-[white]  free-trial-btn-hover hover:shadow-md hover:shadow-blue">
                            <span>Learn More </span>
                            <LeftArrow />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default AspectBussiness;
