import React from "react";

function InputForm(props) {
  const { input, setInput, setInputData } = props;

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onSumiteHandler = (event) => {
    event.preventDefault();

    if (!input) {
      alert("Please Enter Your Work 🎯");
    } else {
      const collectData = {
        input: input,
        id: Math.random().toString(),
      };

      setInputData((prev) => {
        return [...prev, collectData];
      });

      setInput("");
    }
  };

  return (
    <div>
      <h1 style={{ color: "red" }}> Todo List</h1>
      <div>
        <form onSubmit={onSumiteHandler}>
          <input
            type="text"
            placeholder="Enter Your Work"
            value={input}
            onChange={onChangeHandler}
          ></input>
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
