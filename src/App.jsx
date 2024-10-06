import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Vision from "./components/Vision";


function App() {



  return (
    <Routes>
            <Route path="/"  element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/Contactus" element={<Contact/>}/>
            <Route path="/ourvision" element={<Vision/>}/>
         
            </Route>

    </Routes>
  );
}

export default App;
