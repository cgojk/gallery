

import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryDetails from "./components/GalleryDetails";
import Layout from "./components/Layout";
import Home from "./home";

export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
      </Route>
    </Routes>
  );
}