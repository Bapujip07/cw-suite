import React from "react";
import Image from "next/image";

function Thankyou() {
  
  return (
    <>
      <div className="bg-[#F2F4F7] mx-auto lg:py-8 px-4 sm:px-10 lg:px-10">
        <div className="container flex flex-col lg:flex-row justify-between items-center px-3 mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-center">
              <h1 className="lg:text-3xl text-2xl font-bold text-[#1D2939] mb-2">
                Thank you!
              </h1>
              <p className="lg:text-md text-sm text-[#475467] pb-2 mt-2" style={{ lineHeight: '22px' }}>
                Your message has been sent successfully. We will revert shortly
              </p>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image src="/images/talktous.png" width={435} height={409} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Thankyou;
