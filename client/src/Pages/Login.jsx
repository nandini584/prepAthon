import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const googleAuth=()=>{
        window.open(
            `${import.meta.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )
    }
  return (
    <div className="flex flex-col items-center justify-center">
            <h1 className="font-jost font-black text-5xl flex flex-row items-center justify-center mb-3">Hi There<span className="text-main">!</span> </h1>
            <h2 className='font-inter font-regular text-sm flex flex-row items-center justify-center mb-5'>This is a placeholder. This is a placeholder.</h2>
            <div className='w-[519px] border-none bg-[#EAE8E8] rounded-full flex flex-row items-center justify-around py-3 mb-4'>
                <Link to="/signin"><span className='font-jost font-medium text-sm'>Sign in</span></Link>
                <Link to="/signup"><span className='font-jost font-medium text-sm '>Sign up</span></Link>
            </div>
            <div className='flex flex-row justify-center items-center border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] mb-2'>
               
                <p className='pl-4' onClick={googleAuth}>Login with Google</p>
            </div>
            <span className='flex flex-row justify-center items-center font-inter font-regular text-sm mb-7'>or</span>
            <form>
            <div className='flex flex-col '>
                <input type="text" name='Email' placeholder='Your Email' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-2'/>
                <input type="text" name='Password' placeholder='Password' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-10'/>
            </div>
            <div className="flex flex-row items-center justify-center font-inter font-bold text-sm ">
            <Link to=""><button type="submit" >Sign in</button></Link>
            </div>
            </form>

        </div>
  )
}

export default Login