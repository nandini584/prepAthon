import React from "react";
import TripTemp from "../Components/SingleTrip/Triptemp";
import Destination from "../Components/SingleTrip/Destination";
import EssentialandPrice from "../Components/SingleTrip/EssentialandPrice";
import Leader from "../Components/SingleTrip/Leader";
import Cal from "../Components/SingleTrip/calender";
import Members from "../Components/SingleTrip/Members";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Navbar";
const SingleTrip = () => {
    return (
    <div className="flex flex-row">
        <Sidebar/>
 <div className="w-full h-[100vh] overflow-y-scroll">
        
        <Topbar/>
         <div className="flex">
         <TripTemp
             name="Trip Name"
             message="Kuch to msg hoga hi "
         />
         <Cal />
     </div>
     <div className="flex">
         <Destination
             destinationDetails="yaha destination ki details hongi"
             dateTimeDetails="kab jaana hai kabtak rehna hai"
         />
        
     </div>

         <EssentialandPrice
             essential1="Pattagobhi"
             essential2="Pattagobhi"
             essential3="Pattagobhi"
             arTime="4:55"
             drTime="6:23"
             startPoint="Varanasi"
             endPoint="Mere ghar"
             priceDetails1="main nahin bataunga"
             priceDetails2="main nahin bataunga"
             priceDetails3="main nahin bataunga"
             actDetails1="main nahin bataunga"
             actDetails2="main nahin bataunga"
             actDetails3="main nahin bataunga"
         />

         <Leader
             contact="antonilevissuier123@gmail.com"
         />

         
     </div>
    </div>
       
    )
}

export default SingleTrip;