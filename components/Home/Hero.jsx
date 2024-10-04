import React, { useEffect, useState } from "react";
import { LeftArrow } from "../common/Icons";
import Router from 'next/router';

const Hero = () => {
  const [email, setEmail] = useState(null)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const getStarted = (ev) => {
    ev.preventDefault();
    //  if (email !== null && emailPattern.test(email)) {
    //   Router.push({
    //     pathname: '/pricing',
    //     query: { email: encodeURIComponent(email) }
    //   })
    // }
    Router.push("/resources/contact")
  };


  return (
    <>
      <div className="hero-image-home bg-cover h-[570px] sm:h-[750px] py-8 sm:py-16 flex flex-col">
        <div className="container mx-auto px-3 flex-grow flex items-center justify-center">
          <div className="w-full max-w-[1200px] mx-auto text-center">
            <h1 className="text-[36px] sm:text-[48px] text-white leading-[50px] sm:leading-normal font-bold sm:-mt-20">
              Empower Your Retail Business with CW Suite
            </h1>
            <p className="text-base sm:text-lg text-white my-5" style={{ fontWeight: '600', marginLeft: '10%', marginRight: '10%' }}>
              Discover a unified, scalable, and flexible solution that streamlines retail operations and enables seamless integration with existing tools
            </p>

            <form className="flex items-center w-full max-w-[600px] mx-auto h-[55px] sm:h-[60px]">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailPattern.test(e.target.value)) {
                  } else {
                  }
                }}
                required
                placeholder="Enter email"
                type="email"
                style={{ borderRadius: '4px' }}
                className="bg-white h-full w-full px-5 py-2 outline-none text-xs sm:text-sm mr-2 placeholder-gray-800"
              />
              <button style={{ borderRadius: '4px' }} onClick={getStarted} className="bg-green whitespace-nowrap px-5 sm:px-10 h-full py-4 text-white text-xs sm:text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg">
                {/* Get Started */}
                Contact Sales
                <LeftArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
