import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/public/assets/shared/logo.svg";


export default function Navigation(){
    return (
 <section className="navigation">
    <nav className="nav container">
          <Link to="/home" className="links__description">
          <img src={logo} className="logo-image" loading="lazy" alt="gallery title logo " />
          </Link>
            <Link to="/gallery/1" className="links__description">
          <button  className="links__startslideshow text-5">
            START SLIDESHOW
          </button>
          </Link>
      </nav>
  </section>

  );
}
