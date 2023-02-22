import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {

  const [count, setCount] = React.useState (0)

function Calculate (type){

  if (type==="soma") {
  setCount (count + 1)}
  else setCount (count - 1)
    

    
}

  return (
    <div className="counter">
      <button className="counter--menus" onClick={Calculate("subtração")}>-</button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={Calculate("soma")} >+</button>
    </div>
  )
}