import React from 'react';

const Header = ({ title, children }) => {
    return (
        <header>
            <h1>{title}</h1>

            {children}
        </header>
    )
}

export default Header;