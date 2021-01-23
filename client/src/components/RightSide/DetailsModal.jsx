/*eslint-disable*/
import React from 'react';

const DetailsModal = (props) => {
  const { currShoe, handleDetailsModalView } = props;
  return (
    <div className="detailsModalContainer">
      <button onClick={handleDetailsModalView} className="detailsExit">X</button>
      <div className="detailsModal">
        <div className="modalHeader">
          <div className="detailsModalImage">
            <img alt="image here"></img>
          </div>
          <div>
            Shoe Name/Price
          </div>
        </div>
        <div>
          Shoe Details Here
        </div>
      </div>
    </div>
  )
}

export default DetailsModal;