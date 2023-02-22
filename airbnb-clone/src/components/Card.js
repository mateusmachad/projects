import React from 'react';
import data from './Data'


export default function Card(props) {

    return (
        <div className='cards'>

            <div className='card--badge'>
               {props.openSpots === 0 ? "Esgotado" : props.openSpots}
            </div> 

            <div className='card--location' style={{color: props.location === "Disponível" ? "green" : "red"}}>
                {props.location}
            </div>

            <img src={props.coverImg} className="card--img" />

            <div className="card--stats">
                <img src={props.starImg} className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className='gray'> ({props.stats.reviewCount}) *</span>
                <span className='gray'> {props.country} </span>
            </div>

            <div className='cardcontent'>
                <span>{props.title} </span>
                <p><span className='bold'>from $ {props.price}</span> /person</p>
            </div>

        </div>
    )
}