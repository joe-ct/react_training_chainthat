import React, { memo } from "react";

const TodoList = ({ todoList, toggleTodo, deleteTodo, status }) => {
  console.log("TodoList");
  console.log(status);

  return (
    <div className="todo-list-container">
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <div className="todo-list-wrapper">
              <input
                type="checkbox"
                name="isDone"
                id="isDone"
                checked={todo.isDone}
                disabled={status.some(
                  (x) => x.name === "update_data" && x.statusId === todo.id
                )}
                onChange={() => toggleTodo(todo)}
              />
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                type="button"
                disabled={status.some(
                  (x) => x.name === "delete_data" && x.statusId === todo.id
                )}
                onClick={() => deleteTodo(todo)}
              >
                Delete Todo
              </button>
            </div>
            {status.some(
              (x) =>
                (x.name === "delete_data_error" ||
                  x.name === "update_data_error") &&
                x.statusId === todo.id
            ) && <p>record is not deleted</p>}
          </div>
        );
      })}
    </div>
  );
};

export default memo(TodoList);
