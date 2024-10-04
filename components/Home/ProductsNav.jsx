import Link from "next/link";
import React from "react";

const ProductsNav = () => {
  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li className="footer-text   text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/home"} className="w-full inline-block">
              Home
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/inventory"} className="w-full inline-block">
              {" "}
              Inventory{" "}
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/sales"} className="w-full inline-block">
              {" "}
              Sales
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/purchase"} className="w-full inline-block">
              Purchase
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/finance"} className="w-full inline-block">
              Finance
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/hr"} className="w-full inline-block">
              HRMS
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/point-of-sale/restaurant"} className="w-full inline-block">
            Restaurant POS
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/price-connect"} className="w-full inline-block">
            Price Connect
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/composer"} className="w-full inline-block">
            Composer
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductsNav;
