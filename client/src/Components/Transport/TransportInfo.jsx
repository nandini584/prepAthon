import React from "react";

const TransportInfo = (props) => {
    return (
        <div className='flex flex-col mt-36 mr-8 justify-around pt-0 pl-5 drop-shadow-lg w-[380px] h-[700px] text-[#130223] bg-white rounded-2xl mb-8'>
            <div>
                <h1 className="text-xl">Flights</h1>  
            </div>
            <div className="flex flex-row">
                <p className="text-xs">Recent Searches</p>
                <button className='text-white text-sm py-2  items-center mr-2 justify-center inline-flex flex-col  rounded-md bg-slate-400  w-32 h-9'>Mumbai    Delhi <br></br>
                24 Aug'23</button>
                <button className='text-white text-sm py-2  items-center mr-2 justify-center inline-flex flex-col  rounded-md bg-slate-400  w-32 h-9'>Mumbai    Delhi <br></br>
                24 Aug'23</button>
                <hr class="border-t border-gray-400" />
            </div>
        </div>
    )
}

export default TransportInfo