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
  // //card 추가

  const ChangeCard = (id)=>{
    setCards(Cards.map((card)=>{
     if(id === card.id){
      return {...card, isDone: !card.isDone};
     }else{
      return card;
     }
    }));
  };
  // //card 상태변경

  const removeCard = (id)=>{
    setCards(Cards.filter((card)=>{
      return card.id !== id;
    }));
  };
  // //card 삭제




  return (
    <div className='app'>
      <div className="header" style={{display: "flex", justifyContent: "space-between", alignItems:"center",padding:"0 2rem" ,height: "5vh" }}>
        <a href="#"><h1 style={{fontSize: "1.5rem"}}>My Todo List</h1></a>
        <p>React</p>
      </div>
      {/* //header */}

      <form className="input" onSubmit={addCard} style={{display: "flex",justifyContent: "space-between",height: "10vh", padding:"0 2rem", alignItems: "center", backgroundColor: "#e3e3e3"}}>
        <div style={{display:"flex",alignItems:"center", height:"2rem"}}>
          <h3 style={{fontSize:"1rem"}}>제목</h3>
          <input type="text" style={{ marginLeft:"1rem", height:"2rem", borderRadius: ".5rem", width:"18rem"}} placeholder='제목' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div style={{display:"flex",alignItems:"center", height:"2rem", marginLeft:"-16rem"}}>
          <h3 style={{fontSize:"1rem"}}>내용</h3>
          <input type="text" style={{ marginLeft:"1rem", height:"2rem", borderRadius: ".5rem", width:"18rem"}} placeholder='내용' value={content} onChange={(e)=>{setContent(e.target.value)}}/>
        </div>
        <button type='submit'>카드 추가</button>
      </form>
      {/* //input */}

      <div className="main">
        <div className='working'>
          <div style={{display:"flex",alignItems:"center", marginLeft:"2rem", height: "8vh"}}>
            <h2>working</h2>
          </div>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {Cards.filter((card)=>(card.isDone === false)).map((card)=>(
              <div key = {card.id} style ={{display: "flex",flexDirection: "column",justifyContent:"space-around" ,alignItems: "center",border: "1px solid #000", width: "21rem", height: "10rem", margin: "0rem 2rem 2rem", padding:"1rem", borderRadius:"0.5rem"}}>
                <h2 style={{alignSelf: "flex-start"}}>{card.title}</h2>
                <p style={{alignSelf: "flex-start"}}>{card.content}</p>
                <div style={{display: "flex", justifyContent:"center"}}>
                  <button onClick={()=>{removeCard(card.id)}}>삭제하기</button>
                  <button style={{marginLeft:".5rem"}} onClick={()=>{ChangeCard(card.id)}}>완료</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* //working */}

        <div className='done'>
          <div style={{display:"flex",alignItems:"center", marginLeft:"2rem", height: "8vh"}}>
            <h2>Done</h2>
          </div>
          <div style={{display: "flex", flexWrap: "wrap"}}>
          {Cards.filter((card)=>(card.isDone === true)).map((card)=>(
            <div key = {card.id} style ={{display: "flex",flexDirection: "column",justifyContent:"space-around" ,alignItems: "center",border: "1px solid #000", width: "21rem", height: "10rem", margin: "0rem 2rem 2rem", padding:"1rem", borderRadius:"0.5rem"}}>
              <h2 style={{alignSelf: "flex-start"}}>{card.title}</h2>
              <p style={{alignSelf: "flex-start"}}>{card.content}</p>
              <div style={{display: "flex"}}>
                <button onClick={()=>{removeCard(card.id)}}>삭제하기</button>
                <button style={{marginLeft:"0.5rem"}} onClick={()=>{ChangeCard(card.id)}}>취소</button>
              </div>
            </div>
          ))}
          </div>
        </div>
        {/* //done */}
      </div>
      {/* //main */}
    </div>
  )
}

export default App
