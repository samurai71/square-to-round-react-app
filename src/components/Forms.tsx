import React from 'react'
import '../App.css'

function Form() {
  //const length: number = React.useState(0)
  // const [state, setState] = React.useState({
  //   length: 0,
  //   width: 0,
  //   height: 0,
  // })
  // function handleChange (event) => {
  //   const name = event.target.name
  //   const value =
  //     event.target.type === 'checkbox'
  //       ? event.target.checked
  //       : event.target.value
  //   setState({
  //     ...state,
  //     [name]: value,
  //   })
  // }
  // function handleChange(event) {
  //     setState (prevState => {
  //       return {
  //         ...prevState,
  //           [event.target.name]: event.target.value
  //       }
  //     }),
  //   }
  function calculate() {
    // const result = state.length * state.width * state.height
  }
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
            //value={state.length}
            // onChange={handleChange}
          />
        </label>
        <br />
        <label className="font-serif">
          Width:
          <input
            type="text"
            className="mx-2 align-middle rounded-lg"
            name="width"
            //value={state.width}
            //onChange={handleChange}
          />
        </label>
        <br />
        <label className="font-serif">
          Height:
          <input
            type="text"
            className="mx-2 align-middle rounded-lg"
            name="height"
            //value={state.height}
            //onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn bg-zinc-700" id="calculate" onClick={calculate}>
          Calculate
        </button>
      </form>
      <h2 className="text-2xl font-bold mt-5">Results</h2>
      {/* <p>The answer is: {result}</p> */}
    </>
  )
}

export default Form
