import React, { useState } from "react";
import './App.css';
import Home from "./pages/Home.js";
import AddPost from "./pages/AddPost.js";
import Post from "./pages/Post.js";
import Header from "./Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [id,setId]=useState(0);
  const idSet = (e) => {
    setId(e)
  }

  return (
  <div className="App">
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home postId={idSet}/>}/>
        <Route path="/add-post" element={<AddPost/>}/>
        <Route path={"/"+id} element={<Post postId={id}/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
