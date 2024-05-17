import { useState } from "react";
import "./App.css";
import AddCard from "./AddCard";
import ChangeCard from "./ChangeCard";
import RemoveCard from "./RemoveCard";

const App = () => {
  const defaultCard = [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해 봅시다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기2",
      content: "리액트 기초를 공부해 봅시다2",
      isDone: true,
    },
  ];
  const [Cards, setCards] = useState(defaultCard);

  const addNewCards = (newCard) => {
    setCards([...Cards, newCard]);
  };
  //App

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2rem",
      height: "5vh",
    },
    workingAndDone: {
      display: "flex",
      alignItems: "center",
      marginLeft: "2rem",
      height: "8vh",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      border: "1px solid #000",
      width: "21rem",
      height: "10rem",
      margin: "0rem 2rem 2rem",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
    cardText: {
      alignSelf: "flex-start",
    },
  };
  //styles

  return (
    <div className="app">
      <div className="header" style={styles.header}>
        <a href="#">
          <h1 style={{ fontSize: "1.5rem" }}>My Todo List</h1>
        </a>
        <p>React</p>
      </div>
      {/* //header */}
      <div>
        <AddCard addNewCards={addNewCards} />
      </div>
      {/* //input */}
      <div className="main">
        <div className="working">
          <div style={styles.workingAndDone}>
            <h2>working</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Cards.filter((card) => card.isDone === false).map((card) => (
              <div key={card.id} style={styles.card}>
                <h2 style={styles.cardText}>{card.title}</h2>
                <p style={styles.cardText}>{card.content}</p>
                <div style={{ display: "flex" }}>
                  <button
                    onClick={() => {
                      RemoveCard(card.id, setCards, Cards);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    style={{ marginLeft: ".5rem" }}
                    onClick={() => {
                      ChangeCard(card.id, setCards, Cards);
                    }}
                  >
                    완료
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* //working */}

        <div className="done">
          <div style={styles.workingAndDone}>
            <h2>Done</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Cards.filter((card) => card.isDone === true).map((card) => (
              <div key={card.id} style={styles.card}>
                <h2 style={styles.cardText}>{card.title}</h2>
                <p style={styles.cardText}>{card.content}</p>
                <div style={{ display: "flex" }}>
                  <button
                    onClick={() => {
                      RemoveCard(card.id, setCards, Cards);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    style={{ marginLeft: "0.5rem" }}
                    onClick={() => {
                      ChangeCard(card.id, setCards, Cards);
                    }}
                  >
                    취소
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* //done */}
      </div>
      {/* //main */}
    </div>
  );
};

export default App;
