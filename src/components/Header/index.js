import React from 'react';

function Header(props) {
    return (
        <header className='currency-converter__header header'>
            <div className='header__container _container'>
                <h1 className='header__logo'>Currency Converter</h1>
                <div className='header__text'>The official exchange rate of the
                    hryvnia against foreign currencies</div>
                <div className='header__currency-container currency'>
                    <div className='currency__dollar'>{props.format(1 * props.rates.UAH / props.rates.USD)} USD</div>
                    <div className='currency__euro'>{props.format(1 * props.rates.UAH / props.rates.EUR)} EUR</div>
                    <div className='currency__pound-sterling'>{props.format(1 * props.rates.UAH / props.rates.GBP)} GBP</div>
                </div>
            </div>
        </header>
    )
}
export default Header