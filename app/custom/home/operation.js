import React from 'react';
const Operation = (props) => {

    return (
        <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
              {props.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-9">
                {props.items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mt-4">
                        <img src={`https://cw-strapi.onrender.com${item.image.url}`} alt={item.title} className="mx-auto h-24" />
                        <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                        <p className="text-gray-600">{item.Description}</p>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Operation;