import React from "react";
import GalleryCart from "./GalleryCart";
import { Link } from "react-router-dom";
import data from "../data.json";



export default function GalleryImages() {


    React.useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, []);

console.log(data); 
  
       return (
  <div className="gallery__images">
    {data.map((item) => {
      console.log(item);
       console.log(item.images.hero.large); 

      return (
        <GalleryCart
          key={item.id}
          name={item.name}
          artist={item.artist.name}
          imagelarge={item.images.hero.large}
          imagesmall={item.images.hero.small}
          alt={item.name}
        />
      );
    })}
  </div>
)
}