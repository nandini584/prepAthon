import React,{useState} from 'react'
import Slider from "@mui/material/Slider";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SearchFilters = () => {
  const [range, setRange] = useState([5, 30]);
  function handleChanges(event, newValue) {
     setRange(newValue);
  }
  const triptype = [
    'Mountain', 'Beaches', 'Ocean'
  ];
  const defaultOption1 = triptype[0];
  const traveltype = [
    'Solo', 'Friends', 'Family'
  ];
  const defaultOption2 = traveltype[0];
  return (
    <div className='bg-white w-[20vw] h-[85vh] mr-8 mb-2 rounded-2xl drop-shadow-lg p-5 flex flex-col justify-around'>
      <h1 className='text-xl font-bold text-[#22114F]'>Search Filters</h1>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Location</h1>
      <input type="text" className='outline-none text-black text-base' placeholder='Your Location'/>
      </div>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Budget</h1>
        <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]} - {range[1]}
      </div>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Trip Type</h1>
      <Dropdown options={triptype} value={defaultOption1} placeholder="Select an option" />
      </div>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Duration</h1>
      <div className='flex flex-row justify-around items-center'>
        <input type="date" name="Start" id="" />
        <input type="date" name="End" id="" />
      </div>
      </div>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Travel Type</h1>
      <Dropdown options={traveltype} value={defaultOption2} placeholder="Select an option" />
      </div>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Activities</h1>

      </div>
      <div>
      <h1 className='text-base font-medium text-[#22114F]'>Transport Preferrence</h1>
      <div className='flex flex-col '>
        <div className='flex flex-row items-center flex-wrap justify-between'>

        <label htmlFor="">Train</label>
      <input type="checkbox" name="Train" id="" />
      <label htmlFor="">Flight</label>
      <input type="checkbox" name="Flight" id="" />
      <label htmlFor="">Private</label>
      <input type="checkbox" name="Private" id="" />
        </div>
      
  <div className='flex flex-row items-center flex-wrap justify-around'>
    <div>

      <label htmlFor="" className='mr-3'>Cab</label>
      <input type="checkbox" name="Cab" id="" />
    </div>
    <div>

      <label htmlFor="" className='mr-3'>Bus</label>
      <input type="checkbox" name="Bus" id="" />
    </div>

  </div>
      </div>
      </div>


    </div>
  )
}

export default SearchFilters