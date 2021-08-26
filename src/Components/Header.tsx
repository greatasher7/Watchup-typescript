import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => (
    <header>
        <Link to="/" >home</Link>
        <Link to="/data" >data</Link>
    </header>
)

export default Header;