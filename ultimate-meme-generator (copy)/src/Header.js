import React from 'react';
import logo from './images/trollface.png'
import './App.css'

export default function Header (){
    return (
        <header>
            <img src={logo} className="header--logo" alt='header---logo' />
            <h1 className='header--title'>The ultimate MEME Generator</h1>
            <h4 className='header--text'>powered by: UsiApp ~</h4>
        </header>
    )
}