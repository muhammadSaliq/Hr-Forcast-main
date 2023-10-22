import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homeapage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Aboutus from "./Pages/Aboutus/aboutus";
import Addemployee from "./Pages/Addemployee/Addemployee";

function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/aboutus"} element={<Aboutus />} />
              <Route path={"/Addemployee"} element={<Addemployee />} />


            </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
