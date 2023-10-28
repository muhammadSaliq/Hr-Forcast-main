import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homeapage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import About from "./Pages/Aboutus/About";
import Addemployee from "./Pages/Addemployee/Addemployee";
import HrApp from "./Pages/dashboard/HrApp";

function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/aboutus"} element={<About />} />
              <Route path={"/Addemployee"} element={<Addemployee />} />
              <Route path={"/dashboard"} element={<HrApp />} />


            </Routes>
          </BrowserRouter>


    </div>
  );
}

export default App;
