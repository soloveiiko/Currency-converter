import React from "react";

class CurrencyRow extends React.Component {
    render() {
        return (
            <div className="currency-body__row currency-row">
                <input className="currency-row__input" type="number" />
                <select className="currency-row__select-currency">
                    <option className="currency-row__currency-item" value="Hi">Hi</option>
                </select>
            </div>
        )
    }
}
export default CurrencyRow