import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCart(props){
    const {
     
     
      name,
        artist,
        imagelarge,
        imagesmall, 
        alt} = props;
    
    return (
     

               <>
               <div className="images__gallery--item">
                   
                      <picture className="image-wrapper">
                      <source media="(max-width: 768px)" srcSet={imagesmall} />
                      <source media="(min-width: 769px)" srcSet={imagelarge} />
                  <img
                      src={imagelarge || imagesmall}
                      alt={alt}
                      className="card__image"
    />
                </picture>
               
               <div className="wrapper__title--artist">
                  <h1 className="images__gallery--title text-2">{name}</h1>
                  <h2 className="images__gallery--artist text-5">{artist}</h2>
                </div>
             </div>
              
            
            </>
   


        
   
  
    
    
       


  );
}
