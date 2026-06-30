import React from "react";
import { Link } from "react-router-dom";



// import starryNightmobile from "../assets/starry-night/hero-small.jpg";
// import starryNightdesktop from "../assets/starry-night/hero-large.jpg";

// import girlpearlmobile from "../assets/girl-with-pearl/hero-small.jpg";
// import girlpearldesktop from "../assets/girl-with-pearl/hero-large.jpg";

// import guernicamobile from "../assets/guernica/hero-small.jpg";
// import guernicedesktop from "../assets/guernica/hero-large.jpg";

// import patientmobile  from "../assets/penitent-magdalene/hero-small.jpg";
// import patientdesktop from "../assets/penitent-magdalene/hero-large.jpg";


// import thestormmobile from "../assets/the-storm-on-the-sea-of-galilee/hero-small.jpg";
// import thestormdesktop from "../assets/the-storm-on-the-sea-of-galilee/hero-large.jpg";



// import theswinmobile from "../assets/the-swing/hero-small.jpg";
// import theswindesktop from "../assets/the-swing/hero-large.jpg";

// import vangoghmobile from "../assets/van-gogh-self-portrait/hero-small.jpg";
// import vangoghdesktop from "../assets/van-gogh-self-portrait/hero-large.jpg";


// import thesleepygibtsymobile from "../assets/the-sleeping-gypsy/hero-small.jpg";
// import thesleepygibtsydesktop from "../assets/the-sleeping-gypsy/hero-large.jpg";

// import thenightcafemobile from "../assets/the-night-cafe/hero-small.jpg";
// import thenightcafedesktop from "../assets/the-night-cafe/hero-large.jpg";

// import thebasketofapples from "../assets/the-basket-of-apples/hero-small.jpg";
// import thebasketofapplesdesktop from "../assets/the-basket-of-apples/hero-large.jpg";

// import theboyintheredvestmobile from "../assets/the-boy-in-the-red-vest/hero-small.jpg";
// import theboyintheredvestdesktop from "../assets/the-boy-in-the-red-vest/hero-large.jpg";

// import themonalisamobile from "../assets/mona-lisa/hero-small.jpg"
// import themonalisadesktop from "../assets/mona-lisa/hero-large.jpg"

// import ladywitherminemobile from "../assets/lady-with-an-ermine/hero-small.jpg";
// import ladywitherminedesktop from "../assets/lady-with-an-ermine/hero-large.jpg";


export default function GalleryCart(props){
    const {
     
     
      name,
        artist,
        imagelarge,
        imagesmall, 
        alt} = props;
    
    return (
     

               <>
               
                <li  className="images__gallery--item">
                  <picture className="card-recipe__image-wrapper">
                <source media="(max-width: 768px)" srcSet={imagesmall} />
                <source media="(min-width: 769px)" srcSet={imagelarge} />
               <img
                  src={imagelarge || imagesmall}
                  alt={alt}
                  className="card-recipe__image"
/>
            </picture>
            
             <h1 className="images__gallery--title">{name}</h1>
             <h2 className="images__gallery--artist">{artist}</h2>
             </li>
              
            
            </>
   


        
   
  
    
    
       


  );
}
