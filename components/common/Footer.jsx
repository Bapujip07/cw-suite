import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../common/Icons";


const Footer = () => {

  return (
    <footer>
      <div className="container px-3 footer mx-auto my-8 sm:my-15">
        <div className="max-w-[90px] sm:max-w-[170px]">
          <Link href="/">
            <Image
              src="/images/cwsuite-logo.png"
              width={135}
              height={31}
              alt="LOGO"
            />
          </Link>
        </div>
        <div className="mt-5 border-t-2 border-[#E4E7EC] max-w-[1434px] mx-3"></div>
        <div className="my-6 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5">
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Products
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              {/* <Link href="/apps/point-of-sale"> */}

              <Link href="/solutions/supply-chain-management">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Supply chain management
                </li>
              </Link>
              <Link href="/solutions/order-management-system">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Order Management System
                </li>
              </Link>
              <Link href="solutions/customer-data-platform">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Customer Data Platform
                </li>
              </Link>
              <Link href="/unified-commerce/in-store/point-of-sale">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Point of Sale
                </li>
              </Link>
              <Link href="/unified-commerce/in-store/mobile-pos">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Mobile POS
                </li>
              </Link>
              <Link href="/unified-commerce/in-store/self-checkout">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Self Checkout
                </li>
              </Link>
              <Link href="/unified-commerce/in-store/scan-and-go">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Scan & Go
                </li>
              </Link>
              <Link href="/unified-commerce/store-management/store-app">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Store App
                </li>
              </Link>
              <Link href="/unified-commerce/store-management/store-inventory">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Store Inventory
                </li>
              </Link>
              <Link href="/unified-commerce/store-management/store-fulfillment">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Store Fulfilment
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              The Company
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              {/* <Link href="/resources/about-cw-suite">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Our Vision
                </li>
              </Link> */}
              <Link href="/company/about-us">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  About CW Suite
                </li>
              </Link>
              {/* <Link href="/resources/about-cw-suite#our-team">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Our Team
                </li>
              </Link> */}
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Discover
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <Link href="https://medium.com/@cwsuite" target="_blank">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Our Blog
                </li>
              </Link>
              {/* <Link href="/pricing">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Plans & Pricing
                </li>
              </Link> */}
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Support
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <Link href="https://docs.cwsuite.com/cw-suite-knowledge-base/" target="_blank">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Knowledge Base
                </li>
              </Link>
              {/* <Link href="/underconstruction">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Developer Docs
                </li>
              </Link> */}
              <Link href="/resources/contact">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Contact Us
                </li>
              </Link>
              <Link href="https://help.cwsuite.com/" target="_blank">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Help Center
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Contact
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue ">
                CW Suite LLC
              </li>
              <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                3524 Silverside Road, Suite 35B Wilmington, DE 19810 USA
              </li>
              <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                support@cwsuite.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-[#E4E7EC] max-w-[1434px] mt-12 mx-3"></div>
        <div className="mt-11 sm:mt-11 grid md:grid-cols-2 ">
          <div className="flex lg:block justify-center lg:justify-start">
            {/* <div className="flex justify-between max-w-[603px]">
              <Link
                href="/info#privacy"
                className="font-inter font-normal footer-text text-[#98A2B3] mx-2 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
              >
                Privacy policy
              </Link>
              <Link
                href="/info#cookie"

                className="font-inter font-normal footer-text text-[#98A2B3] mx-2 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
              >
                Cookies
              </Link>
              <Link
                href="/info#terms"
                className="font-inter font-normal footer-text text-[#98A2B3] mx-2 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
              >
                Terms of Use
              </Link>
            </div> */}
          </div>
          <div className="flex justify-center lg:mt-0 mt-5 lg:justify-end">
            <div className="flex justify-between max-w-[188px]">
              <a href="https://www.facebook.com/cwsuite" target="_blank" className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/cwsuite/" target="_blank" className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/cwsuite" target="_blank" className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                {/* <TwitterIcon /> */}
                <img src="/images/svg/x-twitter.svg" />
              </a>
              <a href="https://www.linkedin.com/company/cw-suite" target="_blank" className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
