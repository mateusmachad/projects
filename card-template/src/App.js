import React from 'react';
import cardPhoto from './mateus.jpg'
import Star from "./Star"
import "./App.css"

export default function App () {

  const [contact,setContact] = React.useState({
    photo: cardPhoto,
    firstName: "Mateus",
    lastName: "Machado 🪓  ",
    phone: "(047) 99152-0392",
    email: "mateus.machado@usiapp.com.br",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact (prevState => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
    
  }

  return (
    <main>
        <article className="card">
            <img src={cardPhoto} className="card--photo" />
            <div className="card--info">
              <div className="card--status">
                <Star icon={contact.isFavorite} toggle={toggleFavorite}/>
                <details className='card--details'>

                  <summary>
                    Status
                  </summary>
                    Online
                    <span className='online'>•</span><br/>
                    Ocupado
                    <span className='ocupado'>•</span><br/>
                    Offline 
                    <span className='offline'>•</span><br/>

                </details>
              </div>
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </main>
  )
}