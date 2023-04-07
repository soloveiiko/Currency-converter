import React, { useState, useEffect } from "react";
import axios from "axios"
import CurrencyRow from "../CurrencyRow/index";

const BASE_URL = 'https://openexchangerates.org/api/latest.json?app_id=2b9ecf2d6d52426f98be4a01b0790ca3&symbols=UAH,EUR,USD,GBP,ISK'

function CurrencyConverter() {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('UAH');
    const [rates, setRates] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL).then((res) => {
            setRates(res.data.rates)
        })
    }, []);


    function format(number) {
        return number.toFixed(3)
    }

    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1)
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1)
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2)
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2)
    }

    useEffect(() => {
        if (!!rates) {
            handleAmount1Change(1)
        }
    }, [rates]);

    return (
        <div className="currency-converter__body currency-body">
            <div className="currency-body__container _container">
                <CurrencyRow
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change} />
                <p className="currency-body__equal">=</p>
                <CurrencyRow
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change} />
                <div className="currency-body__currency-container currency">
                    <div className="currency__item_dollar">{format(1 * rates.UAH / rates.USD)} USD</div>
                    <div className="currency__item_euro">{format(1 * rates.UAH / rates.EUR)} EUR</div>
                    <div className="currency__item_pound-sterling">{format(1 * rates.UAH / rates.GBP)} GBP</div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter