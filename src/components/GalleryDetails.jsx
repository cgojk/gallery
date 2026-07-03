import React from 'react';
import {Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import data from '../data.json';

export default function GalleryDetails() {
    const params = useParams()
    console.log(params);
    const {id} = params;
    
      const paintingData = data.find(item => item.id === Number(id));
      console.log(paintingData);

    return (
       
             
        
                       <>
                       <div className="image__description--item">
                           
                              <picture className="image__title-thumbnail-wrapper">
                              <source media="(max-width: 768px)" srcSet={paintingData?.images?.hero.small} />
                              <source media="(min-width: 769px)" srcSet={paintingData?.images?.hero.large} />
                          <img
                              src={paintingData?.images?.hero.large || paintingData?.images?.hero.small}
                              
                              className="card__image"
            />
                        </picture>
                         <div className="wrapper__title--artist">
                          <h1 className="images__gallery--title text-2">{paintingData?.name}</h1>
                          <h2 className="images__gallery--artist text-5">{paintingData?.artist?.name}</h2>
                        </div>
                        <div className="thumbnail">
                          <img src={paintingData?.images?.thumbnail} className="image__description--thumbnail" alt="artist thumbnail" />
                        </div>
                        <div className="description__year">
                          <h3 className="image__description--year text-5">{paintingData?.year}</h3>
                        </div>
                        <div className="description__text">
                        
                          <p>{paintingData?.description}</p>
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
