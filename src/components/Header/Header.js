// rsc
import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            
            <nav>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;