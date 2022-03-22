import React, { useState, useEffect } from "react";

let coins = [];

const Coin = (props) => {

  function addStorage() {
    console.log(coins);
    coins.push({ thumb: props.thumbnail, name: props.name, price: props.price, cap: props.cap, priceChange: props.priceChangee });
    localStorage.setItem("coins", JSON.stringify(coins));
    return (
    <div>
      
    </div>
    )
  };

  return (
    <div className="container mt-5">
      <div className="row">
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
        <div className="col-sm">
          <button type="button" class="btn btn-light" onClick={addStorage}>Bevaka</button>
        </div>
      </div>
    </div>
  );
};

export default Coin;