import React from "react";
import Flight from "./flight-img.png"

const LocationCard = (props) => {
    return (
            <div className='flex flex-col mt-2 ml-10 justify-around p-5 drop-shadow-lg w-[700px] h-[130px] text-[#130223] bg-white rounded-2xl mb-8'>
                <div className="flex mt-4 flex-row">
                    <img src={Flight} className="w-6 mr-2" alt="flight-image" />
                    <h2 className="ml-1 mr-20 font-medium">{props.title}</h2>
                    <button className='text-white text-sm ml-96 py-2 px-8 rounded-lg bg-[#6041B0] w-28 h-8'>Track</button>
                </div>


                <div className="flex mt-2 flex-row">
                    <p className="text-xs mr-160">Varanasi(VNS), India 20:44</p>
                    <p className="ml-56 mr-3 text-xs">New Delhi(DEL), India 23:09</p>
                    <button className='text-white text-sm py-2 px-8  rounded-lg bg-[#6041B0]  w-28 h-8'>Add</button>
                </div>

                <div className='flex flex-row text-sm mt-1 items-center text-[#FF9529] mb-3'>
                    <h1 className='text-xs mr-64'>Date: {props.date}</h1>
                    <div className="font-small  rounded-lg text-xs ml-11 flex items-end bg-yellow-500  text-white">
                        Get Rs 340 off using MMTSUPREME
                    </div>
                </div>

            </div>
    )
}

export default LocationCard

