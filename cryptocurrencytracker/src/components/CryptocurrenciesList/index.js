// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  renderCryptoList = () => {
    const {cryptoData} = this.props

    return (
      <div className="crypto-list-container">
        <div className="nav-bar">
          <p className="coin-title">Coin type</p>
          <div className="currency-title-container">
            <p className="currency-title">USD</p>
            <p className="currency-title">EURO</p>
          </div>
        </div>
        <ul className="crypto-items-container">
          {cryptoData.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              currencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="content-container">
        <h1 className="crypto-title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency tracker"
          className="crypto-image"
        />
        {this.renderCryptoList()}
      </div>
    )
  }
}

export default CryptocurrencyList
