import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {

    
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('https://jsonblob.com/api/jsonBlob/976178308425465856')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    
    return ( 
    <div className='App'>
        <h1>Svi postovi</h1>
        <div className='home-grid'>
            {data.map(blog => (<div key={blog.id} className='blog-item'>
                <img src={blog.img} alt='blog'/>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
            </div>))}
        </div>
    </div> );
}

export default Home;