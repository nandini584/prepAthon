import React,{createContext, useContext, useState } from 'react'
const TripContext = createContext()
export const useTrip =()=>{
    return useContext(TripContext)
}
export function TripProvider({children}){
    const [tripdata, setTripdata]= useState([])
    const addTrip=(newTrip)=>{
        setTripdata([...tripdata, newTrip])
    }
    return (
        <TripContext.Provider value={{tripdata, addTrip}}>
            {children}
        </TripContext.Provider>
    )
}

export default TripContext