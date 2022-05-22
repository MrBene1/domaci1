import React, { useState } from 'react';
import '../App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function AddPost() {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const inputTitle = e => {
        setTitle( e.target.value );
    }
    const inputImg = e => {
        setImg( e.target.value );
    }
    const inputAuthor = e => {
        setAuthor( e.target.value );
    }
    const inputContent = e => {
        setContent( e.target.value );
    }

    console.log(title);
    console.log(img);
    console.log(author);
    console.log(content);
    return ( 
    <div>
        <div className='add-post'>
            <div className='main'>
                <form>
                    <label className='label'>Dodaj post</label>
                    <input placeholder="Naziv" name="title" type="text" className="input" maxLength="20" onChange={inputTitle}/>
                    <input placeholder="Url slike" name="img" type="text" className="input" onChange={inputImg}/>
                    <input placeholder="Ime autora" name="autor" type="text" className="input" maxLength="20" onChange={inputAuthor}/>
                    <textarea className='content' name="content" maxLength="250" placeholder='Sadrzaj' onChange={inputContent}></textarea>
                    <input type="submit" value="Dodaj post" className="submit"></input>
                </form>
            </div>
        </div>
        <Link to="/" className='back-button'>Nazad</Link>
    </div> );
}

export default AddPost;