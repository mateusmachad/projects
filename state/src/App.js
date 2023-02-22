import logo from './logo.svg';
import './App.css';
import Time from './Time'

function App() {
  return (
    <div className="App">

      <Time />

    </div>
  );
}

export default App;

// import React from 'react';

// export default function Time(){

//     let hora = newDate().getHours();

//     let timeOfDay;
//     if (hora <= 5) {timeOfDay = "Madruga"}
//     else if (hora <=12) {timeOfDay = "Manhã"}
//     else if (hora <= 18) {timeOfDay = "Tarde"}
//     else if(hora <=24) {timeOfDay = "Noite"}

//     const nome = "Fulano";

//     const saudacao = "Olá, mas que agradável noite,";
//     const saudacao2 = "Tenha uma excelente";
   
//     return(
//         console.log(
//         {saudacao}
//         {nome}
//         {saudacao2}
//         {timeOfDay}
//         )
//     )
// }