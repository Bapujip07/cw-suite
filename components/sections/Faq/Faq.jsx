import React from "react";
import FaqQuestions from "./FaqQuestions";

const Faq = ({data}) => {
    console.log(data)

    return (
        <>
            <section id="faq" style={{ paddingBottom: '40px' }} className="py-16 sm:py-[80px]">
                <div className="container mx-auto px-3">
                    <h2 style={{ color: '#101828', fontStyle: 'normal', letterSpacing: '-0.01em' }} className="ff-Inter text-xl sm:text-3xl font-bold sm:leading-[64px] mb-5">{data?.title}</h2>
                    <h6 style={{ color: '#101828', fontStyle: 'normal', letterSpacing: '-0.01em' }} className="ff-Inter text-sm sm:text-sm  sm:leading-[64px] mb-5">{data?.subtitle}</h6>
                    <FaqQuestions faqData={data.items} />
                </div>
            </section>
        </>
    );
};

export default Faq;
