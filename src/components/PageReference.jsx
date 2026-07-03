import React from "react";
import { Link } from "react-router-dom";

export default function PageReference(props){
    const {
     
     
        name,
        artist,
        imagelarge,
        imagesmall, 
        thumbnail,
        year,
        description,
        alt} = props;
    
    return (
     

               <>
               <div className="image__description--item">
                   
                      <picture className="image__title-thumbnail-wrapper">
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
                <div className="thumbnail">
                  <img src={thumbnail} className="image__description--thumbnail" alt="artist thumbnail" />
                </div>
                <div className="description__year">
                  <h3 className="image__description--year text-5">{year}</h3>
                </div>
                <div className="description__text">
                
                  <p>{description}</p>
                </div>
              
             </div>
              
              <button className="button__back">
                <Link to="/" className="button__back--link text-5">
                GO TO SOURCE
                </Link>
              </button>
            </>
   


        
   
  
    
    
       


  );
}
