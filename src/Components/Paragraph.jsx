
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
                  <button key={index} onClick={() =>handleUserChoice(choice.goTo)}>{choice.text}</button>  //si passa sempre come parametro della funzione goTo che ti fa spostare nell'array
                ))}
              </div>
            : step.hasChallenge // è true quando c'è il lancio del dado
              ?<button onClick={() => handleDiceRoll(step)}>Lancia il dado</button>  //mostra il bottone lancia il dado invece di continua
              :!gameOver && <button onClick={() => handleUserChoice(step.goTo)}>Continua</button> //se la variabile e falsa motra il bottone continua aggiornando l'indice dell'array con goTo
          }
          {gameOver && <button onClick={handleRestart}>Ricomincia Nuova partita</button> //si toglie il bottone contina e compare Ricomincia nuova partita
          } 
        </div>
      }
    </div>
  )
}