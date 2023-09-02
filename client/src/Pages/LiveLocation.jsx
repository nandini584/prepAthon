import React from "react";
import LocationCard from "../Components/Livelocation/Card"
import Topbar from "../Components/Topbar";
import Navbar from '../Components/Navbar';


const LiveLocation = () => {
    return (
        <div className='flex flex-row '>
            <Navbar />
            
            <div><Topbar />
                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />
                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />

                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />
                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />
                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />
                <LocationCard
                    title="IndiGo"
                    date="25th November 2024"
                />
            </div>

            
        </div>

    )
}

export default LiveLocation
