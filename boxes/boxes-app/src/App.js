import React from 'react';
import Boxes from './Boxes'
import './App.css';
import Box from './Box'

export default function App(props) {
  const [squares, setSquares] = React.useState(Boxes)
  
  function toggle(id) {
    setSquares (prevSquares => {

      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })

      // const newSquares = []
    
    //     for(let i = 0; i < prevSquares.length; i++) {
    //         const currentSquare = prevSquares[i]
    //         if(currentSquare.id === id) {
    //             const updatedSquare = {
    //                 ...currentSquare,
    //                 on: !currentSquare.on
    //             }
    //             newSquares.push(updatedSquare)
    //         } else {
    //             newSquares.push(currentSquare)
    //         }
    //     }
    //     return newSquares
    })
  }


  
  const squareElements = squares.map (square => (
    <Box
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
      
  ))

  return (
      <main>
          {squareElements}
      </main>
  )
}