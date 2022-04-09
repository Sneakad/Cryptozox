import React from 'react'
import "./Coin.css"

const Coins = ({name,image,price,symbol,volume,priceChange}) => {
  return (
    <div className="coin-cotainer">
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="cypto" />
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">₹{price}</p>
                <p className="coin-volume">₹{volume}</p>
                {priceChange < 0 ? (<p className='coin-red'>{priceChange.toFixed(2)}%</p>):
                (<p className='coin-green'>{priceChange.toFixed(2)}%</p>)}
            </div>
        </div>
    </div>
  )
}

export default Coins