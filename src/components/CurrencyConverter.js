import React from "react";
import CurrencyRow from "./CurrencyRow";


class CurrencyConverter extends React.Component {
    render() {
        return (
            <div className="currency-converter__body currency-body">
                <div className="currency-row__container _container">
                    <CurrencyRow />
                    <p>=</p>
                    <CurrencyRow />
                </div>
            </div>
        )
    }
}
export default CurrencyConverter