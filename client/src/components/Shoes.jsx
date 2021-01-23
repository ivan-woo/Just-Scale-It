/* eslint-disable */
import React from 'react';
import ShoeList from './ShoeList';

const Shoes = (props) => {
  const { handleShoeModalView, currShoe } = props;
  if (currShoe) {
    return (
      <div className="shoePics mt11-lg pr12-lg pl11-lg ml1-lg d-lg-ib">
        {currShoe.map((picture, i) => (
          <ShoeList picture={picture} key={i} index={i} handleShoeModalView={handleShoeModalView} />
        ))}
      </div>
    );
  }
  return null;
};

export default Shoes;
