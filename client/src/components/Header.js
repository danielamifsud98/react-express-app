import React from 'react';

const Header = ({title, text}) => (
    <div className="header text-align-center">
        <h1 className="font-weight-bold mb-2">{title}</h1>
        <hr/>
        <p>{text}</p>
    </div>
)

export default Header;