import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function Home({postId}) {

    
    const [posts,setPosts]=useState([]);
    const getData=()=>{
        fetch('https://jsonblob.com/api/jsonBlob/976178308425465856')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPosts(data)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    
    return ( 
    <div className='App'>
        <h1>Svi postovi</h1>
        <div className='home-grid'>
            {posts.map(blog => (<Link to={"/"+blog.id} key={blog.id} className='blog-item' onClick={() => postId(blog.id)}>
                <img src={blog.img} alt='blog'/>
                <p>{blog.author}</p>
                <h3>{blog.title}</h3>
            </Link>))}
        </div>
    </div> );
}

export default Home;