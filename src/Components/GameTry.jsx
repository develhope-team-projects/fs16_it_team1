import { Paragraph } from "./Paragraph";
import { useState } from 'react';
import { useParams } from "react-router-dom"


export function GameTry() {
    const { hero } = useParams()

    const storyArray = [
        {
            id: 0,
            text: 'Sei morto!',
            hasCrossroads: false,
            hasChallenge: false,
        },
        {
            id: 1,
            text: <div>
                Nel regno di Eldoria persiste un antico culto dedicato a Tiamath, all'interno della cui
                cripta è tenuto custodito un drago d'ombra. La profezia narra che i sigilli della cripta
                si sarebbero infranti il quattordicesimo giorno di Alturiac.Con l'avvicinarsi di
                un'eclissi lunare, il drago si sarebbe risvegliato, portando con sé un'imminente apocalisse.
                Dall'istante del suo risveglio all'alba successiva, il sole non avrebbe più risplenduto in
                tutto il suo fulgore, ma avrebbe lasciato spazio a un'eterna eclissi solare.
            </div>,
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 2
        },
        {
            id: 2,
            text: "Nel bel mezzo di questa imminente catastrofe, si ergono figure di speranza e coraggio. Nella luce del sole brillante, emerge un paladino, un guerriero il cui destino è intrecciato indissolubilmente a quello del regno. Vestito in un'armatura scintillante di placche, i cui simboli sacri risplendono di un bagliore divino, il paladino avanza con occhi intensi e determinati. La sua spada sacra, pronta a essere sguainata contro le tenebre, è la lama che taglia l'oscurità, un baluardo contro la minaccia del drago d'ombra.",
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 3
        },
        {
            id: 3,
            text: "Ti viene assegnata una missione dal Re: ''c'è un villaggio poco lontano da qui, pochi mesi fa alcuni mostri hanno iniziato ad avvicinarsi sempre di più e da poco è finito in fiamme. Vorrei che andassi a controllare l'area e scoprissi la causa di questi strani avvicinamenti.'' ",
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 4,
        },
        {
            id: 4,
            text: "Prendi il tuo equipaggiamento, la tua spada sacra, un piccolo rifornimento e all'alba ti dirigi verso il villaggio. La capitale è grande ma proprio per questo c'è un molta gente che va e viene, anche in carrozza, e infatti eccone una proprio vicino al palazzo reale, che fortuna. ",
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 5,
        },
        {
            id: 5,
            text: "La carrozza è trainata da due cavalli grigiastri, uno di loro ha qualche graffio ai lati della groppa, saranno stati attaccati da qualche mostro prima di arrivare in città. A capo della carrozza c'è un uomo sulla mezz'età con lo sguardo perso nel vuoto.",
            hasCrossroads: true,
            hasChallenge: false,
            crossRoad: [
                {
                    text: 'Gli urli contro di darti un passaggio',
                    goTo: 7
                },
                {
                    text: 'Ti avvicini e gentilmente gli chiedi se può accompagnarti',
                    goTo: 6
                },
            ]
        },
        {
            id: 6,
            text: <div>
                "Salve, sono diretto a sud, devo controllare uno dei villaggi vicini. Per caso può accompagnarmi?"<br />
                Il vecchio squote leggermente la testa come per riprendersi e si gira lentamente verso di te:<br />
                "Ehm si, certo. Tanto sono diretto anche io da quelle parti, sali pure...<br />
                La tua presenza può solo che essere confortante... credo." dice il vecchio a bassa voce.<br />
                Uno schiocco di frusta e la carrozza si mette in viaggio.
                Usciti dalla capitale l'aria ha iniziato a farsi sempre più pesante man mano che ci si allontanava.
                Al calar della notte del secondo giorno intravedi il villaggio e ancor prima l'intera area bruciata.
                Sembrava che fosse passato un drago con la luna storta ma è abbastanza improbabile data la limitatezza dei danni.<br />
                "Scendo qui, ti ringrazio. Fa attenzione più avanti, ultimamente i mostri sembrano più aggressivi." dici scendendo mentre la carrozza sembra cigolare per lo sforzo.<br />
                "Fai attenzione anche tu." dice il vecchio prima di allontanarsi e sparire all'orizzonte.
            </div>,
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 8
        },
        {
            id: 7,
            text: <div>
                <pre>"HEY LEI, HO BISOGNO DI UN PASSAGGIO" la tua voce rimbomba per le strade della citta.</pre>

            </div>,
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 8
        },
        {
            id: 8,
            text: 'Adesso però devi saltare un fossato. Sei un ciccione quindi devi ottenere un punteggio maggiore di 5 per farcela.',
            hasCrossroads: false,
            hasChallenge: true,
            goTo: 9,
            challenge: {
                limitScore: 5,
                goToOver: 0, //Riporta ad una parte con risultato inferiore al limitScore
                goTo: 9 //Riporta ad una parte con risultato superiore al limitScore
            },
        },
        {
            id: 9,
            text: 'Che botta di culo! Sei salvo',
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 10
        },
        {
            id: 10,
            text: 'fine game',
            hasCrossroads: false,
            hasChallenge: false,
            goTo: 11
        },
    ];

    const [userStoryArray, setUserStoryArray] = useState([storyArray[1]]);  //Parte da 1 perche 0 = morte!

    const [gameOver, setGameOver] = useState(false)

    //   const handleUserChoice = (index) => {   
    //     setUserStoryArray((userStoryArray) => [...userStoryArray, storyArray[index]])
    //   };

    const handleUserChoice = (index) => {   //creo la condizione che se l'array è finito gestisci la situazione nell'else
        if (index >= 0 && index < storyArray.length) {
            setUserStoryArray((userStoryArray) => [...userStoryArray, storyArray[index]]);
        } else {
            setGameOver(true)
        }
    };

    const handleDiceRoll = (step) => {
        const diceScore = Math.floor(Math.random() * 20) + 1;
        alert(`Hai ottenuto ${diceScore}`);
        if (diceScore > step.challenge.limitScore) {
            handleUserChoice(step.challenge.goTo);  //se il numero uscito è maggiore di limitScore allore si aggiorna index
        } else {
            handleUserChoice(step.challenge.goToOver); // se minore index torna a 0
        }
    };

    const handleRestart = () => {
        setUserStoryArray([storyArray[1]]);
        setGameOver(false)
    }

    return (
        <div className="wrapper-game">
            <div className="container-game">
                <div className="container-text-game">
                    <div>
                        {userStoryArray.map((step, index) => {
                            if (step.id === 0) {
                                return (
                                    <>
                                        <h2 key={index}>{step.text}</h2>
                                        {!gameOver &&
                                            <div className="container-continue-button">
                                                <button className='button-continue' onClick={handleRestart}>Ricomincia</button>
                                            </div>  //creazione restart per ricominciare
                                        }
                                    </>
                                )
                            } else {
                                return <Paragraph step={step} key={index}
                                    handleUserChoice={handleUserChoice}
                                    handleDiceRoll={handleDiceRoll}
                                    hideButton={userStoryArray.length > index + 1}
                                    gameOver={gameOver}
                                    handleRestart={handleRestart} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}