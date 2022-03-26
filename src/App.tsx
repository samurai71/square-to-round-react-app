import React from 'react'
//import { Type } from 'typescript'
import Form from './components/Forms'
import './App.css'

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
        <Form />
        <h2 className="text-2xl font-bold mt-5">Results</h2>
        <p>The answer is:</p>
      </header>
    </div>
  )
}

export default App
