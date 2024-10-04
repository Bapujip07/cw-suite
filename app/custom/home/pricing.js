import React from 'react';
const Pricing = (props) => {
    console.log(props)
    return (
        <section >
            <div className="container mx-auto px-3 mt-16 sm:mt-[80px] 3xl:mt-[97px] ">
                <div className="px-5 sm:px-10 py-10 sm:py-[60px] lg:py-[40px] lg:px-[50px] 3xl:py-[90px] 3xl:px-[70px] bg-blue rounded-[18px]">
                    <div className="grid xl:grid-cols-2">
                        <div className="xl:pb-0 pb-5 xl:mr-[15px]">
                            <div className="flex justify-center xl:justify-start">
                                <p className="font-Inter text-center xl:text-start  font-bold leading-[40px] sm:leading-[65px] text-[36px] text-white max-w-[458px]">
                                    {props.titles[0].heading}
                                </p>
                            </div>
                            <p className="font-inter text-center xl:text-start font-normal  text-[15px] sm:text-sm my-8 sm:my-[50px] text-white">
                                {props.titles[1].heading}
                            </p>
                            <div className="flex justify-center xl:justify-start">


                                <button className="bg-green px-10 rounded-full py-4 text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg">
                                    {props.buttoncta.Name}

                                </button>

                            </div>
                        </div>

                        <div className="mt-5 sm:mt-0">
                            <div className="xl:flex ">
                                <span className="mt-5 mr-5 hidden xl:block">

                                </span>
                                <div>
                                    <p className="font-Inter flex justify-center xl:justify-start font-bold text-[20px] sm:text-[30px] items-center  text-white">
                                        <span className="md:mt-5 mr-5 xl:hidden block">

                                        </span>{" "}
                                        <span>{props.titles[2].heading}</span>
                                    </p>
                                    <p className="font-inter text-center xl:text-start mt-[11px] font-normal text-[15px] sm:text-[18px]  text-white">
{props.titles[3].heading}                                    </p>
                                </div>
                            </div>
                            <div className="xl:flex sm:mt-[30px] mt-[10px] md:mt-[70px]">
                                <span className="mt-5 mr-5 hidden xl:block">

                                </span>
                                <div>
                                    <p className="text-center sm:text-left font-Inter flex justify-center xl:justify-start font-bold text-[20px] sm:text-[30px] items-center  text-white">
                                        <span className="md:mt-5 mr-3 sm:mr-5 xl:hidden block">

                                        </span>{" "}
                                        <span>{props.titles[4].heading}</span>
                                    </p>
                                    <p className="font-inter text-center xl:text-start mt-[11px] font-normal text-[15px] sm:text-[18px] text-white">
                                       {props.titles[5].heading}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;