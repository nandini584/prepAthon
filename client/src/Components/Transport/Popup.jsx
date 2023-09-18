import React from 'react';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>
      <button className='text-[#6041B0] bg-white border border-[#6041B0] text-sm py-2  items-center mr-2 justify-center inline-flex flex-col  rounded-md w-32 h-9'>Mumbai  <br />
        Delhi </button>
    </div>
    {/* <div className='button '>Popup content here !!</div> */}
  </Popup>
);
