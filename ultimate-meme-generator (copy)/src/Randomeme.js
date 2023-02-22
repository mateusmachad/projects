import React, {useState} from 'react';
import meme from './images/meme.jpg'
import meme1 from './images/meme1.jpg'
import meme2 from './images/meme2.jpg'
import meme3 from './images/meme3.jpg'
import meme4 from './images/meme4.jpg'
import meme5 from './images/meme5.jpg'
import meme6 from './images/meme6.jpg'
import meme7 from './images/meme7.jpg'
import meme8 from './images/meme8.jpg'
import meme9 from './images/meme9.jpg'
import meme10 from './images/meme10.jpg'
import meme11 from './images/meme11.jpg'
import meme12 from './images/meme12.jpg'
import meme13 from './images/meme13.jpg'
import meme14 from './images/meme14.jpg'
import meme15 from './images/meme15.jpg'
import meme16 from './images/meme16.jpg'
import meme17 from './images/meme17.jpg'
import meme18 from './images/meme18.jpg'
import meme19 from './images/meme19.jpg'
import meme20 from './images/meme20.jpg'
import meme21 from './images/meme21.jpg'
import meme22 from './images/meme22.jpg'
import meme23 from './images/meme23.jpg'
import meme24 from './images/meme24.jpg'

export default function Randomizer () {

    const randomizarMeme = [meme, meme1, meme2, meme3, meme4, meme5, meme6,meme7,meme8,meme9, meme10, meme11,meme12,meme13,meme14, meme15,meme16,meme17,meme18,meme19,meme20,meme21,meme22,meme23,meme24]

    const [image, setImage] = useState(meme)

    function Randomizar (){
        const number = Math.floor(Math.random()*randomizarMeme.length)
        const randommeme = randomizarMeme[number]
        
        setImage(randommeme)
    }

    return (
        <div className='RandomizerButton'>
            <button className='random--button' onClick={Randomizar}> GERAR UM MEME ALEATORIO </button>
            <img src={image} />
        </div>
    )
}