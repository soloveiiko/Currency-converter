import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="currency-converter__header header">
                <div className="header__container _container" >
                    <h1 className="header__logo">Currency Converter</h1>
                    <div className="header__text">The official exchange rate of the
                        hryvnia against foreign currencies</div>
                    {/* <div className="currency-body__currency-container currency">
                        <div className="currency__dollar">{format(1 * rates.UAH / rates.USD)} USD</div>
                        <div className="currency__euro">{format(1 * rates.UAH / rates.EUR)} EUR</div>
                        <div className="currency__pound-sterling">{format(1 * rates.UAH / rates.GBP)} GBP</div>
                    </div> */}
                </div>
            </header>
        )
    }
}
export default Header