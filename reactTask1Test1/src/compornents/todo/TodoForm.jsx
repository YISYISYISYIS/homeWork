import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return alert("제목과 내용을 입력하세요.");
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    //useState의 비동기성
    setTodos((prevTodos) => [...prevTodos, nextTodo]);

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoForm;
