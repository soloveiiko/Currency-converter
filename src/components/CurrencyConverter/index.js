import React, {useState, useEffect} from 'react';
import CurrencyRow from '../CurrencyRow/index';

function CurrencyConverter(props) {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('UAH');

    function handleAmount1Change(amount1) {
        setAmount2(props.format(amount1 * props.rates[currency2] / props.rates[currency1]))
        setAmount1(amount1)
    }

    function handleCurrency1Change(currency1) {
        setAmount2(props.format(amount1 * props.rates[currency2] / props.rates[currency1]))
        setCurrency1(currency1)
    }

    function handleAmount2Change(amount2) {
        setAmount1(props.format(amount2 * props.rates[currency1] / props.rates[currency2]))
        setAmount2(amount2)
    }

    function handleCurrency2Change(currency2) {
        setAmount1(props.format(amount2 * props.rates[currency1] / props.rates[currency2]))
        setCurrency2(currency2)
    }

    useEffect(() => {
        if (!!props.rates) {
            handleAmount1Change(1)
        }
    }, [props.rates]);

    return (
        <div className='currency-converter__body currency-body'>
            <div className='currency-body__container _container'>
                <CurrencyRow
                    currencies={Object.keys(props.rates)}
                    amount={amount1}
                    currency={currency1}
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}/>
                <p className='currency-body__equal'>=</p>
                <CurrencyRow
                    currencies={Object.keys(props.rates)}
                    amount={amount2}
                    currency={currency2}
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change}/>
            </div>
        </div>
    );
}

export default CurrencyConverter;
