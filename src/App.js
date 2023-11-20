import React,{ useState } from 'react';
import './App.css';
import Result from './Result';


function App() {
  const [term,setTerm]= useState("");
 
  const changeValue=(e)=>{
     setTerm(e.target.value)
  }

const systemValue=Math.floor((Math.random *10))+1;
  return (
    <div className="App">
      <div className='head'>
        <label htmlFor='term'>Guess the number between 1 to 10 </label>
      </div>
      <br></br>
      <>
      <input 
          type="text"
          name={term}
          id='term'
          onChange={changeValue}
        />
      </>
      <br></br>
      <br></br>
      <Result systemValue={systemValue} term={term} />
    </div>
  );
}

export default App;
