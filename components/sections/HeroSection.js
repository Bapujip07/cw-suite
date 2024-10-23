'use client'

import React,{ useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { LeftArrow } from "../common/Icons";

const Hero = ({ data }) => {
  console.log(data, 'data')
  

  const seePricing = () => {
    router.push("/resources/contact")
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
console.log(data.image.url, 'url')
  return (
    <motion.div
      className={`3xl:h-[768px] bg-center 2xl:bg-left bg-no-repeat bg-cover sm:h-[690px] h-[90vh]`}
      
      style={{
        backgroundImage: `url(https://cw-strapi.onrender.com${data.image.url})`,
        // backgroundColor: data?.styling?.backgroundColor
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1120px] mx-auto h-full px-3 xl:px-0 flex-grow flex flex-col justify-center">
        <motion.h1
          className="font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[46px] md:leading-[65px] text-center lg:text-start max-w-[750px] mx-auto lg:mx-0 w-full  bg-gray-500 bg-opacity-50"
          style={{
            color: data?.styling?.textColor,
            // backgroundColor: data?.styling?.headingBackgroundColor,
            backgroundColor: `${data?.styling?.paragraphBackgroundColor}50`,

            padding: data?.styling?.paddingRight,
            borderRadius: data?.styling?.paragraphRadius
          }}
          variants={itemVariants}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="text-md text-white sm:text-xl font-normal mt-[13px] mx-auto lg:mx-0 text-center lg:text-start max-w-[638px] w-full"
          // style=
          // {{
          //   // backgroundColor: data?.styling?.paragraphBackgroundColor,
          //   backgroundColor: `${data?.styling?.paragraphBackgroundColor}50`,
          //   padding: data?.styling?.subtitlepaddingRight,
          //   borderRadius: data?.styling?.paragraphRadius
          // }}
          variants={itemVariants}
        >
          {data.subtitle}
        </motion.p>
        {data?.button ? (
          <motion.div
            className="flex justify-center lg:justify-start flex-col sm:flex-row sm:mt-[28px]"
            variants={itemVariants}
          >
            {/* {data?.buttoncta.map((component, index) => { */}
              {/* // switch (component.componentType) { */}
              {/* //   case "Button":
                  // return ( */}
                    <motion.button
                      // key={index}
                      onClick={seePricing}
                      // style={{ backgroundColor: component.props.buttonStyle }}
                      className="mt-5 sm:mt-[0px] bg-blue w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg"
                      variants={itemVariants}
                    >
                      {data.button.Name}
                      <LeftArrow />
                    </motion.button>
                  {/* );
              //   default:
              //     return null; */}
              {/* // } */}
            {/* })} */}
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Hero;

