/* eslint-disable */
import React from 'react';

const Modal = (props) => {
  const { shoes, handleModalView } = props;
  return (
    <div className="modal">
      <button onClick={handleModalView} className="exit">X</button>
      {shoes.map((shoe) => {
        return (
          <span>
            <img src={shoe.media.imageUrl} alt="shoe pic" key={shoe._id} className="shoeModal" />
          </span>
        )
      })}
    </div>
  );
};

export default Modal;
