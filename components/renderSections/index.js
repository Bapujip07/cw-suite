'use client'
import React from 'react';
import Hero from "../../components/sections/HeroSection"
import FeaturesSection from '../../components/sections/FeaturesSection'
import TalkUs from '../../components/sections/ContactFormSection';
import Faq from "../../components/sections/Faq/Faq";
import HappyUsers from "../../components/Home/HappyUsers";
import Platfom from "../../components/Home/Platfom";
import RightImgLefttext from '../sections/RightImgLefttext';
import LeftImgRighttext from '../sections/LeftImgRighttext';
import FeaturesSectionRightText from '../sections/FeatureSectionRightText';
import RoundImgSection from '../sections/RoundImgSection';
import CardImgSection from '../sections/CardImgSection';
import ThreeImgSection from '../sections/ThreeImgSection';
import BgColorImage from '../sections/BgColorImage';
// import CardImgSection from '../sections/CardImgSection';
import CardMergeSection from '../sections/CardMergeSection';
import FourCardSection from '../sections/FourCardSection';
import DescriptionSection from '../sections/DescriptionSection';
import WhyOptSection from '../sections/WhyOptSection';
import SliderSection from '../sections/SliderSection';



const RenderSections = ({ data }) => {

    console.log('data====>', data)


    const renderSectionComponent = (section) => {
        switch (section.__component) {
            case 'sections2.hero-section':
                return <Hero data={section} />;
            case 'sections2.features-section':
                return <FeaturesSection data={section} />;
            case 'sections2.right-imgleft-text-section':
                return <RightImgLefttext data={section} />;
            case 'sections2.leftimg-righttext-section':
                return <LeftImgRighttext data={section} />;
            case 'sections2.round-img-section':
                return <RoundImgSection data={section} />;
            case 'sections2.card-img-section':
                return <CardImgSection data={section} />;
            case 'sections2.threeimg-section':
                return <ThreeImgSection data={section} />;
            case 'sections2.bg-color-image-section':
                return <BgColorImage data={section} />;
            case 'sections2.card-merge-section':
                return <CardMergeSection data={section} />;
            case 'sections2.four-card-section':
                return <FourCardSection data={section} />;
            case 'sections2.feature-section-right-text':
                return <FeaturesSectionRightText data={section} />;
            case 'sections2.description-section':
                return <DescriptionSection data={section} />;
            case 'sections2.why-opt-section':
                return <WhyOptSection data={section} />;
            case 'sections2.slider-section':
                return <SliderSection data={section} />;

            case 'sections2.contact-section':
                return <TalkUs data={section} />;
            case 'sections2.faq-section':
                return <Faq data={section} />;
            case 'HappyUsersSection':
                return <HappyUsers data={section} />;
            case 'PlatfomSection':
                return <Platfom data={section} />;
            default:
                return null;
        }
    };

    return (
        <>
            {data[0]?.sections?.map((section, index) => (
                <React.Fragment key={index}>
                    {renderSectionComponent(section)}
                </React.Fragment>
            ))}

        </>
    );
}

export default RenderSections;