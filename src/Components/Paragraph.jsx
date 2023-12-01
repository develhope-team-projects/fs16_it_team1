export const Paragraph = ({
    step,
    hideButton,
    handleUserChoice,
    handleDiceRoll,
    gameOver,  //Aggiunti da Ale
    handleRestart  //Aggiunti da Ale
}) => {
  return (
    <div>
      <p className="text-game">{step.text}</p>
      {!hideButton && 
          <div>
            {step.hasCrossroads // è true quando c'è una scelta da fare
            ? <div className="container-continue-button">
                {step.crossRoad?.map((choice, index) => (
                    <button className='button-continue' key={index} onClick={() =>handleUserChoice(choice.goTo)}>{choice.text}</button>
                ))}
              </div>
            : step.hasChallenge
               // è true quando c'è il lancio del dado
              ? <div className="container-continue-button"><button className='button-continue' onClick={() => handleDiceRoll(step)}>Lancia il dado</button></div>
              : <div className="container-continue-button">{!gameOver && <button className='button-continue' onClick={() => handleUserChoice(step.goTo)}>Continua</button>}</div>
          }
          {gameOver && <div className="container-continue-button"><button className="button-continue" onClick={handleRestart}>Ricomincia nuova partita!!</button></div>}
        </div>
      }
    </div>
  )
}