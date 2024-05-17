import { useState } from "react";

const AddCard = ({ addNewCards }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용을 입력하세요");
      return;
    }
    const newCard = { id: Date.now(), title, content, isDone: false };
    addNewCards(newCard);
    setTitle("");
    setContent("");
  };
  // AddCard

  const styles = {
    form: {
      display: "flex",
      justifyContent: "space-between",
      height: "10vh",
      padding: "0 2rem",
      alignItems: "center",
      backgroundColor: "#e3e3e3",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      height: "2rem",
    },
    input: {
      marginLeft: "1rem",
      height: "2rem",
      borderRadius: ".5rem",
      width: "18rem",
    },
    inputContainerMargin: {
      display: "flex",
      alignItems: "center",
      height: "2rem",
      marginLeft: "-16rem",
    },
  };
  //styles

  return (
    <form className="input" onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputContainer}>
        <h3 style={{ fontSize: "1rem" }}>제목</h3>
        <input
          type="text"
          style={styles.input}
          placeholder="제목"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div style={styles.inputContainerMargin}>
        <h3 style={{ fontSize: "1rem" }}>내용</h3>
        <input
          type="text"
          style={styles.input}
          placeholder="내용"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button type="submit">카드 추가</button>
    </form>
  );
};

export default AddCard;
