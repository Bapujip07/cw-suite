
// import Image from "next/image";
// import React, { useState } from "react";
// import { CrossIcon2 } from "../common/Icons";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

// const menuData =
//   [
//     {
//       "title": "",
//       "slug": "/home",
//       "type": "custom",
//       "newTab": false,
//       "menuId": 21
//     },
//     {
//       "title": "Solutions",
//       "slug": "/solutions",
//       "type": "page",
//       "newTab": false,
//       "menuId": 1,
//       "children": [
//         {
//           "title": "Supply Chain Management",
//           "slug": "/solutions/supply-chain-management",
//           "type": "page",
//           "newTab": false,
//           "menuId": 3
//         },
//         {
//           "title": "Order Management System",
//           "slug": "/solutions/order-management-system",
//           "type": "page",
//           "newTab": false,
//           "menuId": 4
//         },
//         {
//           "title": "Customer Data Platform",
//           "slug": "/solutions/customer-data-platform",
//           "type": "page",
//           "newTab": false,
//           "menuId": 5
//         },
//         {
//           "title": "Business Intelligence & Analytics",
//           "slug": "/solutions/business-intelligence-analytics",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Security & Fraud Prevention",
//           "slug": "/solutions/security-fraud-prevention",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Payment Processing",
//           "slug": "/solutions/payment-processing",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Workforce Management",
//           "slug": "/solutions/workforce-management",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Integrations",
//           "slug": "/solutions/integrations",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         }
//       ]
//     },
//     {
//       "title": "Unified Commerce",
//       "slug": "/unified-commerce",
//       "type": "page",
//       "newTab": false,
//       "menuId": 8,
//       "children": [
//         {
//           "title": "In-Store",
//           "slug": "/unified-commerce/in-store",
//           "type": "page",
//           "newTab": false,
//           "menuId": "",
//           "subchildren": [
//             {
//               "title": "Point of Sale",
//               "slug": "/unified-commerce/in-store/point-of-sale",
//               "type": "page",
//               "newTab": false,
//               "menuId": 9
//             },
//             {
//               "title": "Mobile POS",
//               "slug": "/unified-commerce/in-store/mobile-pos",
//               "type": "page",
//               "newTab": false,
//               "menuId": 11
//             },
//             {
//               "title": "Self Checkout",
//               "slug": "/unified-commerce/in-store/self-checkout",
//               "type": "page",
//               "newTab": false,
//               "menuId": 10
//             },
//             {
//               "title": "Scan & Go",
//               "slug": "/unified-commerce/in-store/scan-and-go",
//               "type": "page",
//               "newTab": false,
//               "menuId": 12
//             }
//           ]
//         },
//         {
//           "title": "Online",
//           "slug": "/unified-commerce/online",
//           "type": "page",
//           "newTab": false,
//           "menuId": "",
//           "subchildren": [
//             {
//               "title": "E-Commerce Platform",
//               "slug": "/unified-commerce/online/e-commerce-platform",
//               "type": "page",
//               "newTab": false,
//               "menuId": ""
//             },
//             {
//               "title": "E-Commerce Integration",
//               "slug": "/unified-commerce/online/e-commerce-integration",
//               "type": "page",
//               "newTab": false,
//               "menuId": ""
//             },
//             {
//               "title": "Payment Gateway Integrations",
//               "slug": "/unified-commerce/online/payment-gateway-integrations",
//               "type": "page",
//               "newTab": false,
//               "menuId": ""
//             }
//           ]
//         },
//         {
//           "title": "Store Management",
//           "slug": "/unified-commerce/store-management",
//           "type": "page",
//           "newTab": false,
//           "menuId": "",
//           "subchildren": [
//             {
//               "title": "Store App",
//               "slug": "/unified-commerce/store-management/store-app",
//               "type": "page",
//               "newTab": false,
//               "menuId": 13
//             },
//             {
//               "title": "Store Inventory",
//               "slug": "/unified-commerce/store-management/store-inventory",
//               "type": "page",
//               "newTab": false,
//               "menuId": 15
//             },
//             {
//               "title": "Store Fulfilment",
//               "slug": "/unified-commerce/store-management/store-fulfillment",
//               "type": "page",
//               "newTab": false,
//               "menuId": 16
//             },
//             {
//               "title": "Store Staff",
//               "slug": "/unified-commerce/store-management/store-staff",
//               "type": "page",
//               "newTab": false,
//               "menuId": 17
//             }
//           ]
//         },
//         {
//           "title": "Customer Engagement",
//           "slug": "/unified-commerce/customer-engagement",
//           "type": "page",
//           "newTab": false,
//           "menuId": "",
//           "subchildren": [
//             {
//               "title": "Clientelling",
//               "slug": "/unified-commerce/customer-engagement/clientelling",
//               "type": "page",
//               "newTab": false,
//               "menuId": 14
//             },
//             {
//               "title": "Shopping App",
//               "slug": "/unified-commerce/customer-engagement/shopping-app",
//               "type": "page",
//               "newTab": false,
//               "menuId": 19
//             },
//             {
//               "title": "Loyalty",
//               "slug": "/unified-commerce/customer-engagement/loyalty",
//               "type": "page",
//               "newTab": false,
//               "menuId": 20
//             },
//             {
//               "title": "Digital Storefront",
//               "slug": "/unified-commerce/customer-engagement/digital-storefront",
//               "type": "page",
//               "newTab": false,
//               "menuId": 40
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "title": "Checkout",
//       "slug": "/checkout",
//       "type": "page",
//       "newTab": false,
//       "menuId": "",
//       "children": [
//         {
//           "title": "Point of Sale",
//           "slug": "/checkout/point-of-sale",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Self Checkout",
//           "slug": "/checkout/self-checkout",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Mobile POS",
//           "slug": "/checkout/mobile-pos",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "Scan & Go",
//           "slug": "/checkout/scan-and-go",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         },
//         {
//           "title": "eCommerce Checkout",
//           "slug": "/checkout/ecommerce-checkout",
//           "type": "page",
//           "newTab": false,
//           "menuId": ""
//         }
//       ]
//     },
//     {
//       "title": "Industries",
//       "slug": "/industries",
//       "type": "post",
//       "newTab": false,
//       "menuId": 21,
//       "children": [
//         {
//           "title": "Fashion & Apparel",
//           "slug": "/industries/fashion-apparel",
//           "type": "page",
//           "newTab": false,
//           "menuId": 22
//         },
//         {
//           "title": "Grocery & Food Retailers",
//           "slug": "/industries/grocery-food-retailers",
//           "type": "page",
//           "newTab": false,
//           "menuId": 23
//         },
//         {
//           "title": "Electronics & Technology Retailers",
//           "slug": "/industries/electronics-technology-retailers",
//           "type": "page",
//           "newTab": false,
//           "menuId": 26
//         },
//         {
//           "title": "Sports & Fitness Retailers",
//           "slug": "/industries/sports-fitness-retailers",
//           "type": "page",
//           "newTab": false,
//           "menuId": 24
//         },
//         {
//           "title": "Jewelry & Accessories",
//           "slug": "/industries/jewelry-accessories",
//           "type": "page",
//           "newTab": false,
//           "menuId": 27
//         },
//         {
//           "title": "Health & Beauty",
//           "slug": "/industries/health-beauty",
//           "type": "page",
//           "newTab": false,
//           "menuId": 28
//         },
//         {
//           "title": "Furniture & Home Furnishings",
//           "slug": "/industries/furniture-home-furnishings",
//           "type": "page",
//           "newTab": false,
//           "menuId": 29
//         }
//       ]
//     },
//     {
//       "title": "Resources",
//       "slug": "/resources",
//       "type": "page",
//       "newTab": false,
//       "menuId": 30,
//       "children": [
//         {
//           "title": "Blog",
//           "slug": "/resources/blog",
//           "type": "page",
//           "newTab": false,
//           "menuId": 31
//         },
//         {
//           "title": "Case Studies",
//           "slug": "/resources/case-studies",
//           "type": "page",
//           "newTab": false,
//           "menuId": 32
//         },
//         {
//           "title": "Whitepapers",
//           "slug": "/resources/whitepapers",
//           "type": "page",
//           "newTab": false,
//           "menuId": 33
//         },
//         {
//           "title": "Webinars",
//           "slug": "/resources/webinars",
//           "type": "page",
//           "newTab": false,
//           "menuId": 34
//         },
//         {
//           "title": "Datasheet",
//           "slug": "/resources/datasheet",
//           "type": "page",
//           "newTab": false,
//           "menuId": 35
//         }
//       ]
//     },
//     {
//       "title": "Company",
//       "slug": "/company",
//       "type": "page",
//       "newTab": false,
//       "menuId": 36,
//       "children": [
//         {
//           "title": "About Us",
//           "slug": "/company/about-us",
//           "type": "page",
//           "newTab": false,
//           "menuId": 37
//         },
//         {
//           "title": "Become a Partner",
//           "slug": "/company/become-a-partner",
//           "type": "page",
//           "newTab": false,
//           "menuId": 38
//         },
//         {
//           "title": "Help Center",
//           "slug": "company/help-center",
//           "type": "page",
//           "newTab": false,
//           "menuId": 39
//         }
//       ]
//     }
//   ]

// const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
//   const router = useRouter();
//   const [openMenus, setOpenMenus] = useState([]);

//   const handleMenuClick = (menuSlug) => {
//     router.push(menuSlug);
//     setSidebarOpen(false);
//   };

//   const handleSubMenuClick = (title) => {
//     if (openMenus.includes(title)) {
//       setOpenMenus(openMenus.filter((menu) => menu !== title));
//     } else {
//       setOpenMenus([...openMenus, title]);
//     }
//   };

//   const renderMenuItems = (items, parentTitle = "") => {
//     return items.map((item, index) => (
//       <div key={index}>
//         <li>
//           <div
//             className="flex items-center justify-between w-full cursor-pointer py-4 px-4"
//             style={{ borderBottom: "1px solid #C2C2C2" }}
//             onClick={() =>
//               item.children || item.subchildren
//                 ? handleSubMenuClick(`${parentTitle}/${item.title}`)
//                 : handleMenuClick(item.slug)
//             }
//           >
//             <span
//               style={{
//                 color: "#101828",
//                 fontSize: "16px",
//                 fontStyle: "normal",
//                 fontWeight: "500",
//               }}
//             >
//               {item.title}
//             </span>
//             {(item.children || item.subchildren) && (
//               <span className="cursor-pointer">
//                 {openMenus.includes(`${parentTitle}/${item.title}`) ? (
//                   <ChevronUpIcon style={{ width: "20px" }} />
//                 ) : (
//                   <ChevronDownIcon style={{ width: "20px" }} />
//                 )}
//               </span>
//             )}
//           </div>
//           {(item.children || item.subchildren) && (
//             <ul
//               style={{
//                 backgroundColor: "#F3F5FC",
//                 fontSize: "16px",
//                 color: "#101828",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//               }}
//               className={
//                 openMenus.includes(`${parentTitle}/${item.title}`)
//                   ? "show px-4"
//                   : "hidden"
//               }
//             >
//               {renderMenuItems(item.children || item.subchildren, `${parentTitle}/${item.title}`)}
//             </ul>
//           )}
//         </li>
//       </div>
//     ));
//   };

//   return (
//     <aside
//       className={`z-40 shadow-md fixed lg:hidden w-full h-screen top-0 flex xl:hidden flex-col items-center bg-white justify-between transition-all duration-300 ease-in ${isSidebarOpen ? "left-0" : "left-full"
//         }`}
//     >
//       <div className="w-full lg:hidden">
//         <div
//           className="flex items-center justify-between w-full"
//           style={{
//             height: "65px",
//             backgroundColor: "#fff",
//             paddingLeft: "1rem",
//             paddingRight: "1rem",
//           }}
//         >
//           <div className="max-w-[120px] sm:max-w-[170px]">
//             <Link href="/">
//               <Image
//                 src="/images/cwsuite-logo.png"
//                 width={160}
//                 height={31}
//                 alt="LOGO"
//               />
//             </Link>
//           </div>

//           <div className="flex">
//             <span className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
//               <CrossIcon2 />
//             </span>
//           </div>
//         </div>

//         <ul className="ff-Inter text-sm flex flex-col justify-between text-darkBlack overflow-auto max-h-[500px] scrollbar-w-0 w-full">
//           {renderMenuItems(menuData)}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;













'use client'

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { CrossIcon2 } from "../common/Icons";



const Sidebar = ({ isSidebarOpen, setSidebarOpen, menuData }) => {
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState([]);

  const handleMenuClick = (menuSlug) => {

    router.push(menuSlug);
    setSidebarOpen(false);
  };

  const handleSubMenuClick = (title) => {

    if (openMenus.includes(title)) {
      setOpenMenus(openMenus.filter((menu) => menu !== title));
    } else {
      setOpenMenus([...openMenus, title]);
    }
  };

  const renderMenuItems = (items, parentTitle = "") => {

    if (!items || !Array.isArray(items)) return null;

    return items.map((item, index) => (
      <div key={index}>
        <li>
          <div
            className="flex items-center justify-between w-full cursor-pointer py-4 px-4"
            style={{ borderBottom: "1px solid #C2C2C2" }}
            onClick={() =>
              item.children || item.subchildren
                ? handleSubMenuClick(`${parentTitle}/${item.title}`)
                : handleMenuClick(item.slug)
            }
          >
            <span
              style={{
                color: "#101828",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
              }}
            >
              {item.title}
            </span>
            {(item.children || item.subchildren) && (
              <span className="cursor-pointer">
                {openMenus.includes(`${parentTitle}/${item.title}`) ? (
                  <ChevronUpIcon style={{ width: "20px" }} />
                ) : (
                  <ChevronDownIcon style={{ width: "20px" }} />
                )}
              </span>
            )}
          </div>
          {(item.children || item.subchildren) && (
            <ul
              style={{
                backgroundColor: "#F3F5FC",
                fontSize: "16px",
                color: "#101828",
                fontStyle: "normal",
                fontWeight: "400",
              }}
              className={
                openMenus.includes(`${parentTitle}/${item.title}`)
                  ? "show px-4"
                  : "hidden"
              }
            >
              {renderMenuItems(item.children || item.subchildren, `${parentTitle}/${item.title}`)}
            </ul>
          )}
        </li>
      </div>
    ));
  };

  return (
    <aside
      className={`z-40 shadow-md fixed lg:hidden w-full h-screen top-0 flex xl:hidden flex-col items-center bg-white justify-between transition-all duration-300 ease-in ${isSidebarOpen ? "left-0" : "left-full"
        }`}
    >
      <div className="w-full lg:hidden">
        <div
          className="flex items-center justify-between w-full"
          style={{
            height: "65px",
            backgroundColor: "#fff",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
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

          <div className="flex">
            <span className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <CrossIcon2 />
            </span>
          </div>
        </div>

        <ul className="ff-Inter text-sm flex flex-col justify-between text-darkBlack overflow-auto max-h-[500px] scrollbar-w-0 w-full">
          {renderMenuItems(menuData)}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;













