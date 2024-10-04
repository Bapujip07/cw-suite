import React from "react";
import Link from "next/link";

const MobileProductsNav = () => {
  return (
    <>
      <div className="text-center my-3">
        <ul className="flex flex-col items-start w-full">
          <li className="text-xs   text-[#363A41] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/pointofsale"}>Point of Sale</Link>
          </li>
          <li className="text-xs  text-[363A41] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/inventory"}> Inventory </Link>
          </li>
          <li className="text-xs  text-[363A41] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/sales"}> Sales</Link>
          </li>
          <li className="text-xs  text-[363A41] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/purchase"}>Purchase</Link>
          </li>
          <li className="text-xs  text-[363A41] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/finance"}>Finance</Link>
          </li>
          <li className="text-xs  text-[363A41] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/hr"}>HRMS</Link>
          </li>
          <h4 className="text-darkBlack font-bold text-xs px-4 text-center w-full">
            Developer
          </h4>
          <li className="text-xs  text-[363A41] hover:bg-[#D9D9D9] w-full px-5 py-2 cursor-pointer">
            <Link href={"/composer"}>Composer</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileProductsNav;
