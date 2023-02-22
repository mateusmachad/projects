import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Card from './Card'
import Data from './Data'

export default function App() {

  const CardElements = Data.map (item => {
    return (
      <Card
        key={item.id}
        {...item} 
      />
    )
})

  return (
    <div className="App">
      <Navbar />
      {CardElements}
    </div>
  );
}


