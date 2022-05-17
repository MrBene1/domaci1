import './SingleCard.css'

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

  const handleClick = () => {
    if (!disabled) { //ako nije dis
      handleChoice(card);
    }
  }

    return ( 
        <div className='card'> 
            <div className={flipped ? "flipped": ""}>
              <img className='front' src={card.src} alt="img" />
              <img className='back' 
              src='/memory-cards/front.jpg' 
              onClick={handleClick} 
              alt="img" 
              />
            </div>
          </div>
    );
}
 
export default SingleCard;