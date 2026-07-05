import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryDetails from "./components/GalleryDetails";
import {AnimatePresence} from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";


import Home from "./home";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery/:id" element={<GalleryDetails />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
