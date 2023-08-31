import React from "react";
import img1 from "./img1.png"

const Members =(props)=>{
    return (
        <div className='w-72 ml-64 h-36 mb-8 mt-4 content-center drop-shadow-md flex flex-row bg-white rounded-2xl px-8 py-4'>
        <h1 className='text-2xl mt-2 mb-2 font-bold items-left text-[#130223]'>Members</h1>
       
        <p className="flex">
        
        <img class="h-8 rounded-full" src={img1} />
        <img class="h-8 rounded-full" src={img1} />

        <img class="h-8 rounded-full" src={img1} />
        <img class="h-8 rounded-full" src={img1} />
        <img class="h-8 rounded-full" src={img1} />
        </p>
        {/* <img class="rounded-full" src={props.img2} />
        <img class="rounded-full" src={props.img3} />
        <img class="rounded-full" src={props.img4} />
        <img class="rounded-full" src={props.img5} />
        <img class="rounded-full" src={props.img6} /> */}
        </div>
    )
    
          
    //       <p className="ml-64 mt-3 text-sm">{props.contact} </p>
    //   </div>
}

export default Members