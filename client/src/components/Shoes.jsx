import React from 'react';
import ShoeList from './ShoeList';

const Shoes = (props) => {
  const { shoes, handleModalView } = props;
  return (
    <div className="shoePics">
      {shoes.map((shoe) => (
        <ShoeList shoe={shoe} key={shoe.title} handleModalView={handleModalView} />
      ))}
    </div>
  );
};

export default Shoes;
