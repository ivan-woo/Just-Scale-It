import React from 'react';

const ShoeList = (props) => {
  const { shoe } = props;
  return (
    <button type="button">
      <img src={shoe.media.smallImageUrl} alt="shoepic" />
    </button>
  );
};

export default ShoeList;
