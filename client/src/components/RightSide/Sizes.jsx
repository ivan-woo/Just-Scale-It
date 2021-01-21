/* eslint-disable */
import React from 'react';

const Sizes = (props) => {
  const { sizes } = props;
  console.log(sizes);
  if (sizes) {
    return (
      <form className="sizesForm">
        <legend>
          <div>
            <span className="selectSize">Select Size</span>
            <a className="sizeGuide">Size Guide</a>
          </div>
        </legend>
        <div className="sizesContainer">
          {sizes.map((size, i) => {
            return (
              <div key={i}>
                <label className="sizeLabels">{`M ${size} / W ${size + 1.5}`}</label>
              </div>
            )
          })}
        </div>
      </form>
    );
  }
  return null;
};

export default Sizes;