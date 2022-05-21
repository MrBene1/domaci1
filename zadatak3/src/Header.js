import React from 'react';
import logo from './logo.png';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Header() {
    return ( 
    <div className='header'>
        <img src={logo} alt='logo'/>
        <Link to="/add-post" className='add-post-link'>Dodaj post</Link>
    </div> );
}

export default Header;