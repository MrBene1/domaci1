import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  {'src': '/memory-cards/card-1.jpeg', matched: false},
  {'src': '/memory-cards/card-2.jpeg', matched: false},
  {'src': '/memory-cards/card-3.jpeg', matched: false},
  {'src': '/memory-cards/card-4.jpeg', matched: false},
  {'src': '/memory-cards/card-5.jpeg', matched: false},
  {'src': '/memory-cards/card-6.jpeg', matched: false}
]

function App() {
  const [cards, setCards] = useState([]); //empty arr
  //state how many tyurns a user is taking
  const [turns, setTurns] = useState(0);
  //turn
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [openings, setOpenings] = useState(5);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()})); //add an id
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);
    setOpenings(5);
    setScore(0)
    setMessage('')
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card):setChoiceOne(card);
  }

  useEffect(()=>{
    
    if (choiceOne && choiceTwo){
      setDisabled(true);
      if (choiceOne.src===choiceTwo.src){
        setScore(prevScore => prevScore + 1);
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) return {...card, matched:true}
            else return card;
          })
        })
      resetTurn();
      }else{
        setOpenings(prevOpenings => prevOpenings - 1);
        if (openings === 1) {
          setMessage('You have lost! To start again click on new game');
        }
        if (score === 6) {
          setMessage('You have won! To start again click on new game');
        }
        setTimeout(() => {
          resetTurn()
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTruns => prevTruns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Welcome to Memory Game!</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Moves: {turns}</p>
      <p>Openings: {openings}</p>
      <p>{message}</p>
      <p>Score: {score}</p>
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