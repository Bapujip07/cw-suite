import React from "react";
import { useRouter } from "next/router";

import { LeftArrow } from "../common/Icons";

const Hero = ({ data }) => {


  const router = useRouter()
  const seePricing = () => {
    router.push('/resources/contact')
  }

  return (
    <div className={`3xl:h-[768px] bg-center 2xl:bg-left bg-no-repeat bg-cover sm:h-[690px] h-[90vh]`} style={{ backgroundImage: `url("${data?.HeroImg}")` }} >
      <div className="max-w-[1120px] mx-auto h-full px-3 xl:px-0  flex-grow flex flex-col justify-center">
        <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[46px] md:leading-[65px] text-center lg:text-start max-w-[750px] mx-auto lg:mx-0 w-full ">
          {data?.title}
        </h1>
        <p className="text-md text-white sm:text-xl font-normal mt-[13px] mx-auto lg:mx-0  text-center lg:text-start max-w-[638px] w-full">
          {data?.subtitle}
        </p>
        {data?.button ? (
          <div className="flex justify-center lg:justify-start flex-col sm:flex-row  sm:mt-[28px]">
            <button onClick={seePricing} className="mt-5 sm:mt-[0px] bg-blue   w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg">
              {data?.button}
              <LeftArrow />
            </button>
          </div>
        ) : null
        }
      </div>
    </div>
  );
};

export default Hero;











