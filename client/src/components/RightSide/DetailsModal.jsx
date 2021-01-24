/*eslint-disable*/
import React from 'react';

const DetailsModal = (props) => {
  const { currShoe, modalStyle, handleDetailsModalView } = props;
  const splitBody = currShoe.details.split('\n');
  let dropDownAnimation = null;
  if (modalStyle) {
    dropDownAnimation = { 'transition': 'opacity 650ms ease 0s', 'height': '95%' }
  }
  return (
    <div className="detailsModalContainer">
      <div className="detailsModal" style={dropDownAnimation}>
      <button onClick={handleDetailsModalView} className="detailsExit">X</button>
        <div className="modalHeader">
          <div className="detailsModalImage">
            <img className="detailsImage" src={currShoe.media[0]} alt="image here"></img>
          </div>
          <div className="detailsModalTitle">
            <h1>LeBron 18</h1>
          </div>
        </div>
        <div className="detailsModalInfo">
          {splitBody.map((section, i) => {
            if (i % 2 !== 0) {
              return (
                <div>
                  <p className="regularHeadline">{section}</p>
                  <br></br>
                </div>
              )
            } else {
              return (
                <p className="headline">{section}</p>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default DetailsModal;
