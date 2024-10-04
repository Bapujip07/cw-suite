import React from "react";
import Image from "next/image";
import Link from "next/link";

function Thankyou() {
  
  return (
    <>
      <div className="my-10 max-w-[940px] mx-auto lg:py-8 px-4 sm:px-5">
        <div className="text-center">
          <h1 className="lg:text-3xl text-2xl font-bold text-[#1D2939] my-3">
            Thank you!
          </h1>
          <div className="flex justify-center mt-9 lg:mt-0 lg:pr-2 xl:pr-0 w-full">
            <Image src="/images/Illustration.png" width={200} height={173} />
          </div>
          <p className="lg:text-md text-sm text-[#1D2939] pb-2 mt-8" style={{ lineHeight: '22px' }}>
            Your message has been sent successfully
          </p>
          <p className="lg:text-md text-sm text-[#1D2939] pb-4">
            We will revert shortly. In the meantime, check out our{" "}
            <span className="text-[#367CFF]">
              <Link href="/#faq">FAQ section</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Thankyou;
