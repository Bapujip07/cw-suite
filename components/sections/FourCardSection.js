import React from 'react';
import Image from 'next/image';

const ManagementCard = ({card} ) => {
    console.log(card)
    return (
        <div className="max-w-[340px] h-90 transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1 lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[${card.styles.backgroundColor}] rounded-[16px]" style={{ backgroundColor: 'rgb(203, 209, 229)' }}>
            <div className="p-5 flex flex-col justify-between h-full ">
                <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
                    {card.heading}
                </h1>
                <div>
                    <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-6  ">
                        {card.Description}
                    </p>
                    <div className="my-1">
                        <Image
                            className="mx-auto"
                            src={`https://cw-strapi.onrender.com${card.image.url}`}
                            width={152}
                            height={110}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FourCardSection = ({ data }) => {
    return (
        <div className="max-w-[1280px] mx-auto sm:mt-[70px] mt-[30px] px-4 xl:px-5 px-md-5 " >
            <div className="px-[9px] management-bg-img">


                <h1 className="leading-[115%] xl:text-3xl sm:text-2xl text-xl font-bold text-darkBlack pt-8 mx-2  ">
                    {data.title}
                </h1>
                <p className="my-6 sm:text-[20px] text-sm text-lightgrey leading-[130%] pt-8 mx-2">
                    {data.subtitle}
                </p>
                <div className="flex flex-wrap">
                    {data.items.map((item, index) => (
                        <ManagementCard key={index} card={item} />
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center  ">
                {/* Other management cards go here */}
            </div>
        </div>
    );
};

export default FourCardSection;



