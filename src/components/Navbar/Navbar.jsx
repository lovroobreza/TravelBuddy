import React, { useState } from 'react';

import './Navbar.scss'

const Navbar = () => {
    
    const [logged, setLogged] = useState(true)

    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li className="nav-link">Home</li>
                <li className="nav-link">About</li>
                <li className="nav-link">Project</li>
            </ul>
            <ul>
              <h1>{ logged === true ? 'Logout' : 'Login'}</h1>  
                
            </ul>
        </div>
    )
}

export default Navbar
