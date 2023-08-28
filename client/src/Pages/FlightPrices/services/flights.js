function getAirports(){
    const airports=[
        {name: "BOS", city: "Boston"},
        {name: "LAX", city: "Los Angeles"},
        {name: "SFO", city: "San Francisco"},
        {name: "ORD", city: "Chicago"},
        {name: "JFK", city: "New York"},
        {name: "ATL", city: "Atlanta"},
        {name: "DEN", city: "Denver"},
        {name: "LAS", city: "Las Vegas"},
        {name: "SEA", city: "Seattle"},
        {name: "CLT", city: "Charlotte"},
        {name: "MCO", city: "Orlando"},
        {name: "PHX", city: "Phoenix"},
    ]
    return airports;
}

function getFlightPrices(sourceCity, destinationCity,departureDate){
    const prices=[
        {airline: "Delta", price: 200},
        {airline: "United", price: 250},
        {airline: "American", price: 300},
        {airline: "JetBlue", price: 350},
        {airline: "Southwest", price: 400},
        {airline: "Spirit", price: 450},
        {airline: "Frontier", price: 500},
        {airline: "Alaska", price: 550},
        {airline: "Hawaiian", price: 600},
    ]
    return prices;
}

export{
    getAirports,
    getFlightPrices
}