import React from "react";
import CurrencyRow from "./CurrencyRow";


class CurrencyConverter extends React.Component {
    render() {
        return (
            <div className="currency-converter__body currency-body">
                <div className="currency-body__container _container">
                    <CurrencyRow />
                    <p className="currency-body__equal">=</p>
                    <CurrencyRow />
                </div>
            </div>
        )
    }
}
export default CurrencyConverter