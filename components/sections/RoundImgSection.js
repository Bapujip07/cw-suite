import React from 'react'
import Image from "next/image";

const RoundImgSection = ({data}) => {
    return (
        <div>
            <section className="lg:mt-[120px]">
                <div className="container mx-auto z-0 px-3  bg-skyblue rounded-[58px] relative">
                    <div className="absolute top-0 left-[-43px] z-[-1]">
                        <Image
                            src="/images/management-2.png"
                            width={162}
                            height={162}
                            alt="management img"
                        />
                    </div>
                    <h2 className="font-bold leading-[30px] sm:leading-[39px] md:leading-[64px] z-50 mx-4 pt-[20px] sm:pt-[40px] md:pt-[50] 3xl:pt-[91px] ff-Inter sm:text-3xl text-xl md:text-[39px] text-darkBlack text-center">
                        {data?.title}
                    </h2>
                    <div className="border-t-2 mt-[15px] ml-[200px] border-dashed xl:max-w-[702px] border-#006D77"></div>
                    <div className="flex z-50 justify-center mt-[12px] sm:mt-[15px] 3xl:mt-[23px] mx-4">
                        <p className="font-normal ff-inter text-sm sm:text-md text-lightgrey max-w-[1080px] text-center">
                            {data?.subtitle}
                        </p>
                    </div>
                    <div className="flex z-50 justify-center mt-[10px] px-4 pb-[20px] sm-pb-[40px] 3xl:pb-[43px]">
                        <div className="grid sm:grid-cols-2 items-center md:grid-cols-3 gap-[20px] sm:gap-[20px] xl:gap-[59px] mx-[10px] max-w-[1150px]">
                            {data?.items.map((item, index) => (
                                <div className=" z-50 w-[100%] h-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
                                    <div className="max-w-[100%] mx-auto">
                                        <img
                                            src={`http://localhost:1337${item.image.url}`}
                                            style={{ height: "262px", width: "260px" }}
                                            alt="clientelling img"
                                        />

                                    </div>
                                    <div className="text-center mt-[5px] sm:mt-2]">
                                        <h5 className="ff-inter  text-darkBlack font-bold text-center leading-[22px] sm:leading-[28px] max-w-[284px]  text-[20px] lg:text-[22px]  ">
                                            {item.heading}
                                        </h5>
                                    </div>

                                    <div className="flex justify-start mt-[5px] sm:mt-2]">
                                        <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[284px]">
                                            {item.Description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>



    )
}

export default RoundImgSection;