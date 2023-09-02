import React from "react";
import LocationCard from "../Components/Livelocation/Card"
import Topbar from "../Components/Topbar";
import Navbar from '../Components/Navbar';


const Location = () => {
    return (
        <div className='flex flex-row '>
            <Navbar />
            
            <div className="flex flex-col"><Topbar />
            <div className="overflow-y-scroll h-[80vh]">
              {
                Array.from ({length:10},(_,index)=>(
                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />
                ))
              }  
            </div>
            </div>

            
        </div>

    )
}

export default Location
