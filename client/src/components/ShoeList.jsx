/* eslint-disable */
import React from 'react';

const ShoeList = (props) => {
  const { shoe, handleModalView } = props;
  return (
    <button type="button" onClick={handleModalView} className="shoeView">
      <img src={shoe.media.smallImageUrl} alt="shoepic" />
    </button>
  );
};

export default ShoeList;
