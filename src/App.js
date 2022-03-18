import React, { useState, useEffect } from 'react';
import Carousel from './Components/Carousel/Carousel';
import CoinsList from './Components/CoinsList';

function App() {
  const [coin, setCoins] = useState([]);

  async function fetchCoinsHandler() {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
    const data = await response.json();

    console.log(data);
    const transformedCoins = data.coins.map((coinData) => {
      return {
        name: coinData.item.name,
        symbol: coinData.item.symbol
      };
    });
    setCoins(transformedCoins);
  }
  useEffect(() => {
    fetchCoinsHandler();
  }, []);

  return (
    <React.Fragment>
      <section>
        <Carousel coins={coin} />
        <CoinsList coins={coin} />
      </section>
    </React.Fragment>
  );
}

export default App;