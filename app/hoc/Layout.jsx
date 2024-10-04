'use client'
import React, { useState } from "react";
import Navbar from '../../components/Home/Navbar';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/Home/Sidebar';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import "../styles/globals.css";
import "../styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children, menuData }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        // <>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}>
            <Navbar
                className="sticky-bar"
                menuData={menuData}
                setSidebarOpen={setSidebarOpen}
                isSidebarOpen={isSidebarOpen}
            />

            <Sidebar
                menuData={menuData}
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            {children}
            <Footer />
        </GoogleReCaptchaProvider>
    );
};

export default Layout;
