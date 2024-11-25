import './App.scss'
import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import background from './assets/hero.jpg'
import Card from './components/card/Card'
import Card2 from './components/card2/Card2'
import girl from './assets/girl.jpg'
import watch from './assets/watch.jpg'
import comp from './assets/comp.jpg'
import avatar from './assets/avatar.png'
import { FaApple } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <Main
        title={"iPhone 16 Pro"}
        subtitle="Hello, Apple Intelligence"
        buttons={["Learn more", "Buy"]}
        bg={background}
      />
      <div className="cards-container">
        <Card
          title="AirPods 4"
          subtitle="Iconic New Product"
          subtitle2="Available with Active Price"
          buttons={["Learn more", "Buy"]}
          bg={girl}
        />
        <Card2
          title={<><FaApple /> WATCH</>}
          subtitle="Series 10"
          subtitle2="Thinsantic Class"
          buttons={["Learn more", "Buy"]}
          bg={watch}
        />
        <Card2
          title="MACBOOK AIR"
          subtitle="Lean. Mean. M3 machine"
          subtitle2=""
          buttons={["Learn more", "Buy"]}
          bg={comp}
        />
        <Card2
          title="Apple For Small Businesses"
          subtitle="Hardware and Software and Expert"
          subtitle2="Help - in one place"
          buttons={["Learn more"]}
          bg={avatar}
        />
      </div>
    </>
  )
}

export default App
