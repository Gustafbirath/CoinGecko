import React from 'react';
import { useState, useEffect } from 'react';
import Coin from './Coin';

const CoinsList = (props) => {
    const [coins, setCoins] = useState([]);

    function fetchCoinsHandler() {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=100&page=3`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const transformedCoins = data.map((coinData) => {
                    return {
                        id: coinData.id,
                        name: coinData.name,
                        image: coinData.image.replace('large', 'thumb'),
                        price: coinData.current_price,
                        cap: coinData.market_cap,
                        priceChange: coinData.market_cap_change_percentage_24h
                    };
                });
                setCoins(transformedCoins);
            });
    }
    useEffect(() => {
        fetchCoinsHandler();
    }, [props.currency]);

    return (
        <div className='coin-list'>
            {coins.map((coin) => (
                <Coin className='single-coin'
                    key={coin.id}
                    image={coin.image}
                    name={coin.name}
                    price={coin.price}
                    priceChange={coin.priceChange}
                    cap={coin.cap}
                    setCurrency={props.currency}
                />
            ))}
        </div>
    );
};

export default CoinsList; 