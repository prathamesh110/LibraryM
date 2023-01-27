import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Catalogue from "./pages/Catalogue";
import MyShelf from "./pages/MyShelf";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/catalogue" element={<Catalogue />}></Route>
          <Route path="/myshelf" element={<MyShelf />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
