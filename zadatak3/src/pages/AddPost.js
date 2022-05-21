import React, { useState } from 'react';
import '../App.css';

function AddPost() {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    /*const handleSubmit = e => {
        e.preventDefault();
        setTitle("");
        setDescription("");
        setAuthor("Marko");
      };*/

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
    <div className='add-post'>
        <div className='main'>
            <form>
                <label className='label'>Dodaj post</label>
                <input placeholder="Naziv" name="title" type="text" className="input" onChange={inputTitle}/>
                <input placeholder="Url slike" name="img" type="text" className="input" onChange={inputImg}/>
                <input placeholder="Ime autora" name="autor" type="text" className="input" onChange={inputAuthor}/>
                <input placeholder="Sadrzaj" name="content" type="textarea" className="input" onChange={inputContent}/>
                <input type="submit" value="Dodaj post" className="submit"></input>
            </form>
        </div>
    </div> );
}

export default AddPost;