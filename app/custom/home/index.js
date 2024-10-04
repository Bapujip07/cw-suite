import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import axios from 'axios';
const Hero=dynamic(()=>import('./Hero'))
const Operation=dynamic(()=>import('./operation'))
const Elevate=dynamic(()=>import('./elevate'))
const Adapting=dynamic(()=>import('./adapting'))
const Pricing=dynamic(()=>import('./pricing'))
const Contact=dynamic(()=>import('./Contact'))

const Platform = (props) => {
    console.log(props)

    return (
        <div>
             <div className="max-w-[1120px] mx-auto mt-16 sm:mt-[80px] 3xl:mt-[117px] px-3">
                <div>
                    <h2 className="font-Inter text-[36px] sm:text-3xl text-center font-bold">
                        {props.title}
                    </h2>
                    <div className="justify-center flex mt-[12px] 3xl:mt-[36px]">
                        <p className="font-inter font-normal text-md sm:text-md max-w-[846px] text-center text-[#475467]">
                          {props.Description}
                        </p>
                    </div>
                    <div className=" mt-10 sm:mt-[15px] 3xl:mt-20 justify-between flex flex-wrap">
                        {props.items.map((item, index) => (
                            <div key={index} className="mt-5 sm:mt-10">
                                <Image
                                    className="hover:scale-[1.02] 2xl:max-w-none lg:max-w-[600px] transition-all duration-200 ease-in"
                                    alt="platfom-img"
                                    src={`${process.env.NEXT_STRAPI_BASE_URL}${item.image?.url}`}
                                    width={480}
                                    height={300}
                                />
                                <h4 className="font-Inter text-xl pt-1 text-[#101828] font-bold">
                                    {item.title}
                                </h4>
                                <p className="font-inter font-normal text-base mt-[6px] 3xl:mt-[12px] text-[#475467] max-w-[400px]">
                                    {item.Description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const getSectionsComponent = ({ id, __component, components = [], ...rest }) => {
    let SectionsComponent;

    switch (__component) {
        case "sections.hero":
            SectionsComponent = Hero;
            break;
        case "sections.pricing-section":
            SectionsComponent = Pricing;
            break;
        case "sections.operational-section":
            SectionsComponent = Operation;
            break;
        case "sections.elevate-sections":
            SectionsComponent = Elevate;
            break;
        case "sections.adapting-sections":
            SectionsComponent = Adapting;
            break;
        case "sections.contact-section":
            SectionsComponent = Contact;
            break;
        case "sections.platform":
                SectionsComponent = Platform;
                break;
        default:
            return null;
    }

    return (
        <div key={`index-${__component}-${id}`}>
            <SectionsComponent {...rest} />
            {/* Recursively render nested components if they exist */}
            {components.length > 0 && components.map((nestedComponent) => getSectionsComponent(nestedComponent))}
        </div>
    );
};

export default async function Homepage() {

    const res = await axios.get(
        // 'http://localhost:1337/api/homes/?populate[sections][on][sections.hero][populate][buttoncta][populate]=*&populate[sections][on][sections.platform][populate][items][populate]=*&populate[sections][on][sections.operational-section][populate][items][populate]=*&populate[sections][on][sections.elevate-sections][populate][items][populate]=*&populate[sections][on][sections.adapting-sections][populate][items][populate]=*&populate[sections][on][sections.pricing-section][populate][buttoncta][populate]=*&populate[sections][on][sections.pricing-section][populate][titles][populate]=*&populate[sections][on][sections.contact-section][populate][contact][populate]=*&populate[sections][on][sections.contact-section][populate][buttoncta][populate]=*',
       `${process.env.NEXT_STRAPI_BASE_URL}/api/homes?pLevel`,
        {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${process.env.STRAPI_API_KEY}   `,
            }
        }
    );

    const result = await res.data;

    if (result.data.length === 0) {
        notFound(); 
    }

    const sections = result.data[0]?.sections;

    return (
        <>
            {/* Recursively render all sections and their nested components */}
            {sections?.map(getSectionsComponent)}
        </>
    );
}

