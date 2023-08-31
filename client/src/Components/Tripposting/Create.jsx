import React,{useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Create = () => {
  const [selectedImage, setSelectedImage]= useState(null)
  const handleImageChange=(e)=>{
    const file=e.target.files[0]
    setSelectedImage(file)
  }
  return (
    <div>
       
        <Popup trigger={ <button className='text-white text-sm py-3  font-bold rounded-lg bg-[#6041B0] w-32'>Create Trip</button>} position="right">
        <div className='flex flex-row items-center justify-around p-5 drop-shadow-lg w-[700px] h-[180px] text-[#130223] bg-white rounded-2xl'>
        <div className='flex flex-col'>
            <h1 className='text-xl font-bold mb-1'><input type="text" placeholder='Trip name' className='outline-none'/></h1>
            <h1 className='text-base opacity-60 mb-3'><input type="text" placeholder='Trip Description' className='outline-none'/></h1>
            <div className='flex flex-row text-sm items-center text-[#FF9529] mb-3'>
                <h1 className='mr-28'>Date: <input type="date" name="" id="" /></h1>
                <h1>Destination: <input type="text" placeholder='Your Destination'/></h1>
            </div>
            <button className='text-white text-sm py-2 px-8 rounded-lg bg-[#6041B0] w-28'>Done</button> 
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

