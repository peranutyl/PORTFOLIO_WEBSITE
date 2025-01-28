import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [cardFront, setCardFront] = useState("")
  const [cardList, setCardList] = useState([])
  const handleInput = (event) => {
    setCardFront(event.target.value)
    console.log("cat")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCardList(cardList.concat(cardFront))
    console.log("cat")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput}></input>
      <button type="submit">submit</button>
    </form>
    <ul>
    {cardList.map((card, i) => <Card key={i} card={card}></Card>)}
    </ul>
    </>
  )
}

export default App
