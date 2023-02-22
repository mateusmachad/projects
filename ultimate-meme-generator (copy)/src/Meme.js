import React from 'react';


export default function Meme () {

    // const[memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState ([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes()
    }, [])

function getMemeImage () {
    const randomNumber = Math.floor(Math.random() * allMeme.length)

    const url = allMeme[randomNumber].url

    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
}   

    function handleChange (event) {
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>

            <div className='form'>

                <div className='form--inputs'>

                    <input type="text"
                    placeholder='Top text'
                    className='form--input'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />

                    <input type="text"
                    placeholder='Botton text'
                    className='form--input'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />

                </div>

                <button
                    className='form--button'
                    onClick={getMemeImage}
                > 
                    Gerar um Mene CABULOSO 🖼 
                </button>

            </div>
            <div className='new-meme'>
                <img  className="meme--image"src={meme.randomImage} />
                <h2 className='meme--text top'>
                    {meme.topText}
                </h2>
                <h2 className='meme--text bottom'>
                    {meme.bottomText}
                </h2>
            </div>
        </main>
    )
}