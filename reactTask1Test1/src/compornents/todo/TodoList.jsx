import TodoItem from "./TodoItem";

const TodoList = ({ title, todos, setTodos }) => {
  return (
    <div>
      <h2 className="todo-list-tilte">{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
