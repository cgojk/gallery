import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

export default function Navigation(){
    return (
 <section className="navigation">
   
       <nav className="navigation container">
        <img src={logo} className="logo-image" loading="lazy" alt="gallery title logo " />
        <button className="links__startslideshow">
           START SLIDESHOW
            </button>
        
       </nav>
    
  
     
    
       
</section>

  );
}
