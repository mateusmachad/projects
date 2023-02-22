import React from 'react';

export default function Star (props){

    return (
    
        <h1 onClick={props.toggle}>{props.icon ? '☆' : '🌟'}</h1>
    
    )
}