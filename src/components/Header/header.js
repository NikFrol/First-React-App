import React from 'react';
import headerCSS from './header.module.css';

export default class Header extends React.Component {
    render() {
        const { title, descr } = this.props;
        return(<header className={headerCSS.root}>
        <div className={headerCSS.forest}></div>
        <div className={headerCSS.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    </header>)
    }
}