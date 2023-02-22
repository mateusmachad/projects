import React from 'react';
import grid from '../images/grid.png'

export default function Hero (){
    return(
        <div className='section'>
            <div className='hero--img'>
               <img src={grid} />
            </div>
            <h1 className='hero--header'>Experiências Online!</h1>
            <p className='hero--text'>Aproveite experiências únicas e atividades interativas,deixadas por nossos hóspedes, sem sair de casa! </p>
        </div>
    )
}