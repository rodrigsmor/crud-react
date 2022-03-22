import './Logo.css';
import React from 'react';
import logo from '../../assets/images/logo.png'

const Logo = (props) => {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt={'logo da Cod3r'} />
            </a>
        </aside>
    );
}

export default Logo;