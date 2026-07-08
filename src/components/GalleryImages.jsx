import React from "react";
import GalleryCart from "./GalleryCart";
import { Link } from "react-router-dom";
import data from "../data.json";



export default function GalleryImages() {




console.log(data); 
  
  return (
  <div className="gallery__images container">
    {data.map((item) => (
      <Link
          key={item.id}
          to={`/gallery/${item.id}`}
          className="links__description"
        >
        <GalleryCart

          key={item.id}
          name={item.name}
          artist={item.artist.name}
          image={item.images.gallery}
         
          alt={item.name}
        />
         </Link>
      ))}

  </div>

  );
  }