import React,{useState} from 'react'
import Popup from 'reactjs-popup';
import { useTrip } from '../../context/TripContext';
import 'reactjs-popup/dist/index.css';
const Create = () => {
  const {addTrip}=useTrip()
  const [tripname, setTripname]= useState('')
  const [tripdescription, setTripdescription]= useState('')
  const [tripdestination, setTripdestination]= useState('')
  const [tripdate, setTripdate]= useState('')
  const [tripimg, setTripimg]= useState('')
  const handleClick=()=>{
    const newTrip={
    tripname,
    tripdescription,
    tripdestination,
    tripdate,
    tripimg
    }
    addTrip(newTrip)
    setTripname('')
    setTripdescription('')
    setTripdestination('')
    setTripdate('')
    setTripimg('')

  }
  const [selectedImage, setSelectedImage]= useState(null)
  const handleImageChange=(e)=>{
    const file=e.target.files[0]
    setSelectedImage(file)
  }
  const handleTripname=(e)=>{
    setTripname(e.target.value)
  }
  const handleTripdescription=(e)=>{
    setTripdescription(e.target.value)
  }
  const handleTripdestination=(e)=>{
    setTripdestination(e.target.value)
  }
  const handleTripdate=(e)=>{
    setTripdate(e.target.value)
  }
  return (
    <div>
        <Popup trigger={ <button className='text-white text-sm py-3  font-bold rounded-lg bg-[#6041B0] w-32'>Create Trip</button>} position="right">
        <div className='flex flex-row items-center justify-around p-5 drop-shadow-lg w-[700px] h-[180px] text-[#130223] bg-white rounded-2xl'>
        <div className='flex flex-col'>
            <h1 className='text-xl font-bold mb-1'><input type="text" placeholder='Trip name' className='outline-none' value={tripname} onChange={handleTripname}/></h1>
            <h1 className='text-base opacity-60 mb-3'><input type="text" placeholder='Trip Description' className='outline-none' value={tripdescription} onChange={handleTripdescription}/></h1>
            <div className='flex flex-row text-sm items-center text-[#FF9529] mb-3'>
                <h1 className='mr-28'>Date: <input type="date" name="" id="" value={tripdate} onChange={handleTripdate}/></h1>
                <h1>Destination: <input type="text" placeholder='Your Destination' value={tripdestination} onChange={handleTripdestination}/></h1>
            </div>
            <button className='text-white text-sm py-2 px-8 rounded-lg bg-[#6041B0] w-28' onClick={handleClick}>Done</button> 
        </div>
        <div>
            <input type="file" name="" id="" accept='image/*' onChange={handleImageChange}/>
            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
        </div>
    </div>
  </Popup>
    </div>
  )
}

export default Create

