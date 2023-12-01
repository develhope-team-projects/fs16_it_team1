
export const Paragraph = ({
    step,
    hideButton,
    handleUserChoice,
    handleDiceRoll,
    gameOver,
    handleRestart
}) => {
  return (
    <div>
      <p>{step.text}</p>
      {!hideButton && 
          <div>
            {step.hasCrossroads // è true quando c'è una scelta da fare
            ? <div>
                {step.crossRoad?.map((choice, index) => (
                  <button key={index} onClick={() =>handleUserChoice(choice.goTo)}>{choice.text}</button>
                ))}
              </div>
            : step.hasChallenge // è true quando c'è il lancio del dado
              ?<button onClick={() => handleDiceRoll(step)}>Lancia il dado</button>
              :!gameOver && <button onClick={() => handleUserChoice(step.goTo)}>Continua</button>
          }
          {gameOver && <button onClick={handleRestart}>Ricomincia Nuova partita</button>}
        </div>
      }
    </div>
  )
}