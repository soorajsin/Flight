import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTab from "./Components/Navbar/NavbarTab";
import FooterTab from "./Components/Footer/FooterTab";
import Booking from "./Components/FlightBook/Booking";
import Dash from "./Components/Dashboard/Dash";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTab />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
        <FooterTab />
      </BrowserRouter>
    </>
  );
}

export default App;
