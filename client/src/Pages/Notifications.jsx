import React from "react";
import NotificationTemp from "../Components/Notification/NotificationTemp";
// import Navbar from "../Components/Navbar";

function Notifications(){
    return (
        <div>
            {/* <Navbar /> */}
            <h1 className='text-2xl py-10 font-bold mx-10 text-[#130223]'>Notifications</h1>
            <div className="mb-10">
            <NotificationTemp />
            <NotificationTemp />
            <NotificationTemp />
            <NotificationTemp />
            <NotificationTemp />
            <NotificationTemp />
            </div>
        </div>
    )
}

export default Notifications;