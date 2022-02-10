import React from 'react';
//import { Type } from 'typescript';
//import logo from './logo.svg';
import './App.css';

// const length: number;
// const width: number;
// const height: number;

//document.getElementById('btn').addEventListener('click', calculate);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Square to Round Converter</h1>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <br />
        <form action=''>
          <br />
          <legend>Input Form</legend>
          <label>Length </label>
          <input type='text' className='length' />
          <br />
          <label>Width </label>
          <input type='text' className='width' />
          <br />
          <label>Height </label>
          <input type='text' className='height' />
          <br />
          <button className='btn' id='calculate'>
            Calculate
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
