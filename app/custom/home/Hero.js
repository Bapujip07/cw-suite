'use client'

import React, { useState, useEffect } from "react";
import Router from 'next/router';
import { motion } from 'framer-motion';

const Hero = (props) => {
    console.log(props)
    const [email, setEmail] = useState('');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const getStarted = (ev) => {
        ev.preventDefault();
        Router.push("/resources/contact");
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hero-image-home bg-cover h-[570px] sm:h-[750px] py-8 sm:py-16 flex flex-col"
                style={{ zIndex: 1 }}
            >
                <div className="container mx-auto px-3 flex-grow flex items-center justify-center">
                    <div className="w-full max-w-[1200px] mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                            className="text-[34px] sm:text-[48px] text-white leading-[45px] sm:leading-normal font-bold sm:-mt-20"
                        >
                            {props?.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="text-base sm:text-lg text-white my-5"
                            style={{ fontWeight: '600', marginLeft: '10%', marginRight: '10%' }}
                        >{props?.description}
                        </motion.p>
                        <motion.form
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                            className="flex items-center w-full max-w-[600px] mx-auto h-[55px] sm:h-[60px]"
                        >
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder={props.searchBarPlaceholder}
                                type="email"
                                value={email}
                                style={{ borderRadius: '4px' }}
                                className="bg-white h-full w-full px-5 py-2 outline-none text-xs sm:text-sm mr-2 placeholder-gray-800"
                            />
                            <button
                                style={{ borderRadius: '4px' }}
                                onClick={getStarted}
                                className="bg-green whitespace-nowrap px-5 sm:px-10 h-full py-4 text-white text-xs sm:text-sm flex items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg"
                            >
                               {props?.buttoncta.Name}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;
