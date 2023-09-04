import { useState } from 'react';
import Calendar from 'react-calendar';

function Cal() {
    const [value, onChange] = useState(new Date());
  
    return (
     
        <div className="w-72 ml-48 rounded-2xl bg-gray-200">
        <Calendar onChange={onChange} value={value} />
      
      </div>
    )
  }
  
  export default Cal;
  