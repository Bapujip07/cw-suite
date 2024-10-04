import React, { useState } from "react";
import Slider from "react-slick";

const HeroSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      <div className="max-w-[450px] mx-auto xl:mr-0 xl:ml-auto relative mt-4">
        <Slider
          autoplay={true}
          arrows={false}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          <div>
            <img src="/images/slider-main-image1.png" alt="slider-img" />
          </div>
          <div>
            <img alt="slider-img" src="/images/slider-main-image2.png" />
          </div>
          <div>
            <img alt="slider-img" src="/images/slider-main-image3.png" />
          </div>
          <div>
            <img alt="slider-img" src="/images/slider-main-image4.png" />
          </div>
        </Slider>
        <div className="lg:absolute -left-[200px] bottom-0 w-full max-w-[350px]">
          <Slider
            arrows={false}
            autoplay={true}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <img alt="slider-img" src="/images/slider-nav-image1.png" />
            </div>
            <div>
              <img alt="slider-img" src="/images/slider-nav-image2.png" />
            </div>
            <div>
              <img alt="slider-img" src="/images/slider-nav-image3.png" />
            </div>
            <div>
              <img alt="slider-img" src="/images/slider-nav-image4.png" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
