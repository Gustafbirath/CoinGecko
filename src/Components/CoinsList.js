import React from 'react';
import Coin from './Coin';

const CoinsList = (props) => {
    return (
        <div>
            <ul>
                {props.coins.map((coin) => (
                    <Coin
                        name={coin.name}
                        symbol={coin.symbol}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CoinsList;