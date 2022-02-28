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
        <h1>Square to Round Converter</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        {/* <form action=''>
          <br />
          <legend>Input Form</legend>
          <label>Length </label>
          <input type='text' className='length' name='length' />
          <br />
          <label>Width </label>
          <input type='text' className='width' />
          <br />
          <label>Height </label>
          <input type='text' className='height' />
          <br />
          <button className='btn' id='calculate' onClick={calculate}>
            Calculate
          </button>
        </form> */}
        <table>
          <tbody>
            <tr>
              <td>Length: </td>
              <td>
                <input type="text" name="${lengthValue}" />
              </td>
            </tr>
            <tr>
              <td>Width: </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Height: </td>
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
