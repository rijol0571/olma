import './App.scss';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Card from './components/card/Card';
import SecondCard from './components/Secondcard/SecondCard';
import background from './assets/hero.jpg';
import girl from './assets/opa.jpg';
import watch from './assets/watch.jpg';


import comp from './assets/comp.jpg';
import avatar from './assets/avatar.png';

import { FaApple } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <Main
        title="iPhone 16 Pro"
        subtitle="Hello, Apple Intelligence"
        buttons={["Learn more", "Buy"]}
        bg={background}
      />
      <div className="cards-container">
        <Card
          title="AirPods 4"
          subtitle="Iconic New Product"
          secondsubtitle="Available with Active Price"
          buttons={["Learn more", "Buy"]}
          bg={girl}
        />
        <SecondCard
          title={<><FaApple /> WATCH</>}
          subtitle="Series 10"
          secondsubtitle="Thinsantic Class"
          buttons={["Learn more", "Buy"]}
          bg={watch}
        />
        <SecondCard
          title="MACBOOK AIR"
          subtitle="Lean. Mean. M3 machine"
          secondsubtitle=""
          buttons={["Learn more", "Buy"]}
          bg={comp}
        />
        <SecondCard
          title="Apple For Small Businesses"
          subtitle="Hardware and Software and Expert"
          secondsubtitle="Help - in one place"
          buttons={["Learn more"]}
          bg={avatar}
        />
      </div>
    </>
  );
}

export default App;
