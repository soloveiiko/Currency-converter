import React from "react";

class CurrencyRow extends React.Component {
    render() {
        return (
            <div className="currency-body__row currency-row">
                <input type="number" />
                <select>
                    <option value="Hi">Hi</option>
                </select>
            </div>
        )
    }
}
export default CurrencyRow