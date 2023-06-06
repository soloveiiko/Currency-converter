import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header/index';
import CurrencyRow from './components/CurrencyRow/index';
import './styles/css/style.css';
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        const BASE_URL =
            "https://openexchangerates.org/api/latest.json?app_id=2b9ecf2d6d52426f98be4a01b0790ca3&symbols=UAH,EUR,USD,GBP,ISK";

        axios.get(BASE_URL).then((res) => {
            setRates(res.data.rates);
        });
    }, []);
    const format = (number) => {
        return number.toFixed(3)
    }

    return (
        <div className='currency-converter'>
            <Header rates={rates} format={format}/>
            <CurrencyConverter rates={rates} format={format}/>
        </div>
    );
}

export default App;
