import React from 'react'

const Foru = () => {
    const backgroundImageUrl = "https://media.istockphoto.com/id/1367078593/vector/abstract-gray-modern-background.jpg?s=612x612&w=0&k=20&c=dH7j_YzMSLlwUpU_gZ3OtpD-XnkBEYYiEJ_T6-fjZ64=";

    return (
        <div className="bg-cover bg-center h-auto mt-9" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
            <div className="container mx-auto flex flex-wrap py-6">
                <div className="w-full md:w-1/2 xl:w-1/2 px-4 mt-10 h-auto ">
                    <img
                        src="https://media.istockphoto.com/id/1467719379/photo/business-people-wearing-headset-working-actively-in-office-call-center-telemarketing-customer.jpg?b=1&s=170667a&w=0&k=20&c=J74Hh5-ZbXgcC6xQTlYlCmJqDOJNvYohKpoaJGG9DWw="
                        alt="contact-image"
                        width={637}
                        className="w-full h-full rounded-lg"
                        style={{ maxHeight: '550px' }}
                    />
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 px-4">
                    <h2 className="text-black text-3xl font-bold mt-6">
                        We are here for you
                    </h2>
                    <p className="text-lightgrey text-sm sm:text-md ff-inter my-3">
                        You can always reach out to us and our strong support team is ever ready to help you solve your queries.
                    </p>

                    <input
                        className="w-full h-[35px] sm:h-[45px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                        required
                        type="email"
                        placeholder="Your email"

                        id="email"
                        name="email"

                    />
                    <textarea
                        className="mt-5 w-full px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                        required
                        cols="30"
                        rows="6"
                        placeholder="Your message"
                        id="howcanwehelp"
                        name="howcanwehelp"


                    ></textarea>
                    <button className="bg-[#0C173A] px-10 rounded-full py-4 text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg">
                        Contact Sales

                    </button>


                </div>
            </div>
        </div>
    );
}

export default Foru;