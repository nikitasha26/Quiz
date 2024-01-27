import QustionTimer from "./QustionTimer";
import Answers from "./Answers";
import {useState } from "react";
import QUSTIONS from '../qustions';

export default function Qustion({ index, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if(answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(() => {
            setAnswer({
            selectedAnswer: answer,
            isCorrect: QUSTIONS[index].answers[0] === answer 
        })

         setTimeout(() => {
            onSelectAnswer(answer);
         }, 2000);
        }, 1000);
    }

let answerState = ''; // answered(before checking), coreect/ wrong (after checking)

if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong' ;
} else if (answer.selectedAnswer) {
    answerState = 'answered' ;
}



    return(
        <div id='question'>
        <QustionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
         mode={answerState}/>
      <h2>
      {QUSTIONS[index].text}
      </h2>
    
      <Answers 
       answers={QUSTIONS[index].answers}
       selectedAnswer={answer.selectedAnswer}
      answerState={answerState} 
      onSelect={handleSelectAnswer} />
     </div>
    );
}
 