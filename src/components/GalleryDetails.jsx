import React from 'react';
import {Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import data from '../data.json';
import { useNavigate } from 'react-router-dom';


const arrowPrevious = ("/public/assets/shared/icon-back-button.svg");

const arrowNext = ("/public/assets/shared/icon-next-button.svg");

export default function GalleryDetails() {
    const navigate = useNavigate();
    const params = useParams()
    console.log(`the params are: ${JSON.stringify(params)}`);
    const {id} = params;

    const currentIndex = data.findIndex(
     item => item.id === Number(id)
      );
    
      const paintingData = data[currentIndex];
      console.log(paintingData);

    //   const [currentPage,setCurrentPage]= React.useState(Number(id))
    //   console.log(`the id is :${id} is ${currentPage}`);
      
const handlePreviousClick = () => {
    const prevIndex =
    currentIndex === 0 ? 
    data.length - 1 : currentIndex - 1;

  const prevId = data[prevIndex].id;

  navigate(`/gallery/${prevId}`);
};






const handleNextClick = () => {

  
  const nextIndex = (currentIndex + 1) % data.length;
  const nextId = data[nextIndex].id;

  navigate(`/gallery/${nextId}`);

}
     
   


    return (
       
             
        
                       <>
                        <button className="nav-button left" onClick={handlePreviousClick}>
                                 <img src={arrowPrevious} alt="Previous" />
               </button>
               <button className="nav-button right" onClick={handleNextClick}>
                  <img src={arrowNext} alt="Next" />
                </button>

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
