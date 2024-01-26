import QustionTimer from "./QustionTimer";
import Answers from "./Answers";
import {useState } from "react";
import QUSTIONS from '../qustions';

export default function Qustion({ index, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

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

let answerState = '';

// if (answer.selectedAnswer && answer.isCorrect !== null) {
//     answerState = answer.isCorrect ? 'correct' : 'wrong' ;
// } else if (answer.selectedAnswer) {
//     answerState = 'answered' ;
// }

if(answer.selectedAnswer){
    answerState = answerState.isCorrect ? "correct" : "wrong"
}

    return(
        <div id='question'>
        <QustionTimer  timeout={10000} onTimeout={onSkipAnswer} />
      <h2>
      {QUSTIONS[index].text}
      </h2>
      {console.log(answerState)}
      <Answers 
       answers={QUSTIONS[index].answers}
       selectedAnswer={answer.selectedAnswer}
      answerState={answerState} 
      onSelect={onSelectAnswer} />
     </div>
    );
}
