import React, { useState } from 'react';
import Carousel from './Components/Carousel/Carousel';
import CoinsList from './Components/CoinsList';
import CurrencyChange from './Components/Header/CurrencyChange';
import TopRow from './Components/TopRow';

function App() {
  const [selectedCurrency, setCurrency] = useState('sek');

  const currencyChangeHandler = (e) => {
    setCurrency(e);  
};

  return (
    <React.Fragment>
      <section>
        <Carousel currency={selectedCurrency}/>
        <CurrencyChange onCurrencyChange={currencyChangeHandler} />
        <TopRow />
        <CoinsList currency={selectedCurrency}/>
      </section>
    </React.Fragment>
  );
}

export default App; 