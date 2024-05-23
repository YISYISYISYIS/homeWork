import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트",
      content: "리액트를 배웁니다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트22",
      content: "리액트를 배웁니다22",
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <h1 className="title">Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
      <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
    </section>
  );
};

export default TodoContainer;
