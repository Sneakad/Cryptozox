import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Coins from './Coins'
import "./Coin.css"


function App() {

  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response) => {
      setCoin(response.data);
      console.log(response.data);
    }).catch((error) => {
      alert("error in fetching")
    })
  }, []);

  const change = (e) => {
    setSearch(e.target.value);
  }

  //for searching
  const filteredCoins = coin.filter(coins =>
    coins.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-head'>List of Currencies</h1>
        <form>
          <input type="text" placeholder="Search here"
            className="coin-input" onChange={change} />
        </form>
      </div>
      <div className='coin-blur'>
        {/* passing the data to the Coins.js component  */}
        {filteredCoins.map((coin) => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
