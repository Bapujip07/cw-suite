'use client'
import React, { useEffect, useState } from "react";

const SliderSection = ({data}) => {
    const aboutsliderdata = data.items

    const [active, setActive] = useState(0);
    const [sliderState, setSliderState] = useState(aboutsliderdata[active]);
  

    useEffect(() => {
        const interval = setInterval(() => {
            if (active < aboutsliderdata.length - 1) {
                setActive((active) => active + 1);
            } else {
                setActive((active) => active - 1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [active]);

    useEffect(() => {
        setSliderState(aboutsliderdata[active]);
    }, [active]);

    return (
        <>
            <div id="our-team" className="py-10 sm:py-20 px-3 max-w-[1120px] mx-auto">
                <span className="text-maryblue rounded-full bg-[#BEE1E6] px-6 py-2 font-normal text-[12px]">
                   {data.title}
                </span>

                {sliderState && (
                    <>
                        <h2 className="text-darkBlack text-[36px] sm:text-3xl font-bold ff-inter mt-4 mb-3">
                            {sliderState.heading}
                        </h2>
                        <div className="relative h-[880px] lg:h-[500px]">
                            
                            <img
                                className={sliderState.leftIconClasses}
                                src={`https://cw-strapi.onrender.com${sliderState.leftIconImage.url}`}
                                alt="goal"
                            />
                            <img
                                className={sliderState.rightIconClasses}
                                src={`https://cw-strapi.onrender.com${sliderState.rightIcon?.url}`}

                            />
                            <div className="z-1 max-w-[310px] absolute left-[7%] sm:left-[20%] top-[300px] lg:top-[80px] rotate-[-8.52deg] px-3 pt-3 pb-6 bg-white rounded-[16px] shadow-[0px_15px_80px_rgba(0,0,0,0.08)]">
                                <img
                                    className="w-full"
                                    src={`https://cw-strapi.onrender.com${sliderState.images[0].url}`}
                                    alt="team"
                                />
                            </div>
                            <div className="z-1 max-w-[230px] absolute left-[6%] sm:left-[42%] top-[140px] lg:top-[220px] rotate-[3.65deg] px-3 pt-3 pb-6 bg-white rounded-[16px] shadow-[0px_15px_80px_rgba(0,0,0,0.08)]">
                                <img 
                                src={`https://cw-strapi.onrender.com${sliderState.images[1].url}`} 
                                alt="team" />
                            </div>
                            <div className="z-[-1] max-w-[230px] absolute left-[27%] sm:left-[59%] top-[530px] lg:top-[100px] rotate-[3.65deg]  px-3 pt-3 pb-6 bg-white rounded-[16px] shadow-[0px_15px_80px_rgba(0,0,0,0.08)]">
                                <img
                                    className="w-full"
                                    src={`https://cw-strapi.onrender.com${sliderState.images[2].url}`}
                                    alt="team"
                                />
                            </div>{" "}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default SliderSection;