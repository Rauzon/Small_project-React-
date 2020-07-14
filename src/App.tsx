import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import { Rating } from './components/rating/Rating';

function App(props:any) {
  return (
    <div className="App">
      <AppTitle title={'Rating App'}/>
      <Rating value={0}/>
      <Accordion title={'Menu'} collapsed={false}/>
      <Accordion title={'Users'} collapsed={true}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}
type AppTitleProps = {
    title:string
}

const AppTitle:React.FC<AppTitleProps> = (props) => {
  return <>
      <h2>{props.title}</h2>
  </>
}



export default App;
