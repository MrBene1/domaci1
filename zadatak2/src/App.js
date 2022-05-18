import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/card-1.jpeg", matched: false },
  { "src": "/img/card-2.jpeg", matched: false },
  { "src": "/img/card-3.jpeg", matched: false },
  { "src": "/img/card-4.jpeg", matched: false },
  { "src": "/img/card-5.jpeg", matched: false },
  { "src": "/img/card-6.jpeg", matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [score, setScore] = useState(0)
  const [tries, setTries] = useState(5)
  const [message, setMessage] = useState('')

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setScore(0)
    setTries(5)
    setMessage('')
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        setScore(prevScore => prevScore+1)
        if (score===6) setMessage('You have won! To start again click new game')
        resetTurn()
      } else {
        setTries(prevTries =>prevTries - 1)
        if (tries === 1) setMessage('You have lost! To start again click new game')
        setTimeout(() => resetTurn(), 1000)
      }

    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }


  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>{message}</p>
      <p>Tries left: {tries}</p>
      <p>Score: {score}</p>
      <p>Total Turns: {turns}</p>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      
      
    </div>
  );
}

export default App