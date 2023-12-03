import { Paragraph } from "./Paragraph";
import { useState } from 'react';
import { useParams } from "react-router-dom"

const storyArrayPaladin = [
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
        text: "HEY LEI, HO BISOGNO DI UN PASSAGGIO la tua voce rimbomba per le strade della citta.",
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






const storyArrayMage = [
    {
        id: 0,
        text: 'Sei morto!',
        hasCrossroads: false,
        hasChallenge: false,
    },
    {
        id: 1,
        text: 'Siamo nel regno di Eldoria, dove tu, Aric, sei un mago errante con l\'obiettivo di sconfiggere il malvagio Drago delle Ombre.',
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 2,
    },
    {
        id: 2,
        text: 'Il tuo viaggio inizia nella Foresta Incantata. Davanti a te si presenta un bivio. Cosa fai?',
        hasCrossroads: true,
        hasChallenge: false,
        crossRoad: [
            {
                text: 'Prendi il sentiero illuminato dalla luna.',
                goTo: 3,
            },
            {
                text: 'Segui il sentiero avvolto nell\'oscurità.',
                goTo: 4,
            },
        ],
    },
    {
        id: 3,
        text: 'Il sentiero illuminato ti conduce a un chiaro di luna magico. Qui incontri un guardiano elfico.',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Chiedi al guardiano consigli sulla tua missione.',
                goTo: 5,
            },
            {
                text: 'Ringrazia il guardiano e prosegui da solo.',
                goTo: 6,
            },
        ],
    },
    {
        id: 4,
        text: 'Il sentiero oscuro ti porta a una radura infestata da creature oscure. Devi affrontare una sfida magica. Devi superare 5 per poter sconfiggere le creature oscure',
        hasChallenge: true,
        challenge: {
            limitScore: 5,
            goToOver: 8,
            goTo: 6,
        },
    },
    {
        id: 5,
        text: 'Il guardiano ti rivela una profezia: "Per sconfiggere il Drago delle Ombre, cerca l\'antico artefatto nel Deserto delle Visioni."',
        goTo: 7,
    },
    {
        id: 6,
        text: 'Prosegui da solo attraverso la foresta incantata. Trovi una pozione magica utile per il tuo viaggio.',
        goTo: 7,
    },
    {
        id: 7,
        text: 'Decidi di:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Dirigerti verso il Deserto delle Visioni.',
                goTo: 9,
            },
            {
                text: 'Esplorare le Caverne Oscure alla ricerca di informazioni.',
                goTo: 10,
            },
        ],
    },
    {
        id: 8,
        text: 'Non riesci a superare la sfida magica. Le creature oscure ti intrappolano e il tuo viaggio giunge a una fine prematura.',
        goTo: 0,
    },
    {
        id: 9,
        text: 'Nel Deserto delle Visioni, incontri il mercante magico Zephyr. Ti offre un oggetto magico a tua scelta:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Bacchetta di Fulmine: potente attacco magico.',
                goTo: 11,
            },
            {
                text: 'Elmo dell\'Invisibilità: possibilità di evitare gli attacchi nemici.',
                goTo: 11,
            },
        ],
    },
    {
        id: 10,
        text: 'Esplorando le Caverne Oscure, scopri un antico grimorio magico. Devi decidere se studiarlo o proseguire verso il Deserto delle Visioni.',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Studia il grimorio magico.',
                goTo: 12,
            },
            {
                text: 'Prosegui verso il Deserto delle Visioni.',
                goTo: 9,
            },
        ],
    },
    {
        id: 11,
        text: 'Con il tuo nuovo potere magico, continui il viaggio. Arrivi alla Valle delle Ombre, dove il Drago custodisce l\'Antica Torre del Crepuscolo.',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Affronta direttamente il Drago.',
                goTo: 13,
            },
            {
                text: "Raggiungi l'Antica Torre del Crepuscolo senza attirare l'attenzione del Drago.",
                goTo: 14,
            },
        ],
    },
    {
        id: 12,
        text: 'Studiando il grimorio, acquisisci nuove abilità magiche. Il tuo potere cresce, ma il tempo stringe. Raggiungi il Deserto delle Visioni.',
        goTo: 9,
    },
    {
        id: 13,
        text: 'Il Drago delle Ombre ti attacca con furore. Devi lanciare il dado per determinare l\'esito dello scontro, Devi superare 15 per poter indebolire subito il dado, sennò continui il combattimento.',
        hasChallenge: true,
        challenge: {
            limitScore: 15,
            goTo: 16,
            goToOver: 15,
        },
    },
    {
        id: 14,
        text: 'Raggiungi l\'Antica Torre del Crepuscolo senza attirare l\'attenzione del Drago. Qui trovi un portale magico che conduce direttamente alla tana del Drago.',
        goTo: 17,
    },
    {
        id: 15,
        text: 'Con un tiro del dado, riesci comunque a respingere l\'attacco del Drago. Prosegui il combattimento.',
        goTo: 16,
    },
    {
        id: 16,
        text: 'In uno scontro epico, utilizzi le tue abilità magiche e l\'oggetto magico per indebolire il Drago delle Ombre.',
        goTo: 18,
    },
    {
        id: 17,
        text: 'Raggiungi la tana del Drago attraverso il portale magico. Trovi il Drago addormentato. Devi decidere:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Attacca il Drago mentre dorme.',
                goTo: 19,
            },
            {
                text: 'Cerca di comunicare con il Drago.',
                goTo: 20,
            },
        ],
    },
    {
        id: 18,
        text: 'Il Drago delle Ombre è sconfitto! La tua magia ha trionfato e Eldoria è salva.',
        goTo: 24,
    },
    {
        id: 19,
        text: 'Attacchi il Drago mentre dorme, ma si risveglia inaspettatamente. Devi affrontare una sfida finale. Per vincerla devi ottenere almeno 18',
        hasChallenge: true,
        challenge: {
            limitScore: 18,
            goToOver: 21,
            goTo: 22,
        },
    },
    {
        id: 20,
        text: 'Cerchi di comunicare con il Drago. Sorprendentemente, il Drago accetta di parlare. Rivela che il suo cuore è stato corrotto e chiede aiuto per liberarsi dalla malvagità.',
        goTo: 21,
    },
    {
        id: 21,
        text: 'Decidi di:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Aiutare il Drago a liberarsi dalla corruzione.',
                goTo: 23,
            },
            {
                text: 'Concludere il tuo viaggio sconfiggendo il Drago .',
                goTo: 22,
            },
        ],
    },
    {
        id: 22,
        text: 'Nonostante la durezza della battaglia, il tuo potere magico trionfa. Il Drago delle Ombre è sconfitto e il regno di Eldoria è finalmente al sicuro.',
        goTo: 24,
    },
    {
        id: 23,
        text: 'Ti unisci al Drago nella sua ricerca di redenzione. Insieme, liberi il suo cuore dalla corruzione. Eldoria trova un alleato potente nel Drago restaurato e la pace prevale.',
        goTo: 24,
    },
    {
        id: 24,
        text: 'Fine Gioco',
    },
];


export function GameTry() {


    const { hero } = useParams()

    const getArrayStoryFromHero = (hero) => {  // in base al parametro di hero la funzione ci restituisce un array che andra nello state che verra usato per eseguire il map
        if(hero === "mage"){
             return storyArrayMage
        }else if(hero === "paladin"){
            return storyArrayPaladin
        }else {
            // default value (non necessaria)
            return storyArrayPaladin
        }
    }



    const [arrayToHero, setArrayToHero] = useState(getArrayStoryFromHero(hero)  ) //da non andare a modificare 
    const [userStoryArray, setUserStoryArray] = useState([arrayToHero[1]]);  //Parte da 1 perche 0 = morte!

    const [gameOver, setGameOver] = useState(false)

    

    const handleUserChoice = (index) => {  //se la lunghezza è minore dell'array allora aggiorna lo state
        if (index >= 0 && index < arrayToHero.length) {
            setUserStoryArray((userStoryArray) => [...userStoryArray, arrayToHero[index]]);
            console.log(index);
        }
        if(index === arrayToHero.length-1 || index === 0) { //debug
            setGameOver(true)
        }
    };

    const handleDiceRoll = (step) => {
        const diceScore = Math.floor(Math.random() * 20) + 1;
        alert(`Hai ottenuto ${diceScore}`);
        if (diceScore > step.challenge.limitScore) {
            handleUserChoice(step.challenge.goTo);  //se il numero uscito è maggiore di limitScore allore index prende il valore di goTo
        } else {
            handleUserChoice(step.challenge.goToOver); // se minore index prende il valore di goToOver
        }
    };

    const handleRestart = () => {
        setUserStoryArray([arrayToHero[1]]);
        setGameOver(false)
    }

    return (
        <div className="wrapper-game">
            <div className="container-game">
                <div className="container-text-game">
                    <div>
                        {userStoryArray.map((step, index) => {
                                return <Paragraph step={step} key={index}
                                    handleUserChoice={handleUserChoice}
                                    handleDiceRoll={handleDiceRoll}
                                    hideButton={userStoryArray.length > index + 1}
                                    gameOver={gameOver}
                                    handleRestart={handleRestart} />
                                })}
                    </div>
                </div>
            </div>
        </div>
    )
}