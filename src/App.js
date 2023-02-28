// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Test from "./components/Test";
// import Converter_and_graph from "./components/Converter_and_graph";
// import Dropdown from "./components/Dropdown";
import Currency_selection from "./components/Currency_selection/Currency_selection";

function App() {
  // Это данные которые мы передаем для выбора в селектор
  const options = [
    { value: "bitcoin (btc)", label: "Bitcoin (BTC)" },
    { value: "ethereum (eth)", label: "Ethereum (ETH)" },
  ];

  // const options2 = [
  //   { value2: "доллар сша (usd)", label2: "Доллар США (USD)" },
  //   { value2: "ether (eth)", label2: "Ether (ETH)" },
  // ];
  // Bitcoin (BTC), Ether (ETH), US Dollar (USD)
  // USD - Доллар США, EUR - Евро, GBP - Британский Фунт

  return (
    <div className="App">
      {/* <Test/> */}
      {/* <Converter_and_graph/> */}
      {/*  Это компонента с примером поля выбора */}
      {/* <Dropdown placeHolder="Select..." options={options} /> */}
      <Currency_selection placeHolder="Select..." options={options}/>
    </div>
  );
}

export default App;
