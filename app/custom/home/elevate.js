import React from "react";
import Image from "next/image";

const Elevate = (props) => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
                   {props.title}
                </h1>

                <div className="flex flex-col md:flex-row my-10 items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 mt-10 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2 text-[#475467]">{props.items[0].title}</h2>
                        <p className="text-gray-700 mb-5">{props.items[0].Description}</p>
                        <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
                            {props.items[0].buttoncta.Name}
                        </button>
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src={`https://cw-strapi.onrender.com${props.items[0].image.url}`}
                            width={735}
                            height={660}
                            alt="Shopping App"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row my-10 items-center">
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src={`https://cw-strapi.onrender.com${props.items[1].image.url}`}
                            width={735}
                            height={660}
                            alt="Loyalty Program"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2 text-[#475467]">{props.items[1].title}</h2>
                        <p className="text-gray-700 mb-5">{props.items[1].Description}</p>
                        <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
                            {props.items[1].buttoncta.Name}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row my-10 items-center">
                    <div className="md:w-1/2 md:pr-8 mt-10 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2 text-[#475467]">{props.items[2].title}</h2>
                        <p className="text-gray-700 mb-5">{props.items[2].Description}</p>
                        <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
                           {props.items[2].buttoncta.Name}
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src={`https://cw-strapi.onrender.com${props.items[2].image.url}`}
                            width={735}
                            height={660}
                            alt="Digital Storefront"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elevate;






