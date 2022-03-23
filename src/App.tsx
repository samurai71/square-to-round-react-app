import React from 'react'
//import { Type } from 'typescript'
//import './App.css'

// const length: number;
// const width: number;
// const height: number;

function calculate() {
  //let lengthValue: number = 0;
  // let widthValue: number = 0;
  // let heightValue: number = 0;
}

/* window.addEventListener('click', (event) => {
  // ...
}) */

//document.getElementById('calculate').addEventListener('click', calculate);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-mono text-5xl font-bold">
          Square to Round Converter
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <p id="info" className="italic">
          Please enter in the number values for the measurements:
        </p>
        <form action="">
          <br />
          <legend className="mb-4">Input Form</legend>
          <label className="font-serif">
            Length:
            <input
              type="text"
              className="mx-2 align-middle rounded-lg"
              name="length"
            />
          </label>
          <br />
          <label className="font-serif">
            Width:
            <input type="text" className="mx-2 align-middle rounded-lg" />
          </label>
          <br />
          <label className="font-serif">
            Height:
            <input type="text" className="mx-2 align-middle rounded-lg" />
          </label>
          <br />
          <button
            className="btn bg-zinc-700"
            id="calculate"
            onClick={calculate}
          >
            Calculate
          </button>
        </form>
        <h2 className="text-2xl font-bold mt-5">Results</h2>
        <p>The answer is:</p>
      </header>
    </div>
  )
}

export default App
