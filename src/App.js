import React from "react";
import Header from "./components/Header";
import CurrencyConverter from "./components/CurrencyConverter";
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
