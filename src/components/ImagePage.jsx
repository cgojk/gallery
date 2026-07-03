// import React from "react";
// import PageReference from "./PageReference";
// import { Link } from "react-router-dom";
// import data from "../data.json";
// import { useState, useEffect } from "react";
// import arrowPrevious from "/public/assets/shared/icon-back-button.svg"
// import arrowNext from "/public/assets/shared/icon-next-button.svg";

// import { useLocation } from "react-router-dom";




// export default function ImagePage() {

//   const location = useLocation();

//       React.useEffect(() => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }, []);


//   const [currentPageIndex, setCurrentPageIndex] =  useState(location.state.index);
//   // console.log(data[currentPageIndex].imageSrc);

//   const currentPage = data[currentPageIndex];


// // previous and next navigaiton handlers
// const handlePreviousClick = () => {
//     setCurrentPageIndex(
//         currentPageIndex === 0 ? data.length - 1 : currentPageIndex - 1
//     );
// };

// const handleNextClick = () => {
//     setCurrentPageIndex((currentPageIndex + 1) % data.length);
// };


// console.log(location);
// console.log(location.state);
// console.log(currentPage);
// console.log(currentPage.name);
// console.log(currentPage.artist.name);
// console.log(currentPage.images.hero.large);



//      console.log(currentPageIndex);





// console.log(data); 
  
//        return (
//         <>
//         <button className="nav-button left" onClick={handlePreviousClick}>
//                     <img src={arrowPrevious} alt="Previous" />
//                 </button>
//                 <button className="nav-button right" onClick={handleNextClick}>
//                     <img src={arrowNext} alt="Next" />
//                 </button>
//   <div className="description__image">
//     {/* {data.map((item) => {
//       console.log(item);
//        console.log(item.images.hero.large);  */}

   
//         <PageReference
//           key={currentPage.id}
//           name={currentPage.name}
//           artist={currentPage.artist.name}
//           imagelarge={currentPage.images.hero.large}
//           imagesmall={currentPage.images.hero.small}
//           alt={currentPage.name}
//           year={currentPage.year}
//           description={currentPage.description}
//           thumbnail={currentPage.images.thumbnail}

//         />
  
  
//   </div>
//   </>
// )
// }


        
   
  import React from "react";
import PageReference from "./PageReference";
import { Link } from "react-router-dom";
import data from "../data.json";
// import { useState, useEffect } from "react";
// import arrowPrevious from "/public/assets/shared/icon-back-button.svg"
// import arrowNext from "/public/assets/shared/icon-next-button.svg";

// import { useLocation } from "react-router-dom";




export default function ImagePage() {

  // const location = useLocation();

      React.useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, []);


//   const [currentPageIndex, setCurrentPageIndex] =  useState(location.state.index);
//   // console.log(data[currentPageIndex].imageSrc);

//   const currentPage = data[currentPageIndex];


// // previous and next navigaiton handlers
// const handlePreviousClick = () => {
//     setCurrentPageIndex(
//         currentPageIndex === 0 ? data.length - 1 : currentPageIndex - 1
//     );
// };

// const handleNextClick = () => {
//     setCurrentPageIndex((currentPageIndex + 1) % data.length);
// };


// console.log(location);
// console.log(location.state);
// console.log(currentPage);
// console.log(currentPage.name);
// console.log(currentPage.artist.name);
// console.log(currentPage.images.hero.large);



//      console.log(currentPageIndex);





console.log(data); 
  
       return (
        <>
        {/* <button className="nav-button left" onClick={handlePreviousClick}>
                    <img src={arrowPrevious} alt="Previous" />
                </button>
                <button className="nav-button right" onClick={handleNextClick}>
                    <img src={arrowNext} alt="Next" />
                </button> */}
  <div className="description__image">
   {data.map((item) => {
     
return(
   
        <PageReference
          key={item.id}
          name={item.name}
          artist={item.artist.name}
          imagelarge={item.images.hero.large}
          imagesmall={item.images.hero.small}
          alt={item.name}
          year={item.year}
          description={item.description}
          thumbnail={item.images.thumbnail}

        />
)
   }
  )}
  </div>
  </>
)}



    
    
       


