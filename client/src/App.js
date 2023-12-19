import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTab from "./Components/Navbar/NavbarTab";
import FooterTab from "./Components/Footer/FooterTab";
import Booking from "./Components/FlightBook/Booking";
import Dash from "./Components/Dashboard/Dash";
import Register from "./Components/Account/Register";
import Login from "./Components/Account/Login";
import AnotherTab from "./Components/ErrorPage/AnotherTab";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTab />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<AnotherTab/>}/>
        </Routes>
        <FooterTab />
      </BrowserRouter>
    </>
  );
}

export default App;
