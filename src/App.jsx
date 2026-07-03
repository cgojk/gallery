import React from "react";
import { Routes, Route } from "react-router-dom";
// import ImageDescription from "./ImageDescription";
import GalleryDetails from "./components/GalleryDetails";


import Home from "./home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/description_image" element={<ImageDescription />} /> */}
      <Route path="/gallery/:id" element={<GalleryDetails />} />
    </Routes>
  );
}