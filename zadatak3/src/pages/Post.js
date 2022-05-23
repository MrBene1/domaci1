import React, { useState, useEffect } from 'react';
import '../App.css';

function Post({postId}) {
    
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
        {posts.map(blog => blog.id === postId?(<div key={blog.id} className='post-page'>
            <div className='post-page-image'><img src={blog.img} alt='blog'/></div>
            <div className='post-page-text'>
                <p className='post-page-author'>{blog.author}</p>
                <h1>{blog.title}</h1>
                <p className='post-page-content'>{blog.content}</p>
            </div>
        </div>) : "")}
    </div> );
}

export default Post;