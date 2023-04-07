import React from "react";
import Header from "./components/Header/index";
import CurrencyConverter from "./components/CurrencyConverter/index";
import "./styles/css/style.css";

function App() {

  return (
    <div className="currency-converter">
      <Header />
      <CurrencyConverter />
    </div>
  );
}

export default App;
