import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/public/assets/shared/logo.svg";


export default function Navigation(){
    return (
 <section className="navigation">
   
       <nav className="nav container">
        <img src={logo} className="logo-image" loading="lazy" alt="gallery title logo " />
        <Link to="/description_image" className="links__description">
        <button  className="links__startslideshow">
           START SLIDESHOW
            </button>
        </Link>
        
       </nav>
    
  
     
    
       
</section>

  );
}
