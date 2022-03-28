import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Coin = (props) => {


  return (
    <div className="container mt-5">
      <div className="row">
      <Link to={`/CoinData/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="col-sm">
            <img src={props.image} /> {props.name}
          </div>
          <div className="col-sm">
            {props.price} {props.setCurrency.toUpperCase()}
          </div>
          <div className="col-sm">
            {props.cap} {props.setCurrency.toUpperCase()}
          </div>
          <div className="col-sm">
            {props.priceChange} %
          </div>
          </Link>
        <div className="col-sm">
          <button type="button" className="btn btn-light" onClick={() => props.addCoinToStorage(props.image, props.name, props.price, props.cap, props.priceChange)}>Bevaka</button>
        </div>
      </div>
    </div>
  );
};

export default Coin;