import React from "react";

const DescriptionSection = ({data}) => {
    return (
        <>
            <div id="abtus" className="py-10 sm:py-10 px-3 max-w-[1239px] mx-auto ">
                <h2 className="text-darkBlack text-[36px] sm:text-[42px] text-center font-bold ff-inter mb-6">
                    {data?.title}
                </h2>
                <p className="text-lightgrey text-base sm:text-[20px] leading-[34px] text-center mb-3">
                    {data?.subtitle}
                </p>
            </div>
        </>
    );
};

export default DescriptionSection;