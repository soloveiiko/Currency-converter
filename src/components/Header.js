import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="currency-converter__header header">
                <div className="header__container _container" >
                    <h1 className="header__logo">Currency Converter</h1>
                </div>
            </header>
        )
    }
}
export default Header