import React,{useState} from 'react'
import NotificationTemp from "../Components/Notification/NotificationTemp"
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'

const Notifications = () => {
  const [notification, setNotification] = useState([])
  return (
    <div className='flex flex-row w-[95vw] h-[100vh]'>
      <Navbar/>

        <div className=' flex flex-col '>
          <Topbar />
          <div className='mx-20'>

            <h1 className='text-2xl pb-10 font-bold text-[#22114F]'>Notifications</h1>
            <div className="mb-10 overflow-y-scroll h-[69vh]">
              {
                Array.from({length:10},(_,index)=>(
                  <div key={index} >
                  <NotificationTemp title="Emergency Notification"
                  message="Discover exciting destinations, unbeatable travel deals, and unforgettable experiences with our travel app."
                  /></div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Notifications