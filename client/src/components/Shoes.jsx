import React from 'react';
import ShoeList from './ShoeList';

const Shoes = (props) => {
  const { shoes } = props;
  return (
    <div className="shoePics">
      {shoes.map((shoe) => (
        <ShoeList shoe={shoe} key={shoe.title} />
      ))}
    </div>
  );
};

export default Shoes;
