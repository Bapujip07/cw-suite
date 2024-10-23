import React from 'react'
import Image from 'next/image';

const BgColorImage = ({data}) => {
    return (

        <section className="lg:mt-[70px]">
            <div className="container mx-auto z-0 px-3  bg-skyblue rounded-[58px] relative">
                <div className="absolute top-0 right-[-30px] top-[20px] z-[1] hidden lg:block">
                    <Image
                        src="/images/Group arrows.png"
                        width={102}
                        height={102}
                        alt="management img"
                    />
                </div>
                <div>
                    <div className="max-w-[1120px] 3xl:px-0 mx-auto mt-[40px]  sm:mt-[52px]">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <div className="lg:max-w-[590px] mt-5 pt-6 lg:mt-0 w-full mb-[160px] hidden lg:block">
                                <div className="flex justify-center lg:justify-start">
                                    <div className="ff-inter font-bold sm:text-xl text-xl text-darkBlack leading-[18px] sm:leading-[64px] text-center lg:text-start max-w-[667px] ">
                                        <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
                                            <div className="hidden lg:block mb-[-10rem]">
                                                <Image
                                                    className="absolute"
                                                    style={{ zIndex: 0, width: "500px", height: "470px" }}
                                                    src={`https://cw-strapi.onrender.com${data?.image?.url}`}
                                                    width={435}
                                                    height={160}
                                                    alt="store staff img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:max-w-[590px] mt-5 p-6 lg:mt-0 w-full">
                                <div className="flex justify-center lg:justify-start">
                                    <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[64px] text-center lg:text-start max-w-[667px] ">
                                        {data?.title}
                                    </h2>
                                </div>
                                <div className="flex justify-center lg:justify-start">
                                    <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[22px]">
                                        {data?.subtitle}
                                    </p>
                                </div>
                                <div className="border-t-2 mt-4 sm:mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
                                <div className="flex justify-center xl:justify-start">
                                    <div className="mt-4 sm:mt-[25px] grid sm:grid-cols-2 gap-[20px] lg:gap-[10px] xl:gap-[15px]">
                                        {data?.items.map((item, index) => (
                                            <div className="max-w-[325px]" key={index}>
                                                <div className="flex items-center">
                                                    <Image
                                                        width={25}
                                                        height={18}
                                                        src="/images/posmainIcon.png"
                                                        alt="pos main icon"
                                                    />
                                                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BgColorImage