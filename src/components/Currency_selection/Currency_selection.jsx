import React, { useEffect, useState } from "react"; // Обьявляем использование хуков useEffect и useState
import "./Currency_selection.css"; //Добавляем стили нашей компонете Currency_selection

//
//Ниже компонента "Icon" является картинкой
const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};
//

//В аргументе компоненты принимаем пропсами "placeHolder" и "options" переданныt в App.js компоненте Currency_selection
const Currency_selection = ({ placeHolder, options }) => {
  //
  //Для инпутов начало
  let textInput = React.createRef(); // обявлена переменная textInput  и ей присвоен метод реф React.createRef()

  const [value, setValue] = useState([]);

  let inputFunctionConverter = () => {
    setValue(textInput.current.value * 10);
  };

  //Для инпутов конец
  //

  //
  //   Для первого селектора
  const [showMenu, setShowMenu] = useState(false); // Обьявляем пременные состояния
  const [selectedValue, setSelectedValue] = useState(null); // Обьявляем пременные состояния

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };
  //

  useEffect(() => {
    // if (selectedValue) {
    if (selectedValue) {
      // selectedValue.label
      setValue(textInput.current.value * 1000);
      console.log(100);
    }
  });

  return (
    <div>
      {/* Первый селектор */}
      <div className="dropdown-container">
        <div onClick={handleInputClick} className="dropdown-input">
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={`dropdown-item ${isSelected(option) && "selected"}`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="first_input_glav">
        {/* Инпут криптовалюты */}
        <input
          type="number"
          placeholder="Введите число"
          className="input"
          onInput={inputFunctionConverter}
          ref={textInput}
        ></input>
      </div>

      <div className="first_input_glav2">
        {/* Инпут обычной валюты */}
        <input
          type="number"
          className="input"
          value={value}
          // ref={textOut}
        ></input>
      </div>
      {value}
    </div>
  );
};

export default Currency_selection;
