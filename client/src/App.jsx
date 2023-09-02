import Community from './Pages/Community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tripposting from './Pages/Tripposting';
import Home from './Pages/Home';
import Tags from './Pages/Tags';
import Notification from './Pages/Notifications';
import Location from './Pages/Location';
import UserProfile from './Pages/UserProfile';
import Transport from './Pages/Transport';
import FlightPrices from './Pages/FlightPrices/FlightPrices';

import LiveLocation from './Pages/LiveLocation';

import SingleTrip from './Pages/SingleTripPlanning';

function App() {
  return (
    <div className="bg-[#F2F3F7]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/location" element={<Location />} />
          <Route path="/tripposting/:communityid" element={<Tripposting />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/flights" element={<FlightPrices />} />

          <Route path="/livelocation" element={<LiveLocation />} />

          <Route path="/singletrip/:tripid" element={<SingleTrip />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App