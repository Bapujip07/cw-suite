import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SupportNav = () => {
  const router = useRouter();

  const handleHelpCenterClick = (e) => {
    e.preventDefault();
    window.open("https://help.cwsuite.com/", "_blank");
  };

  const handleProfessionalServicesClick = (e) => {
    e.preventDefault();
    router.push("/support/professional-services");
  };

  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href="https://help.cwsuite.com/" onClick={handleHelpCenterClick} className="w-full inline-block">
              Help Center
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href="/support/professional-services" onClick={handleProfessionalServicesClick} className="w-full inline-block">
              Professional Services
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SupportNav;
