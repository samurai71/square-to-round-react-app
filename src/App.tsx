import React from 'react'
//import { Type } from 'typescript'
import './App.css'

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
        <h1 className="font-mono">Square to Round Converter</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        {/* <form action="">
          <br />
          <legend>Input Form</legend>
          <label>
            Length:
            <input type="text" className="length" name="length" />
          </label>
          <br />
          <label>
            Width:
            <input type="text" className="width" />
          </label>
          <br />
          <label>
            Height:
            <input type="text" className="height" />
          </label>
          <br />
          <button className="btn" id="calculate" onClick={calculate}>
            Calculate
          </button>
        </form> */}
        <p id="info">Please enter in the number values for the measurements:</p>
        <table>
          <tbody>
            <tr>
              <td>
                <p id="length">Length: </p>
              </td>
              <td>
                <input type="text" name="${lengthValue}" />
              </td>
            </tr>
            <tr>
              <td>
                <p id="width">Width: </p>
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <p id="height">Height: </p>
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn" id="calculate" onClick={calculate}>
                  Calculate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Results</h2>
      </header>
    </div>
  )
}

export default App
