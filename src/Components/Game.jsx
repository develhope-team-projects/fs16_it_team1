
import { Paragraph } from "./Paragraph";
import { useState } from 'react';



export function Game() {
 


    const storyArray = [
        {
          id: 0,
          text: 'Sei morto!',
          hasCrossroads: false,
          hasChallenge: false,
        },
        {
          id: 1,
          text: "Nel regno di Eldoria persiste un antico culto dedicato a Tiamath, all'interno della cui cripta è tenuto custodito un drago d'ombra. La profezia narra che i sigilli della criptasi sarebbero infranti il quattordicesimo giorno di Alturiac. Con l'avvicinarsi di un'eclissi lunare, il drago si sarebbe risvegliato, portando con sé un'imminente apocalisse.Dall'istante del suo risveglio all'alba successiva, il sole non avrebbe più risplenduto in tutto il suo fulgore, ma avrebbe lasciato spazio a un'eterna eclissi solare.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 2
        },
        {
          id: 2,
          text: "Nel bel mezzo di questa imminente catastrofe, si ergono figure di speranza e coraggio. Nella luce del sole brillante, emerge un paladino, un guerriero il cui destino è intrecciato indissolubilmente a quello del regno. Vestito in un'armatura scintillante di placche, i cui simboli sacri risplendono di un bagliore divino, il paladino avanza con occhi intensi e determinati. La sua spada sacra, pronta a essere sguainata contro le tenebre, è la lama che taglia l'oscurità, un baluardo contro la minaccia del drago d'ombra. Ti viene assegnata una missione dal Re: a sud c'è un villaggio poco lontano da qui. Pochi mesi fa alcuni mostri hanno iniziato ad avvicinarsi sempre di più e da poco è finito in fiamme. Vorrei che andassi a controllare larea e scoprissi la causa di questi strani avvicinamenti.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 3
        },
        {
          id: 3,
          text: "Prendi il tuo equipaggiamento, la tua spada sacra, un piccolo rifornimento e all'alba ti dirigi verso il villaggio. La capitale è grande ma proprio per questo c'è molta gente che va e viene, anche in carrozza, e infatti eccone una proprio vicino al palazzo reale, che fortuna.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 4
        },
        {
          id: 4,
          text: "La carrozza è trainata da due cavalli grigiastri, uno di loro ha qualche graffio ai lati della groppa, saranno stati attaccati da qualche mostro prima di arrivare in città. A capo della carrozza c'è un uomo sulla mezz'età con lo sguardo perso nel vuoto.",
          hasCrossroads: true,
          hasChallenge: false,
          crossRoad: [
            {
              text: 'Gli urli contro di darti un passaggio',
              goTo: 5
            },
            {
              text: 'Ti avvicini e gentilmente chiedi se può accompagnarti',
              goTo: 10
            },
          ]
        },

        //Scelta A(1)
        {
          id: 5,
          text: "Il vecchio sobbalza e sgrana gli occhi rivolgendoti uno sguardo disprezzante: -Potresti anche evitare di urlare al primo che capita sai? Diciamo che non è il massimo dell'educazione e qui ho rischiato un'infarto, ma va bene, dove saresti diretto? Ad una competizione di ruggiti tra bestie?",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 6
        },
        {
          id: 6,
          text: "-Non c'è bisogno di essere scontrosi... Comunque sto andando a sud, devo visitare uno dei villaggi vicini.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 7
        },
        {
          id: 7,
          text: "Il vecchio ti lancia un occhiataccia -Puoi salire, fortuna vuole che io debba passare di li, purtroppo per me.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 8
        },
        {
          id: 8,
          text: "Uno schiocco di frusta e la carrozza si mette in viaggio. Usciti dalla capitale l'aria ha iniziato a farsi sempre più pesante man mano che ci si allontanava.Al calar della notte del secondo giorno intravedi il villaggio e ancor prima l'intera area bruciata. Sembrava che fosse passato un drago con la luna storta ma è abbastanza improbabile data la limitatezza dei danni.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 9
        },
        {
          id: 9,
          text: "Sono arrivato. Non morire, mi piacerebbe avere un'altro passaggio e con un balzo salti giu dalla carrozza per atterrare sulle tracce di cenere. Sisi, non ho ancora intenzione di farmi ammazzare. Arrivederci. dice il vecchio prima di allontanarsi e sparire all'orizzonte.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 13
        },





        //Scelta B(1)
        {
          id: 10,
          text: "Il vecchio squote leggermente la testa come per riprendersi e si gira lentamente verso di te Ehm si, certo. Tanto sono diretto anche io da quelle parti, sali pure...La tua presenza può solo che essere confortante... credo. dice il vecchio a bassa voce",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 11
        },
        {
          id: 11,
          text: "Uno schiocco di frusta e la carrozza si mette in viaggio. Usciti dalla capitale l'aria ha iniziato a farsi sempre più pesante man mano che ci si allontanava. Al calar della notte del secondo giorno intravedi il villaggio e ancor prima l'intera area bruciata. Sembrava che fosse passato un drago con la luna storta ma è abbastanza improbabile data la limitatezza dei danni. ",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 12
        },
        {
          id: 12,
          text: "Scendo qui, ti ringrazio. Fa attenzione più avanti, ultimamente i mostri sembrano più aggressivi.dici scendendo mentre la carrozza sembra cigolare per lo sforzo. Fai attenzione anche tu. dice il vecchio prima di allontanarsi e sparire all'orizzonte.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 13
        },






        {
            id: 13,
            text: "Davanti ai tuoi occhi rimangono solo cenere, corpi bruciati, macerie e qualche mezza casa sopravvissuta per miracolo anche se totalmente nere e ancora fumanti Un edificio spicca leggermente tra tutti, sembra aver resistito meglio degli altri... quasi come se le fiamme non fossero riuscite a superare la porta. Certo non è opera di qualche goblin... chissà che razza di mostro può aver fatto tutto questo.",
            hasCrossroads: true,
            hasChallenge: false,
            crossRoad: [
              {
                text: 'Perlustri il villaggio cercando indizi',
                goTo: 14
              },
              {
                text: "Ti dirigi direttamente all'edificio integro.",
                goTo: 17
              },
            ]
          },


        //Scelta A(2)

        {
            id: 14,
            text: 'Potresti trovare qualcosa che ti faccia capire meglio cosa è successo qui. Decidi di perlustrare anche le piccole case ormai definibili macerie. FAI UN TIRO SU INTELLIGENZA PUNTEGGIO RICHIESTO 7',
            hasCrossroads: false,
            hasChallenge: true, 
            goTo: 15,
            challenge: {
                limitScore:7,
                goTo: 15,
                goToOver:16
              },
          },

          //SceltaA(2)esito positivo dado
          {
          id: 15,
          text: "Analizzi l'area circostante con estrema attenzione, gli odori di fumo e sangue ti permeano il naso ma la tua vista non ne ha ancora risentito. Noti una fiochissima luce violastra tra le varie macerie di una casa. Liberato il passaggio tra te e quella piccola luce vedi davanti a te un piccolo vaso che sembra contenere proprio quella luce. Spacchi il vaso con un calcio e ti ritrovi davanti a te ciò che sembra una scaglia. Il colore è simile all'ossidiana ma la consistenza è tutt'altro fuorchè dura, sembra come se si stesse ancora formando. E' una scaglia del drago ombra...Queste scaglie non si staccano direttamente dal corpo del drago come si potrebbe pensare ma crescono quasi come muffa nei posti collegati al drago. La particolarità, oltre alla fioca luce viola, è che fanno diventare più aggressivi i mostri nelle vicinanze, forse l'attacco è stato causato da questo.E mentre vieni assorbito dalle varie ipotesi ti dirigi verso l'unico punto non ancora controllato.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 18
        },
       

         

        //Scelta A(2)esito negativo dado
        {
          id: 16,
          text: "Analizzi l'area circostante ma niente sembra dire qualcosa di più. Sono solo cumuli di macerie, vai avanti a passo svelto e ti ritrovi davanti all'unico edificio rimasto in piedi ",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 18
        },


        //SceltaB(2)
         {
          id: 17,
          text: "Probabilmente non troveresti nulla cercando altrove, l'unica scelta sensata è entrare in quell'edificio.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 18
        },

        {
          id: 18,
          text: "Fine Gioco.",
          hasCrossroads: false,
          hasChallenge: false,
          goTo: 19
        },



       
        
        


        // {
        //   id: 6,
        //   text: "",
        //   hasCrossroads: false,
        //   hasChallenge: false,
        //   goTo: 7
        // },
        // {
        //   id: 2,
        //   text: 'Dove vuoi andare?',
        //   hasCrossroads: true,
        //   hasChallenge: false,
        //   crossRoad: [
        //     {
        //       text: 'destra',
        //       goTo: 6
        //     },
        //     {
        //       text: 'sinistra',
        //       goTo: 3
        //     },
        //   ]
        // },
        // {
        //   id: 3,
        //   text: 'Sei andato a sinistra e sei ancora vivo! bravo!',
        //   hasCrossroads: false,
        //   hasChallenge: false,
        //   goTo: 4
        // },
        // {
        //   id: 4,
        //   text: 'Adesso però devi saltare un fossato. Sei un ciccione quindi devi ottenere un punteggio maggiore di 5 per farcela.',
        //   hasCrossroads: false,
        //   hasChallenge: true, 
        //   goTo: 5,
        //   challenge: {
        //       limitScore: 5,
        //       goTo: 5
        //     },
        // },
        // {
        //   id: 5,
        //   text: 'Che botta di culo! Sei salvo',
        //   hasCrossroads: false,
        //   hasChallenge: false,
        //   goTo: 6
        // },
      ];



      const [userStoryArray, setUserStoryArray] = useState([storyArray[1]]);

      const [gameOver, setGameOver] = useState(false)
    
    //   const handleUserChoice = (index) => {   
    //     setUserStoryArray((userStoryArray) => [...userStoryArray, storyArray[index]])
    //   };

    const handleUserChoice = (index) => {   //creò la condizione che se l'array è finito gestisci la situazione nell'else
        if (index >= 0 && index < storyArray.length) {
          setUserStoryArray((userStoryArray) => [...userStoryArray, storyArray[index]]);
        } else {
            setGameOver(true) //fa comparire un bottone con ricomincia
        }
      };
    
      const handleDiceRoll = (step) => {
        const diceScore = Math.floor(Math.random() * 20) + 1;
        alert(`Hai ottenuto ${diceScore}`);
        if(diceScore > step.challenge.limitScore){
          handleUserChoice(step.challenge.goTo);  //se il numero uscito è maggiore di limitScore allore si aggiorna index con il numero di goTo
        } else {
          handleUserChoice(step.challenge.goToOver); // se minore aggiorna l'index con il numero della variabile goToOver
        }
      };

      const handleRestart =() =>{
        setUserStoryArray([storyArray[1]]);
        setGameOver(false)
      }
    
 
    return (
        <div>
          {userStoryArray&& userStoryArray.map((step, index) => {
            if(step.id === 0){
              return(
                <>
                <h2 key={index}>{step.text}</h2>
                {!gameOver&& <button onClick={handleRestart}>Ricomincia</button>  //creazione restart per ricominciare
                }
                </>
             ) 
            } else {
              return <Paragraph step={step} key={index} handleUserChoice={handleUserChoice} handleDiceRoll={handleDiceRoll} hideButton={userStoryArray.length > index + 1} gameOver={gameOver} handleRestart={handleRestart}/>
            }
          })}
        </div>
      )
    }
    
   


