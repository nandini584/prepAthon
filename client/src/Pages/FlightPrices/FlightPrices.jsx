import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAirports,getFlightPrices } from "./services/flights";




  



function FlightPrices() {
    const airports = getAirports();
    const [sourceCity, setSourceCity] = useState(airports[0].city);
    const [destinationCity, setDestinationCity] = useState(airports[1].city);
    const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
    const [additionalContent,setAdditionalContent] = useState(null); // State for the additional content [Change appears
    const secondDivRef = React.createRef();

    const handleActionWithSecondDiv = () => {
      if (secondDivRef.current) {
        secondDivRef.current.style.backgroundColor = "lightgray";
      }
    };
    const handleSourceCityChange = (event) => {
        const newSourceCity = event.target.value;
        setSourceCity(newSourceCity);

        if (newSourceCity === destinationCity) {
            alert("Source City and Destination City can't be the same");
        }
    };

    const handleDestinationCityChange = (event) => {
        const newDestinationCity = event.target.value;
        setDestinationCity(newDestinationCity);

        if (sourceCity === newDestinationCity) {
            alert("Source City and Destination City can't be the same");
        }
    };

    const handleSearchClick = () => {
        if (sourceCity === destinationCity) {
            alert("Source City and Destination City can't be the same");
        } else if (!selectedDate) {
            alert("Please select a date");
        } else {
          const prices=getFlightPrices(sourceCity,destinationCity,selectedDate);
          const content=prices.map((price)=>(
            <div>
              <p>{price.airline}</p>
              <p>{price.price}</p>
            </div>
          ));
          setAdditionalContent(content);
          // setAdditionalContent("Change appears");
        }
    };

    return (
        <div>
            <div>
                <label>
                    Source
                    <select
                        value={sourceCity}
                        onChange={handleSourceCityChange}
                    >
                        {airports.map((airport) => (
                            <option value={airport.city} key={airport.name}>
                                {airport.city}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Destination
                    <select
                        value={destinationCity}
                        onChange={handleDestinationCityChange}
                    >
                        {airports.map((airport) => (
                            <option value={airport.city} key={airport.name}>
                                {airport.city}
                            </option>
                        ))}
                    </select>
                </label>

                <div>
                    <label>Date: </label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select a date"
                    />
                </div>

                <button onClick={handleSearchClick}>Search</button>
            </div>
            <div>
              {additionalContent && <p>{additionalContent}</p>}
            </div>
        </div>
    );
}

export default FlightPrices;
