import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#1c1b1b', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden' }}>
                <li style={{ float: 'left' }}>
                    <Link to="/" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                {/* <li style={{ float: 'left' }}>
                    <Link to="/create" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
                        Create Project
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
