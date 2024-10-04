'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LeftArrow, ToggleIcon } from "../common/Icons";

const Navbar = ({ menuData, setSidebarOpen, isSidebarOpen }) => {
  const [activeParent, setActiveParent] = useState(null);
  const [activeChild, setActiveChild] = useState(null);


  const onSignUp = () => {
    router.push("/resources/contact")
  };


  const handleParentMouseEnter = (parent) => {
    setActiveParent(parent);
  };

  const handleParentMouseLeave = () => {
    setActiveParent(null);
    setActiveChild(null);
  };

  const handleChildMouseEnter = (child) => {
    setActiveChild(child);
  };

  const handleChildMouseLeave = () => {
    setActiveChild(null);
  };

  const router = useRouter();

  const yOffsetValue = typeof window !== "undefined" && window.pageYOffset;
  const [yOffset, setYOffset] = useState(yOffsetValue);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    setYOffset(currentYOffset);
  }

  const addToRoute = (data) => {
    router.push(data.slug);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const submenuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const subsubmenuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav
        className={`transition-all duration-500 ease-linear px-3 xl:px-10 flex items-center bg-white py-[18px] justify-between ${yOffset > 70 ? "sticky-bar top-0 sticky z-30 shadow-sm" : ""}`}
        style={{ zIndex: 50 }}
      >
        <div className="max-w-[120px] sm:max-w-[170px]">
          <Link href="/">
            <Image
              src="/images/cwsuite-logo.png"
              width={160}
              height={31}
              alt="LOGO"
            />


          </Link>
        </div>

        <ul className="ff-Inter text-xs hidden lg:flex items-center justify-between text-darkBlack">
          {Array.isArray(menuData) && menuData.map((parent) => (

            <li
              key={parent._id}
              className="mx-5 relative cursor-pointer"
              onMouseEnter={() => handleParentMouseEnter(parent)}
              onMouseLeave={handleParentMouseLeave}
            >
              <Link href={parent.slug}>
              <button
                className="w-full h-full text-left px-4 py-2"
                // onClick={() => addToRoute(parent)}
              >
                {parent.title}
              </button>
              </Link>

              {activeParent === parent && parent.children && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded w-[240px]"
                  style={{ zIndex: 100 }}
                >
                  <ul className="flex flex-col items-start w-full">
                    {parent.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className="footer-text text-[101828] hover:bg-[#D9D9D9] w-full relative cursor-pointer"
                        onMouseEnter={() => handleChildMouseEnter(child)}
                        onMouseLeave={handleChildMouseLeave}
                      >
                      <Link href={child.slug}>
                        <button
                          className="w-full h-full text-left px-4 py-2"
                          // onClick={() => addToRoute(child)}
                        >
                          {child.title}
                        </button>
                      </Link>

                        {activeChild === child && child.subchildren && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={submenuVariants}
                            className="absolute left-full top-0 flex flex-col py-3 bg-white shadow rounded w-[240px]"
                            style={{ zIndex: 100 }}
                          >
                            <ul className="flex flex-col items-start">
                              {child.subchildren.map((subchild, subchildIndex) => (
                                <motion.li
                                  key={subchildIndex}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  variants={subsubmenuVariants}
                                  className="footer-text text-[101828] hover:bg-[#D9D9D9] w-full"
                                >
                                <Link href={subchild.slug}>
                                  <button
                                    className="w-full h-full text-left px-4 py-2"
                                    // onClick={() => addToRoute(subchild)}
                                  >
                                    {subchild.title}
                                  </button>
                                </Link>
                                </motion.li>


                              ))}

                            </ul>
                          </motion.div>
                        )}
                      </li>
                    ))}
                  </ul>

                </motion.div>


              )}
            </li>
          ))}
        </ul>
        <button
          onClick={onSignUp}
          className="hidden lg:flex bg-blue px-5 xl:px-5 py-3 xl:py-1.5 rounded-full text-white text-xs items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg whitespace-nowrap"
        >
          Contact Sales
          <LeftArrow />
        </button>

        <div className="flex items-center ff-Inter">
          <div className="lg:hidden flex"></div>
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >


            <ToggleIcon />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

















































































































