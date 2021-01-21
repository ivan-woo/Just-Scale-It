/* eslint-disable */
import React from 'react';

const ShoeList = (props) => {
  const { picture, handleModalView, index } = props;
  return (
    <a href={`#section-${index}`}onClick={handleModalView} className="shoeView">
      <img src={picture} alt="shoepic" className="pic"/>
    </a>
  );
};

export default ShoeList;
