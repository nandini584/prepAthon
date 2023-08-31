import React from 'react'
import NotificationTemp from "../Components/Notification/NotificationTemp"

const Notifications = () => {
  return (
    <div>
            {/* <Navbar /> */}
            <h1 className='text-2xl py-10 font-bold mx-10 text-[#130223]'>Notifications</h1>
            <div className="mb-10">
            <NotificationTemp
            message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app. "
            />
            <NotificationTemp
            message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app. "
            />
            <NotificationTemp
            message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app. "
            />
            <NotificationTemp
            message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app. "
            />
            <NotificationTemp
            message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app. "
            />
            <NotificationTemp
            message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app. "
            />

            </div>
        </div>
  )
}

export default Notifications