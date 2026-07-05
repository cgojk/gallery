import React from 'react';
import {Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import data from '../data.json';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import BarAnimation from './BarAnimation';
import ModalImage from './ModalImage';


import { useState } from 'react';


const arrowPrevious = ("/public/assets/shared/icon-back-button.svg");
const viewimage = ("/public/assets/shared/icon-view-image.svg");

const arrowNext = ("/public/assets/shared/icon-next-button.svg");

export default function GalleryDetails() {

    const [direction, setDirection] = React.useState(1);
    const navigate = useNavigate();
    const params = useParams()
    console.log(`the params are: ${JSON.stringify(params)}`);
    // checking if it works by logging the params to the console. It should show the id of the painting in the URL.
    const {id} = params;

    const currentIndex = data.findIndex(
     item => item.id === Number(id)
    
      );
    
      const paintingData = data[currentIndex];
      console.log(paintingData);

      
const handlePreviousClick = () => {
    setDirection(-1);
    const prevIndex =
    currentIndex === 0 ? 
    data.length - 1 : currentIndex - 1;

  const prevId = data[prevIndex].id;

  navigate(`/gallery/${prevId}`);
};

const progress = ((currentIndex +1) / data.length) * 100;

console.log(`the bar progress is: ${progress}`);


const handleNextClick = () => {
    setDirection(1);
    const nextIndex = (currentIndex + 1) % data.length;
    const nextId = data[nextIndex].id;

  navigate(`/gallery/${nextId}`);

}
     
const [isModalOpen, setIsModalOpen] = useState(false);  

const openModal = () => {
    setIsModalOpen(true);
    
}
const closeModal = () => {
    setIsModalOpen(false);
}

    return (

     
                     <motion.div
                    initial={{ opacity: 0, x: 50  * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 * direction }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
               
            <div className="wrapper__content container">
                        {paintingData ? (
                            <>
                    <div className="image__item ">
                        
                            <picture className="image__hero-wrapper">
                                <source media="(max-width: 768px)" srcSet={paintingData?.images?.hero.small} />
                                <source media="(min-width: 769px)" srcSet={paintingData?.images?.hero.large} />
                                <img
                                src={paintingData?.images?.hero.large || paintingData?.images?.hero.small}
                                
                            className="card__image"/>
                            </picture>
                            <button
                               className="view-image-btn"
                              onClick={openModal}
                            >
                              <img
                              className="view-image-icon"
                              src={viewimage}
                              alt="A button to click on and see the image bigger"
                            className="view-image-icon"
                            />
                            <span className="view-image-text text-5">VIEW IMAGE</span>
                           </button>
                              
                            {isModalOpen && (
                                <ModalImage
                                  imagelarge={paintingData.images.gallery}
                                 alt={paintingData.name}
                                  onClose={closeModal}
/>
                                )}
                              <div className="wrapper__title--artist">
                               <h1 className="title text-2">{paintingData?.name}</h1>
                               <h2 className="artist text-5">{paintingData?.artist?.name}</h2>
                            </div>
                            
                            
                       
                 </div>

                  
                        

                        <div className="description__text">
                             <div className="thumbnail">
                                <img src={paintingData?.images?.thumbnail} className="image__description--thumbnail" alt="artist thumbnail" />
                              </div>
                              <h2 className="image__description--year text-1">{paintingData?.year}</h2>
                     
                        
                          <p className="text">{paintingData?.description}</p>
                        </div>
                            </>
                        ):(
                            <h2>loading...</h2>
                        )}

                         <button className="button__back">
                        <Link to="/" className="button__back--link text-5">
                        GO TO SOURCE
                        </Link>
                      </button>

                </div>

                     
             <div className="footer__slide">
            <BarAnimation progress={progress} />
             </div>
                
 <div className="wrapper__footer--gallery">
                     <div className="footer__slied-nav">
                        <div className="wrapper__footer_name--artist">
                          <h1 className="title text-2">{paintingData?.name}</h1>
                          <h2 className="artist text-5">{paintingData?.artist?.name}</h2>
                        </div>
                        <div className="direction__slides">
                            <button className="nav-button left" onClick={handlePreviousClick}>
                                <img src={arrowPrevious} alt="Previous" />
                            </button>
                            <button className="nav-button right" onClick={handleNextClick}>
                                <img src={arrowNext} alt="Next" />
                            </button>
                        </div>
                  </div>
    </div>                
</motion.div>
           
        
        
    );
}
