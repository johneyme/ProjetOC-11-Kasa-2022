import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/404";
import About from "./pages/About";
import RentalDetails from "./pages/RentalDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="a-propos" element={<About />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="fiche-logement" element={<RentalDetails />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
