import React from 'react';
import logo from './photos/wolrd.png'
import './App.css';

export default function Navbar () {
    return (
        <div className='nav'>
            <img src={logo} className='logo' />
            <h1 className='header--text'>Meu diário de viagens</h1>
        </div>
    )
}