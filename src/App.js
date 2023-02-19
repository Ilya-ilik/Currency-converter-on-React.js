// import logo from './logo.svg';
import "./App.css";
//Чтобы использовать хук useState надо его сначала обьявить как показано ниже
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState([]);
  // Тестовая функция первой кнопки
  let testFunction1 = () => {
    setValue(value * 10);
  };
   // Тестовая функция второй кнопки
   let testFunction2 = () => {
    setValue(value * 100);
  };
  return (
    <div className="App">
      {/* Тестовая кнопка 1 */}
      <button onClick={testFunction1}>Тестовая кнопка 1</button>
      {/* Тестовая кнопка 2 */}
      <button onClick={testFunction2}>Тестовая кнопка 2</button>

      {/* Этот инпут сразу выводит вводимое из инпута */}
      <input
        type="text"
        placeholder="Введите число"
        onChange={(ivent) => setValue(ivent.target.value * 100)}
      ></input>
      {/* Тестовый вывод состояния можно удалить! */}
      {value}
      {/* Значение инпута это состояние value -  value={value} */}
      <input value={value}></input>
    </div>
  );
}

export default App;
