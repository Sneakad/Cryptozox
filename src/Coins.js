import React from 'react'

const Coins = ({name,image,price,symbol,volume}) => {
  return (
    <div className="coin-cotainer">
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="cypto" />
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${volume}</p>
            </div>
        </div>
    </div>
  )
}

export default Coins