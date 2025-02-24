import { useState } from "react"
import "./CounterPage.css"

function CounterPage() {
    const initialValue = 5
    const [count, setCount] = useState(initialValue)
    const [scores, setScores] = useState([])

    const plus1Handler = () => setCount(prevState => prevState +1) //geresnis budas
    const minus1Handler = () => setCount(count - 1)
    const plus2Handler = () => setCount(count + 2)
    const minus2Handler = () => setCount(count - 2)
    const resetHandler = () => setCount(initialValue)

    const inputHandler = (event) => {
        const newValue = Number(event.target.value) // setCoun(event.target.value)
        setCount(isNaN(newValue) ? 0 : newValue)
    }
    const saveScore = () => {
        setScores([...scores, count])
    }
  
    const scoreList = scores.map((score, index) => {
        const scoreColor = score < 5 ? "#e0493b" : "#a5b56b"
    return <li  key={index} style={{ color: scoreColor }}>{score}<button onClick={() => deleteScore(index)}>X</button></li>
})

  const deleteScore = (indexToDelete) => {
    setScores(scores.filter((_, index) => index !== indexToDelete))
}

let textColor = count < 5 ? "#e0493b" : "#a5b56b"


    return (
        <div className="counter">
        <div>
    <input type="number" value={count} onChange={inputHandler} min="1" max="10"></input>
          <h3 style={{ color: textColor }}>{count}</h3>

                <button onClick={plus2Handler} disabled={count >= 8}>+2</button>
                <button onClick={plus1Handler} disabled={count >= 10}>+1</button>
                <button onClick={minus1Handler} disabled={count < 2}>-1</button>
                <button onClick={minus2Handler} disabled={count < 3}>-2</button>
                <button onClick={resetHandler}>Reset</button>
                <button onClick={saveScore}>Įrašyti balą</button></div>
           <div><h4>Balai:</h4>
           <ul>{scoreList}</ul>
            </div></div>
    )
}

export default CounterPage