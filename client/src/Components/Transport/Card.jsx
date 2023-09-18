import React from "react";
import Flight from "./flight-img.png"
import Popup from "./Popup";

const TransportCard = (props) => {
    return (
        // <div className="flex flex-rox">
        // <div className='w-[100%] h-32 mb-8 mr-96 mx-32 content-center drop-shadow-md flex  bg-white rounded-2xl px-8 py-4'>
        // <img src={Flight} className="w-6 h-6"  alt="flight-image" />
        // <h2 >InDigo</h2>
        // </div>
        // </div>
        <div className='flex flex-col mt-4 ml-10 mb-2 justify-around pt-0 pl-5 drop-shadow-lg w-[750px] h-[300px] text-[#130223] bg-white rounded-2xl'>
            <div className="flex flex-row mt-4 ml-4">
                <img src={Flight} className="w-6 h-5 mr-2" alt="flight-image" />
                <h2 className="ml-1 font-medium">IndiGo</h2>
                {/* <button className='text-white text-sm ml-96 py-2 px-8 rounded-lg bg-[#6041B0] w-28 h-8'>Track</button> */}
            </div>


            <div className="flex mt-2 mb-2 flex-row  ml-4">
                <p className="text-xs  mr-160">Varanasi(VNS), India 20:44</p>
                <p className="ml-56 mr-3 text-xs">New Delhi(DEL), India 23:09</p>
                {/* <button className='text-white text-sm py-2 px-8  rounded-lg bg-[#6041B0]  w-28 h-8'>Add</button> */}
            </div>

            <div className='flex flex-row text-sm mt-2  ml-4 items-center text-[#FF9529] mb-4'>
                <h1 className='text-sm mr-64'>Date: {props.date}</h1>
                <div className="font-small w-96 h-6 pl-2 rounded-l-lg flex justify-left rounded-r-none text-xs ml-12 items-center bg-yellow-500  text-white">
                    Get Rs 340 off using MMTSUPREME
                </div>
            </div>

            <div className="flex flex-row ml-4 mb-3">
                <button className='text-white text-sm py-2 flex items-center mr-2 justify-center  rounded-md bg-[#6041B0]  w-44 h-5'>Flight Information</button>
                <button className='text-[#6041B0] text-sm py-2 flex items-center ml-1 justify-center  rounded-md bg-white border border-[#6041B0] w-44 h-5'>Fare</button>
                <button className='text-[#6041B0] text-sm py-2 flex items-center ml-3 justify-center  rounded-md bg-white border border-[#6041B0] w-44 h-5'>Pulse</button>
                <button className='text-[#6041B0] text-sm py-2 flex items-center ml-3 mr-3 justify-center  rounded-md bg-white border border-[#6041B0] w-44 h-5'>Baggage Rules</button>
            </div>

            <div className='flex  flex-col mt-2 ml-4 justify-around pt-0 pl-5 border border-grey w-[680px] h-[130px] text-[#130223] bg-white rounded-2xl mb-8'>
                <div className="flex items-center flex-row ml-2">
                    <img src={Flight} className="w-6 h-5 mr-2 mt-2" alt="flight-image" />
                    <h2 className="ml-1 font-medium">IndiGo</h2>
                    <p className="text-xs ml-2 mr-5">Varanasi(VNS), India 20:44</p>
                    <p className="">.......o.........o.........</p>
                    <p className="ml-5 text-xs">New Delhi(DEL), India 23:09</p>
                    {/* <button className='text-white text-sm ml-96 py-2 px-8 rounded-lg bg-[#6041B0] w-28 h-8'>Track</button> */}

                </div>
                <div className="flex flex-row text-[#FF9529] ml-2">
                    <h1 className='text-sm  mr-64'>Date: {props.date}</h1>
                    <Popup />
                </div>
            </div>

        </div>
    )
}

export default TransportCard;

// className="ml-1 mr-20 font-medium"