/* eslint-disable */
import React from 'react';

const Modal = (props) => {
  const { currShoe, handleModalView } = props;
  return (
    <div className="modal">
      <button onClick={handleModalView} className="exit">X</button>
      {currShoe.media.map((picture, i) => {
        return (
          <span id={`section-${i}`} className="modalSpan" >
            <img src={picture} alt="shoe pic" key={currShoe._id} className="shoeModal" />
          </span>
        )
      })}
    </div>
  );
};

export default Modal;
