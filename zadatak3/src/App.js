import React from "react";
import './App.css';
import Home from "./pages/Home.js";
import AddPost from "./pages/AddPost.js";
import Header from "./Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-post" element={<AddPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
