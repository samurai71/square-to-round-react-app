import React from 'react'
import '../App.css'

function calculate() {
  //let lengthValue: number = 0;
  // let widthValue: number = 0;
  // let heightValue: number = 0;
}

function Form() {
  const [length, setLength] = React.useState(0)
  return (
    <>
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
            value={length}
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
        <button className="btn bg-zinc-700" id="calculate" onClick={calculate}>
          Calculate
        </button>
      </form>
    </>
  )
}

export default Form
