import React from 'react';
import PropTypes from 'prop-types';

function CurrencyRow(props) {
    return (
        <div className='currency-body__row currency-row'>
            <input className='currency-row__input' value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
            <select className='currency-row__select-currency' value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
                {props.currencies.map((currency => (
                    <option key={currency} className='currency-row__currency-item' value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}

CurrencyRow.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default CurrencyRow