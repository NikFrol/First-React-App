import React from 'react';
import headerCSS from './header.module.css';

const Header = ({ title, descr, onClickButton }) => {

    const handleClick = () => {
        console.log('####: <Header />')
        onClickButton && onClickButton('game');
    }
    
    return(<header className={headerCSS.root}>
        <div className={headerCSS.forest}></div>
        <div className={headerCSS.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
            <button className={headerCSS.buttonContainern}onClick={handleClick}>
                Start Game!
            </button>
        </div>
    </header>)
}

export default Header;