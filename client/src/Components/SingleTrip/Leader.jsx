import React from "react";

const Leader = (props) => {
    return (
      <div>
      <div className='w-[50%] h-20 mb-8  mx-32 content-center drop-shadow-md flex flex-row bg-white rounded-2xl px-8 py-4'>
          <h1 className='text-2xl mt-2 mb-2 font-bold items-left text-[#130223]'>Trip Leader</h1>
          <p className="ml-64 mt-3 text-sm">{props.contact} </p>
      </div>
      </div>
    )
}

export default Leader;