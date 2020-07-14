import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import { Rating } from './components/rating/Rating';

function App(props:any) {
  return (
    <div className="App">
      <AppTitle title={'Accordion title'}/>
      <Rating value={0}/>
      <Accordion title={'Accordion1'} />
      <Accordion title={'Accordion2'}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}

const AppTitle = (props:any) => {
  return <>
      <h3>{props.title}</h3>
  </>
}



export default App;
