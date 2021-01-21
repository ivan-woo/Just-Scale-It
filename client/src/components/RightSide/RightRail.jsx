/* eslint-disable */

import React from 'react';
import ColorWays from './ColorWays.jsx';
import Sizes from './Sizes.jsx';

const RightRail = (props) => {
  const { shoes, changeColorWay, currShoe, sizes } = props;
  console.log(currShoe);
  return (
    <div className="rightWrapper">
      <div id="shoeTitle">
        <div className="productName">
          <h2>Basketball Shoe</h2>
          <h1>LeBron 18</h1>
        </div>
        <div className="productPrice">
          <div className="textPrice">
            $200
          </div>
        </div>
      </div>
      <ColorWays shoes={shoes} currShoe={currShoe} changeColorWay={changeColorWay} />
      <Sizes sizes={sizes} />
    </div>
  );
};

export default RightRail;
