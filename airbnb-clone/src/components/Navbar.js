import React from 'react';
import logo from '../images/logo.png'

export default function Navbar (){
    return(
        <div className='Navbar'>
            <nav>
                <img src={logo}/>
            </nav>
        </div>
    )
}