import React from 'react';


export default function Card(props) {
console.log(props)
    return (
        <div className='card--header'>
            <div className='card--img'>
                <img src={props.photo}/>
            </div>
            <div className='card--text--info'>
                <div className='card--info'>
                    <img src={props.tag} className="card--tag" />
                    <p className='card--country'>{props.country}</p>
                    <a className='card--maplink'>{props.link}</a>
                </div>
                <div className='card--title'>
                    <h1>{props.name}</h1>
                </div>     
                <h4 className='card--date'>{props.date}</h4>
                <p className='card--coment'>{props.coment}</p>
                <em className='card--footer'>Powered by: UsiApp ®</em>
            </div>
            
        </div>
    )
}
