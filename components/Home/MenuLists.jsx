import Link from "next/link";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const MenuLists = ({ id, item, view }) => {
  const lengnthlist = item.headinglist && item.headinglist.length;

  return (
    <>
      <div className={`mb-2  cursor-pointer  overflow-hidden`}>
        <div>
          {lengnthlist > 0 ? (
            <>
              <Accordion>
                {item.headinglist &&
                  item.headinglist.length &&
                  item.headinglist.map((obj, index) => (
                    <AccordionItem key={index}>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="flex justify-between items-center w-full">
                            <h3
                              className={`accordion-title ${
                                open ? "accordion-active" : ""
                              }`}
                            >
                              {obj.title}
                            </h3>
                            <svg
                              className={` transition-all  duration-200 ease-in `}
                              width="16"
                              height="14"
                              viewBox="0 0 9 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_304_2349)">
                                <path
                                  d="M0.202637 2.61011L4.37451 7.32498C4.39211 7.34487 4.41372 7.3608 4.43793 7.3717C4.46214 7.38261 4.4884 7.38825 4.51495 7.38825C4.5415 7.38825 4.56775 7.38261 4.59196 7.3717C4.61617 7.3608 4.63779 7.34487 4.65539 7.32498L8.82764 2.61011"
                                  stroke="#04150C"
                                  strokeWidth="0.964286"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_304_2349">
                                  <rect
                                    width="9"
                                    height="9"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </AccordionHeader>

                          <AccordionBody>
                            <div className="accordion-body">
                              {obj.list &&
                                obj.list.map((value, index) => (
                                  <li key={index}>
                                    <Link
                                      href={value.url}
                                      className=" text-base  text-gray-500 cursor-pointer my-1.5 inline-block"
                                    >
                                      {value.text}
                                    </Link>
                                  </li>
                                ))}
                            </div>
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>
                  ))}
              </Accordion>
            </>
          ) : (
            <div
              className={`${
                id === view ? "font-semibold text-[#126A3A]" : ""
              } text-darkblack flex items-center justify-between text-sm py-1`}
            >
              {item.heading}

              {item.lists && item.lists.length && item.lists.length > 0 && (
                <svg
                  className={` transition-all  duration-200 ease-in ${
                    id === view ? "rotate-[180deg]" : ""
                  }`}
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_304_2349)">
                    <path
                      d="M0.202637 2.61011L4.37451 7.32498C4.39211 7.34487 4.41372 7.3608 4.43793 7.3717C4.46214 7.38261 4.4884 7.38825 4.51495 7.38825C4.5415 7.38825 4.56775 7.38261 4.59196 7.3717C4.61617 7.3608 4.63779 7.34487 4.65539 7.32498L8.82764 2.61011"
                      stroke="#04150C"
                      strokeWidth="0.964286"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_304_2349">
                      <rect
                        width="9"
                        height="9"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuLists;
