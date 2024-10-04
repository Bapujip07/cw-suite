import Image from "next/image";
import React from "react";

const AssetManagement = ({ data }) => {
  return (
    <div className="mb-8">
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 sm:mt-[70px] mt-[40px] md:mt-[100px] ">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          
          <div className="max-w-[600px] mx-auto lg:mx-0 lg:max-w-[550px] w-full">
            <h2 className="sm:text-3xl text-xl md:text-9xl font-bold text-center lg:text-start sm:leading-[46px] leading-[40px] md:leading-[52px] text-darkBlack ">
              {data?.title}
            </h2>
            <p className="text-sm sm:text-lg text-center lg:text-start  font-normal sm:mt-[23px] mt-[15px] text-lightgrey leading-[22px] sm:leading-[32px]">
              {data?.description}
            </p>
            <div className="max-w-[500px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full  lg:hidden">
              {data?.image && (
                <Image
                  src={data?.image}
                  width={623}
                  height={725}
                  alt="advanced img"
                />
              )}
            </div>
            <div>
              {data?.andmore?.map((feature, index) => (
                <div key={index}>
                  <div className="flex mt-5 lg:mt-3 items-center">
                    <Image
                      width={25}
                      height={18}
                      src={feature.svg}
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      {feature.title}
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[500px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full hidden lg:block">
            {data?.image && (
              <Image
                src={data?.image}
                width={623}
                height={725}
                alt="advanced img"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;
