import React from "react";

function TodoList(props) {
  const { inputData, setInputData } = props;

  const removeALL = () => {
    setInputData([]);
  };

  function deletTodoHandler(id) {
    const updatedData = inputData.filter((todo) => todo.id !== id);
    setInputData(updatedData);
  }

  return (
    <div>
      <table>
        {inputData.length === 0 ? <p>😡</p> : <p>😊</p>}
        {inputData.length === 0 ? (
          <p>plase type here </p>
        ) : (
          inputData.map((todo) => (
            <tr style={{ backgroundColor: "black" }} key={todo.id}>
              {todo.input}

              <button>(Edit)🖊</button>
              <button onClick={() => deletTodoHandler(todo.id)}>
                Delete❌
              </button>
            </tr>
          ))
        )}
      </table>
      <div style={{ margin: "50px", padding: "20px" }}>
        <button onClick={removeALL}>Remove ALL</button>
      </div>
    </div>
  );
}

export default TodoList;
