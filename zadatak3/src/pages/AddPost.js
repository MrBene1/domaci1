import React, { useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function AddPost() {
    const [blog, setBlog] = useState({
        title: "",
        img: "",
        author: "",
        content: ""
    });

    const inputTitle = e => {
        setBlog({...blog, title: e.target.value});
    }
    const inputImg = e => {
        setBlog({...blog, img: e.target.value});
    }
    const inputAuthor = e => {
        setBlog({...blog, author: e.target.value});
    }
    const inputContent = e => {
        setBlog({...blog, content: e.target.value});
    }

    const postData = e => { 
        e.preventDefault();

        fetch('https://jsonblob.com/api/jsonBlob/976178308425465856')
        .then(response => response.json())
        .then(data => {
            data.push(blog);
            const idIncrement = () =>{
                data[data.length-1] = {id: (data[data.length-2].id + 1), ...data[data.length-1]}
            }
            idIncrement();
            fetch('https://jsonblob.com/api/jsonBlob/976178308425465856', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(dataNew => console.log("Success", dataNew))
            .catch(function(error){
                console.log(error);
            });
        });
    }

    return ( 
    <div>
        <div className='add-post'>
            <div className='main'>
                <form onSubmit={postData}>
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