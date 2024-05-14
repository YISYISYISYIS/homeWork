import React from 'react'
import { useState } from 'react'
import "./App.css";

const App = () => {
  const defaultCard =[
    {id: 1, title: "리액트 공부하기", content: "리액트 기초를 공부해 봅시다", isDone: false},
    {id: 2, title: "리액트 공부하기2", content: "리액트 기초를 공부해 봅시다2", isDone: true},
  ];
  const [Cards, setCards] = useState(defaultCard);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addCard = (e)=>{
    e.preventDefault();
    if(!title || !content){
      alert("제목과 내용을 입력하세요");
      return;
    }
    const newCard ={id: Date.now(), title, content, isDone: false};
    setCards([...Cards,newCard]);
    setTitle("");
    setContent("");
  };

  const ChangeCard = (id)=>{
    setCards(Cards.map((card)=>{
      
    }));
  };

  const removeCard = (id)=>{
    setCards(Cards.filter((card)=>{
      return card.id !== id;
    }));
  };




  return (
    <div className='app'>
      App
      <form onSubmit={addCard}>
        <input type="text" placeholder='제목' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" placeholder='내용' value={content} onChange={(e)=>{setContent(e.target.value)}}/>
        <button type='submit'>카드 추가</button>
      </form>
      <h1>working</h1>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {Cards.map((card)=>(
          <div key = {card.id} style ={{display: "flex",flexDirection: "column", alignItems: "center",border: "1px solid #000", width: "300px", height: "200px", margin: "1rem"}}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <button onClick={()=>{removeCard(card.id)}}>삭제하기</button>
          </div>
        ))}
      </div>
      <div>
        <h1>Done</h1>
      </div>
    </div>
  )
}

export default App
