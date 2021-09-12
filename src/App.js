import './App.css'
import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    let bloodAlcohol = 0

    if (gender === "male") {
      bloodAlcohol = gramsLeft / (weight * 0.7)
    } else {
      bloodAlcohol = gramsLeft / (weight * 0.6)
    }
    if (bloodAlcohol < 0) {
      setResult(0)
    } else {
      setResult(bloodAlcohol)
    }
  }

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <h3>Blood alcohol level calculator</h3>
            <label className="form-label mt-2">Weight</label>
            <input
              type='number' className="form-control"
              value={weight}
              onChange={e => setWeight(e.target.value)}
            ></input>

            <label className="form-label mt-2">Bottles</label>
            <select className="form-select" aria-label="Select number of bottles"
              value={bottles} onChange={e => setBottles(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <label className="form-label mt-2">Time</label>
            <select className="form-select" aria-label="Select time"
              value={time}
              onChange={e => setTime(e.target.value)}>
              <option value="1">1 h</option>
              <option value="1.5">1,5 h</option>
              <option value="2">2 h</option>
              <option value="2.5">2,5 h</option>
              <option value="3">3 h</option>
              <option value="3.5">3,5 h</option>
              <option value="4">4 h</option>
              <option value="4.5">4,5 h</option>
              <option value="5">5 h</option>
            </select>

            <div className="form-check mt-3">
              <input className="form-check-input" type="radio" name="gender" value="male"
              onChange={e=> setGender(e.target.value)}></input>
              <label className ="form-check-label">
              Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="female"
              onChange={e=> setGender(e.target.value)}></input>
              <label className ="form-check-label">
              Female
              </label>
            </div>

            <label className="form-label mt-3">Your blood alcohol level</label>
            <output type="number" className="form-control">{result.toFixed(2)}</output>
            <button type="submit"
              className="btn btn-primary mt-3">Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App;
