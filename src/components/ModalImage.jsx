import React from "react";


export default function ModalImage({ imagelarge, alt, onClose }) {
  return (
    <div className="modal__behind">
    <div className="modal__image">
       <div className="container__button">
				<button className="modal-close-btn" id="modal-close-btn" onClick={onClose}>
					X
				</button>
            </div>
			
        <picture className="image-wrapper">
            <img className="image__insidemodal"src={imagelarge} alt={alt} />
        </picture>
    </div>
    </div>
  );
}

