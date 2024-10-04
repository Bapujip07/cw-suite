import React, { useEffect,useCallback,useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Loader from "../common/Loader";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Thankyou from "./Thankyou"
import { LeftArrow } from "../common/Icons";

function ContactUs(pageName) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading,setLoading] = useState(false)



  let currentPage = pageName.pageName

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    businessname: '',
    industry: '',
    estimatedannualrevenue: '',
    dowehaveaccount: '',
    howcanwehelp: '',
    pageName:currentPage
  });

  const [submitData,setSubmitData] = useState({})
  
  useEffect(() => {

  }, [formData]);

  const [notification, setNotification] = useState("");
  const [visible,setVisible] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleChangephone = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phone: value
    }));
  };


  const handleChangeSelect = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        setSubmitData(formData); 
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha, formData]
  );

  const submitEnquiryForm = (gReCaptchaToken) => {
    setLoading(true)
    fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data:formData,
        gRecaptchaToken: gReCaptchaToken,
        secreteKey:''
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          setNotification(res?.message);
          setVisible(true)
          setLoading(false)          
          setFormData({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            businessname: '',
            industry: '',
            estimatedannualrevenue: '',
            dowehaveaccount: '',
            howcanwehelp: '',
            pageName:currentPage
          })
        } else {
          setLoading(false)
          setNotification(res?.message);
        }
      });
  };

  const createLead = (data) =>{
    fetch("/api/createLead", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.message === "Lead has been generated successfully."){
        setVisible(true)
        setLoading(false)
        }else{
        setVisible(false)
        setLoading(false)
        }
      });

  }
 
  return (
    <>
      {!visible &&(
      loading ?
        <div className="absolute left-0 top-0 flex justify-center items-center  w-full h-full bg-white-o-87 rounded-[12px]">
        <Loader />
        </div>:
      <div className="my-10 max-w-[940px] mx-auto lg:py-8 px-4 sm:px-5">
        <div className="text-center">
          <h1 className="lg:text-4xl text-2xl    font-bold text-[#1D2939] my-3">
            {" "}
            Connect with us
          </h1>
          <p className="lg:text-lg text-sm  text-[#1D2939] pb-4 ">
            {" "}
            Please fill in the below details and our team will get back to you
            shortly
          </p>
        </div>
        <div className="flex flex-wrap w-full  pt-10">
          <form  onSubmit={handleSumitForm}  method="POST" className="flex flex-wrap justify-center  w-full">
            <div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
              <label
                htmlFor="fname"
                className="text-base text-[#101828] opacity-50 "
              >
                First name
              </label>
              <input
                required
                type="text"
                value={formData.fname}
                className="border border-[#D3D3D3] rounded w-full sm:p-3 p-2  text-base "
                id="fname"
                name="fname"
                onChange={handleChange}

              />
            </div>{" "}
            <div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
              <label
                htmlFor="lname"
                className="text-base text-[#101828] opacity-50 "
              >
                Last name
              </label>
              <input
                value={formData.lname}
                type="text"
                className="border border-[#D3D3D3] rounded w-full sm:p-3 p-2  text-base "
                id="lname"
                name="lname"
                onChange={handleChange}

              />
            </div>
            <div className="lg:w-[400px] sm:w-[260px] w-[100%]   sm:mx-5 sm:mb-5 mb-4">
              <label
                htmlFor="Email"
                className="text-base text-[#101828] opacity-50 "
              >
                Email
              </label>
              <input
                required
                value={formData.email}
                type="email"
                className="border border-[#D3D3D3] rounded w-full sm:p-3 p-2  text-base "
                id="email"
                name="email"
                onChange={handleChange}


              />
            </div>{" "}
            <div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
              <label
                htmlFor="Phone"
                className="text-base text-[#101828] opacity-50 "
              >
                Phone
              </label>{" "}
              <PhoneInput
                className="border border-[#D3D3D3] rounded w-full sm:p-3 p-2  text-base  "
                id="phone"
                value={formData.phone}
                defaultCountry="IN"
                onChange={handleChangephone}
                name="phone"
              />
            </div>
            <div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
              <label
                htmlFor="Businessname"
                className="text-base text-[#101828] opacity-50 "
              >
                Business name
              </label>
              <input
                type="text"
                value={formData.businessname}
                className="border border-[#D3D3D3] rounded w-full sm:p-3 p-2  text-base "
                id="businessname"
                name="businessname"
                onChange={handleChange}


              />
            </div>{" "}
          <div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
                  <label htmlFor="industry" className="text-base text-[#101828] opacity-50 ">
                    Industry
                  </label>
                  <div className="relative">
                    
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChangeSelect}
                      className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                    <option value="">Select Industry</option>
                      <optgroup label=" Retail">
                        {" "}
                        <option value="Apparel & Footwear">
                          Apparel & Footwear
                        </option>{" "}
                        <option value="Supermarket & Grocery">
                          Supermarket & Grocery
                        </option>{" "}
                        <option value="Hypermarket & Departmental Stores">
                          Hypermarket & Departmental Stores
                        </option>{" "}
                        <option value="Life Style & Fashion">
                          Life Style & Fashion
                        </option>{" "}
                        <option value="Specialised Retail">
                          Specialised Retail
                        </option>{" "}
                        <option value="Electronics and Home Appliances">
                          Electronics and Home Appliances
                        </option>{" "}
                        <option value="Pharma & Healthcare">
                          Pharma & Healthcare
                        </option>{" "}
                      </optgroup>
                      <optgroup label="Restaurant">
                        <option value="Quick Service Restaurants">
                          Quick Service Restaurants
                        </option>

                        <option value="Multi-Chain Operations">
                          Multi-Chain Operations
                        </option>

                        <option value="Bakery & Confectioneries">
                          Bakery & Confectioneries
                        </option>

                        <option value="Bars & Breweries">
                          Bars & Breweries
                        </option>

                        <option value="Delivery/Take Away">
                          Delivery/Take Away
                        </option>
                      </optgroup>
                      <optgroup label="Distribution">
                        {" "}
                        <option value="FMCG & Packaged Goods">
                        FMCG & Packaged Goods
                        </option>{" "}
                        <option value="Specialized Distribution">
                        Specialized Distribution
                        </option>{" "}
                        <option value="Others">
                          Others
                        </option>{" "}
                      </optgroup>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
          </div>
<div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
                  <label htmlFor="Estimatedannualrevenue" className="text-base text-[#101828] opacity-50 ">
                  Estimated annual revenue
                  </label>
                  <div className="relative">
                    <select
                      id="estimatedannualrevenue"
                      name="estimatedannualrevenue"
                      value={formData.estimatedannualrevenue}
                      onChange={handleChangeSelect}
                      className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                      <option disabled value="">Select Estimated annual revenue</option>
                      <option value="0 - ₹50k">0 - ₹50k</option>
                      <option value="₹100k - ₹250k">₹100k - ₹250k</option>
                      <option value="₹250k - ₹500k">₹250k - ₹500k</option>
                      <option value="₹500k - ₹1M">₹500k - ₹1M</option>
                      <option value="₹1M - ₹5M">₹1M - ₹5M</option>
                      <option value="₹5M - ₹10M">₹5M - ₹10M</option>
                      <option value="₹10M - ₹20M">₹10M - ₹20M</option>
                      <option value="₹20M - ₹30M">₹20M - ₹30M</option>
                      <option value="₹30M - ₹50M">₹30M - ₹50M</option>
                      <option value=">₹50M">{`>₹50M`}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
          </div>
            
<div className="lg:w-[400px] sm:w-[260px] w-[100%] sm:mx-5 sm:mb-5 mb-4">
                  <label htmlFor="DoyouhaveaCWSuiteaccount" className="text-base text-[#101828] opacity-50 ">
                  CW Suite account?
                  </label>
                  <div className="relative">
                    <select
                      id="dowehaveaccount"
                      name="dowehaveaccount"
                      value={formData.dowehaveaccount}
                      onChange={handleChangeSelect}
                      className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                      <option value="">Select Yes/No</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
          </div>
            <div className="lg:w-[840px] sm:w-[580px]   w-[100%] sm:mx-5 sm:mb-5 mb-4">
              <label
                htmlFor="Howcanwehelp"
                className="text-base text-[#101828] opacity-50 "
              >
                How can we help?
              </label>
              <textarea
                className="border border-[#D3D3D3] rounded w-full sm:p-3 p-2  text-base placeholder:text-black  "
                id="howcanwehelp"
                name="howcanwehelp"
                value={formData.howcanwehelp}
                rows="4"
                onChange={handleChange}

              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="mt-5 sm:mt-[0px] bg-greenlantern   w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lg"
                type="submit"
              >
                Submit
                <LeftArrow />
              </button>
            </div>
          </form>
        </div>
      </div>
      )}
      {visible &&(
      <Thankyou />
      )}
      </>
  );
}

export default ContactUs;
