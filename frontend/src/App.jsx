import React,{ useState } from "react";
import NavBar from "./Components/navBar";
import Home from "./Home/home";
import { BrowserRouter, Routes,Route, useLocation } from "react-router-dom";
import Rent from "./Rent/Rent";
import PG from "./Pg/Pg";
import AdminPage from "./Admin/AdminPage";
import Contact from "./contact/contact";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <ScrollToTop />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rent" element={<Rent/>} />
      <Route path="/pg" element={<PG/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
