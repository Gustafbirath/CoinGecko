import React, { useState, useEffect } from 'react';
import { Navbar, ToastContainer } from 'react-bootstrap';
import Carousel from './Components/Carousel/Carousel';
import CoinsList from './Components/CoinsList';
import CurrencyChange from './Components/Header/CurrencyChange';
import TopRow from './Components/TopRow';
import WatchList from './Components/WatchList';
import PageNavbar from './Components/PageNavbar';
import CoinData from './Components/CoinData';
import InputField from './Components/InputField';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  const [toasts, setToasts] = useState([]);
  const [selectedCurrency, setCurrency] = useState('sek');
  const [search, setSearch] = useState('');

  let coins = [];

  const watchListHandler = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setToasts(values)
  };

  useEffect(() => {
    watchListHandler();
  }, []);

  const addStorage = (image, name, price, cap, priceChange) => {
    localStorage.setItem(name, JSON.stringify({ image, name, price, cap, priceChange }))
    coins.push({ image, name, price, cap, priceChange })
    setToasts(coins)
    watchListHandler();
  };
  const removeStorage = (name) => {
    localStorage.removeItem(name);
    watchListHandler();
  };

  const currencyChangeHandler = (e) => {
    setCurrency(e);
  };

  const searchFunc = (e) => {
    setSearch(e);
    console.log(search)
  }
  return (
    <React.Fragment>
      <PageNavbar />
      <section>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Carousel currency={selectedCurrency} />
              <CurrencyChange currency={selectedCurrency} onCurrencyChange={currencyChangeHandler} />
              <InputField searchFunc={searchFunc} />
              <TopRow />
              <WatchList toast={toasts} removeItem={removeStorage} />
              <CoinsList currency={selectedCurrency} addCoinToStorage={addStorage} searchValue={search} />
            </Route>
            <Route path="/CoinData/:name">
              <CoinData coinData={props.name} />
            </Route>
          </Switch>
        </Router>
      </section>
    </React.Fragment>
  );
}

export default App; 