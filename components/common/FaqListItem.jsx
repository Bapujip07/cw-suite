import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const FaqListItem = ({ activeHandler, id, item, view }) => {
  return (
    <>
      <div
        style={{borderBottom:'1px solid #D9D9D9',borderRadius:'0px'}}
        onClick={() => activeHandler(id)}
        className={` bg cursor-pointer overflow-hidden  rounded-[4px] ${
          id === view ? "bg-white" : "bg-white"
        }`}
      >
        <div className="">
          <div
            style={{color:'#101828',fontStyle:"normal",fontWeight:'550',paddingLeft:'0px',paddingRight:'0px',fontSize:'18px',paddingTop:'18px',paddingBottom:'18px'}}
            className={`${
              id === view ? "bg-white text-white" : "text-blueshade1"
            }  font-normal ff-Inter flex items-center justify-between sm:text-md px-4 sm:px-6 py-3 sm:py-4 rounded-[4px]`}
          >
            {item.questions}

            <svg
              className={`${
                id === view ? "rotate-180 fill-[#101828]" : "fill-[#101828]"
              } transition-all duration-200 ease-in`}
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.061 0.853742C14.9217 0.714352 14.7563 0.603777 14.5743 0.528335C14.3922 0.452893 14.1971 0.414062 14 0.414062C13.803 0.414062 13.6078 0.452893 13.4258 0.528335C13.2437 0.603777 13.0783 0.714352 12.939 0.853742L8.35301 5.43874C8.25925 5.53248 8.13209 5.58513 7.99951 5.58513C7.86693 5.58513 7.73977 5.53248 7.64601 5.43874L3.06101 0.853742C2.77974 0.572347 2.39822 0.414209 2.00036 0.414115C1.6025 0.414021 1.2209 0.57198 0.939505 0.853242C0.65811 1.1345 0.499972 1.51603 0.499878 1.91389C0.499784 2.31175 0.657743 2.69335 0.939005 2.97474L5.52501 7.56074C5.85002 7.88578 6.23587 8.14362 6.66053 8.31954C7.0852 8.49545 7.54035 8.58599 8.00001 8.58599C8.45967 8.58599 8.91482 8.49545 9.33949 8.31954C9.76415 8.14362 10.15 7.88578 10.475 7.56074L15.061 2.97474C15.3422 2.69345 15.5002 2.31199 15.5002 1.91424C15.5002 1.5165 15.3422 1.13503 15.061 0.853742Z" />
            </svg>
          </div>
          <AnimatePresence>
            {id === view && (
              <>
                <motion.div
                  transition={{ type: "none", stiffness: 60 }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0, 
                    transition: { type: "none", stiffness: 50 },
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} style={{color:'#475467',fontStyle:'normal',fontWeight:'400',paddingLeft:'0px',paddingRight:'0px',fontSize:'16px'}} className="mb-0 font-normal text-xs sm:text-base px-4 sm:px-6 py-3 sm:py-4 ff-inter" />
                    {/* {item.answer}
                  </p> */}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default FaqListItem;
