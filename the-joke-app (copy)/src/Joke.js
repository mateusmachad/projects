import React from 'react';
import openEye from './png/002-eye.png'
import closedEye from './png/001-eyes.png'


export default function Joke (props) {
    const [isShown, setIsShown] = React.useState (false)

    function toggleShown () {
        setIsShown(prevShown => !prevShown)
    }

    const Eyes = isShown ? openEye : closedEye
    const Punchline = isShown ? props.punchline : ""

    
    return (

        <div className='joke--line'>
            
            <h2>{props.setup}</h2>

            <hr/>

            <div className='answer'>
                <button  className="punch--button" onClick={toggleShown}>
                    <img className='eyes' src={Eyes} />
                </button>
                <p className='answer--punch'> {Punchline} </p>
            </div>
            <p className='tip' >click-me</p>
            
        </div>
    )

}