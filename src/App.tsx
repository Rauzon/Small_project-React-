import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

const AppTitle = () => {
  return <>
    This is AppComponent
  </>
}

const Star = () => {
  return <>
    <span>star</span>
  </>
}


const Rating = () => {
  return <div className='rating__content'>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </div>
}





export default App;
