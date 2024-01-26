import {useCallback, useState} from 'react';

import QUSTIONS from '../qustions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Qustion from './Qustion.jsx';

const Quiz = () => {
 
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQustionIndex = userAnswers.length;
    const quizIsComplete =  activeQustionIndex === QUSTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer]
      });
    }, []);

    const handleSkipAnswer= useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete){
      return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon"/>
        <h2>Quiz Completed!</h2>
      </div>
      );
    }

   
 
  return( 
    <div id ='quiz'>
     <Qustion key= {activeQustionIndex}
     index={activeQustionIndex}
     onSelectAnswer={handleSelectAnswer}
     onSkipAnswer={handleSkipAnswer}/>
    </div>
  );
}

export default Quiz; 
