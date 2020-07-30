import React from 'react';
import './App.css';
import { OnOffBut } from './components/onOffButton/OnOffBut';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

function App(props: any) {

    return (
        <div className="App">
            <AppTitle title={'Rating App'}/>
            <Rating />
            <Accordion title={'Menu'} />
            <Accordion title={'Users'} />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <OnOffBut />
        </div>
    );
}

export default App;

type AppTitleProps = {
    title:string
}

const AppTitle:React.FC<AppTitleProps> = (props) => {
  return <>
      <h2>{props.title}</h2>
  </>
}




