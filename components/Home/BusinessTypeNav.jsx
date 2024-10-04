import Link from "next/link";
import React from "react";

const BusinessTypeNav = () => {
  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li className="footer-text   text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/solutions/retail"} className="w-full inline-block">
              Retail Connect
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/solutions/restaurant"} className="w-full inline-block">
              {" "}
              Restaurant Connect{" "}
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/solutions/rfid-connect"} className="w-full inline-block">
              {" "}
              RFID Connect{" "}
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
};

export default BusinessTypeNav;
