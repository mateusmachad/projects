// import React from 'react';

// export default function Time() {

//    const nome = "Fulano";

//    let hora = new Date().getHours()
//    let timeOfDay;
//    if (hora <= 5) timeOfDay = "Madruga"
//    else if (hora <=12) timeOfDay = "Manhã"
//    else if (hora <= 18) timeOfDay = "Tarde"
//    else if(hora <=24) timeOfDay = "Noite"

//    const saudacao = hora;

   
//     return (
//         <div>
//             <p>Oi,{nome}! Uma ótima {timeOfDay}.São {hora} da {timeOfDay}</p>
                
//         </div>
//     )
// }

import './App.css';
function greeting(name){
const date = new Date()
const hours = date.getHours()
//console.log(hours)
//console.log(Number(hours))
let timeOfDay;
if (hours >= "00" && hours <= "11:59") { timeOfDay = 'morning';
  } else if (hours >= "12" && hours < "17") { timeOfDay ='afternoon';
  } else if (hours >= "17" && hours < "20") { timeOfDay ='evening';
  } else if (hours >= "20" && hours <= "24") { timeOfDay ='night';
  }
  return `Good ${timeOfDay} ${name}`
  greeting ("bob")
}
console.log(greeting("bob"))
export default greeting;