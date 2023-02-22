import logo from './logo.svg';
import './App.css';
import code from "../src/code.png"
function App() {

  const thingsArray = ["Thing 1", "Thing 2"]
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

function addItem () {

  const newThingText = `Thing ${thingsArray.length + 1}`

  thingsArray.push(newThingText)
  console.log(thingsArray)
}

  return (
    <div className="App">
      <h1>FUNCAO DE ADD ITEM</h1>
      <h2>The add App</h2>
      <h4>
        /* "Basicamente, este app renderiza uma Array, que contem 2 elementos apenas. O botao, a cada vez acionado, adiciona um elemento dentro da array. fazendo com que a soma se repita inúmeras vezes.Isso chama-se "Event Listener"
        
        
        Contendo dentro do app o seguinte código:

      </h4>

        <img src={code}/>
      
      <h4>Abre o console log e veja a magica</h4>
      <button onClick={addItem}>Add Item</button>
            {thingsElements}
    </div>
  );
}

export default App;
