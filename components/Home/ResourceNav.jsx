import Link from "next/link";
import React from "react";

const ResourcesNav = () => {
  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li onClick={()=>window.open(`https://medium.com/@cwsuite`, "_blank")} className="footer-text   text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <span  style={{cursor:'pointer'}}>Blog</span>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/resources/contact"} className="w-full inline-block">
              Contact Us
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/resources/about-cw-suite"} className="w-full inline-block">
              {" "}
              About CW Suite
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ResourcesNav;
