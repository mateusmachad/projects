import React from 'react';

export default function App () {
  
  
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

    
  const rainbow = colors.map (rainbowcolors => <h1>{rainbowcolors}</h1>)

  return (
   <div>
    {rainbow}
   </div>
  )

}