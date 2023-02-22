import React from "react"
import "./App.css"


export default function App() {
  
    const [isImportant, setIsImportant] = React.useState("Yes")
    // setIsImportant("No")

    function handleClick () {
      setIsImportant ("No!")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
