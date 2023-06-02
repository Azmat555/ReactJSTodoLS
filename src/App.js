import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import TodoList from "./Components/TodoList";
import AppCss from "./AppCss.css";

function App() {
  const [input, setInput] = useState("");
  const [inputData, setInputData] = useState([]);
  return (
    <div className="App-header">
      <InputForm
        input={input}
        setInput={setInput}
        setInputData={setInputData}
        AppCss
      ></InputForm>
      <TodoList inputData={inputData} setInputData={setInputData}></TodoList>
    </div>
  );
}

export default App;
