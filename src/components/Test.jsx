// import logo from './logo.svg';
// import "./App.css";
//Чтобы использовать хук useState надо его сначала обьявить как показано ниже
import React, { useState } from "react";

function Test() {
  //Реф по которому мы обращаемся к инпуту из которого будем брать значение введенное в него
  let textInput = React.createRef();

  //Далее надо обьявить переменные хука как представлено ниже названия могут быть любыми
  const [value, setValue] = useState([]); //В круглых скобках передается стартовое значение, оно будет храниться в переменной value

  let fun1 = () => {
    console.log(textInput.current.value * 10); //работает получение из второго инпута введеного значения
    setValue(textInput.current.value * 10);
  };

  let fun2 = () => {
    console.log(textInput.current.value * 100); //работает получение из второго инпута введеного значения
    setValue(textInput.current.value * 100);
  };
  
// useEffect(() => {
//   if (textInput.current.value * 10) {
//     console.log("fun1")
//   };

//   if (textInput.current.value * 100) {
//     console.log("fun2")
//   };
// })

  return (
    <div className="App">
      {/* Не влияет на мой код */}
      {/* Этот инпут сразу выводит вводимое значение введенное измененное в нем в value */}
      {/* <input
        type="text"
        placeholder="Введите название категории"
        onChange={(ivent) => setValue(ivent.target.value * 10)}
      ></input> */}
      {/* Не влияет на мой код */}

      {/* Не влияет на мой код */}
      {/* {value} */}
      {/* Не влияет на мой код */}

      <div>
        <button onClick={fun1}>руб=USD</button>
        <button onClick={fun2}>руб=EUR</button>
        <div className="button" onClick={fun1}>руб=USD</div>
        <div className="button" onClick={fun2}>руб=EUR</div>
      </div>

      {/* Этот инпут сразу выводит вводимое из инпута после нажатия кнопки */}
      <input
        type="text"
        placeholder="Введите название категории"
        ref={textInput}
      ></input>

      {/* тестовый инпут */}
      <input
        type="text"
        placeholder="Введите название категории"
        value={value}
      ></input>
    </div>
  );
}

export default Test;