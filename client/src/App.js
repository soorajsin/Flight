import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTab from "./Components/Navbar/NavbarTab";
import FooterTab from "./Components/Footer/FooterTab";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTab />
        <Routes>
          <Route></Route>
        </Routes>
        <FooterTab />
      </BrowserRouter>
    </>
  );
}

export default App;
