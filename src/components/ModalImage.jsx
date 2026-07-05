import React from "react";


export default function ModalImage({ imagelarge, alt, onClose }) {
  return (
    <div className="modal__image">
        <div className="close-modal-btn-container">
				<button className="modal-close-btn" id="modal-close-btn" onClick={onClose}>
					X
				</button>
			</div>
        <picture className="image-wrapper">
            <img src={imagelarge} alt={alt} />
        </picture>
    </div>
  );
}

