import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'

export default function App() {

  const cards = Data.map (item => {
    return (
      <Card 
        key={item.id}
        {...item}
      // img={item.coverImg}
      // starIcon={item.starImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // country={item.country}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      // location={item.location}
      />
    )
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <hr/>
        <div className='cardComponents'>
          {cards}
          {/* <Card
            img={Cardimg1}
            starIcon={star}
            rating="5,0"
            reviewCount={6}
            country="USA"
            title="Lições de vida com Katie Zaferes"
            price={136}
          />
          <Card
            img={Cardimg2}
            starIcon={star}
            rating="5,0"
            reviewCount={30}
            country="USA"
            title="Aprenda fotografia para casamentos"
            price={125}
          />
          <Card
            img={Cardimg3}
            starIcon={star}
            rating="4,8"
            reviewCount={30}
            country="USA"
            title="Grupo de Mountain Bike"
            price={50}
          /> */}
        </div>
    </div>
  );
}


