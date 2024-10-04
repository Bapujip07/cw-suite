import React, { useState, useEffect } from 'react'
import Image from "next/image";


const CardImgSection = ({ data }) => {


    console.log(data, 'result')
    return (
        <div className="max-w-[1200px] w-full mx-auto px-3 xl:px-0 sm:mt-[50px] mt-[40px] md:mt-[85px]">
            <h2 className="text-xl sm:text-2xl md:text-6xl leading-[26px] sm:leading-[40px] md:leading-[44px] text-darkBlack -tracking-1 font-semibold text-center">
                {data.title}
            </h2>
            <p className="text-base sm:text-[21px] mt-[15px] sm:mt-[26px] font-normal text-lightgrey max-w-[100%] mx-auto text-center">
                {data.subtitle}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-[15px] lg:gap-[10px] 2xl:gap-[21px] max-w-[700px] mx-auto lg:max-w-[1120px] mt-[20px] sm:mt-[40px] 3xl:mt-[65px]  lg:pb-[120px]  xl:pb-[120px]">
                {data.items?.map((item) => (
                    <div className="px-2 xl:px-0 rounded-[16px] z-0 mx-auto hover:scale-90 transition-all lg:h-[355px] ease-in hover:duration-200 relative" style={{ backgroundColor: 'rgb(190, 225, 230)', marginToP: '5PX', maxWidth: '300PX' }}>
                        <div className="pt-[25px] lg:pt-[55px]">
                            <h3 className="font-bold text-center text-lg sm:text-[26px] text-darkBlack leading-[32px]">
                                {item.heading}
                            </h3>
                            <p className="font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] p-2">
                                {item.Description}
                            </p>
                        </div>

                        <div className={` my-5 lg:my-0 lg:pt-[23px] mx-auto max-w-[250px] rounded-[16px] py-[15px] lg:pb-[30px] px-[15px]`} style={{ padding: '15px', backgroundColor: 'rgb(255, 240, 240)' }}>
                            {/* {console.log(item.image.url)} */}
                            <img
                                src={item.image && item.image.url ? `http://localhost:1337${item.image.url}` : 'http://localhost:1337/uploads/order_flexibility_4f2975fde9.png'}
                                alt="inventory img"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default CardImgSection