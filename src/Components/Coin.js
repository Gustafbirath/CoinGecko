import React from 'react';

const Coin = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.symbol}</h3>
    </li>
  );
};

export default Coin;