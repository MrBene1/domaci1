import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";

function Header() {
    return ( 
    <div className='header'>
        <Link to="/"><img src={logo} alt='logo'/></Link>
        <Link to="/add-post" className='add-post-link'>Dodaj post</Link>
    </div> );
}

export default Header;