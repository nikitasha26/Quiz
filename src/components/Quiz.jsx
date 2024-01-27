import {useCallback, useState} from 'react';

import QUSTIONS from '../qustions.js';
import Qustion from './Qustion.jsx';
import Summary from './Summary.jsx';

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
      return <Summary userAnswers={userAnswers}/>
    }

    //setUserAnswer((prevUserAnser) => [...prevUserAnswer, selectedAnser])

   
 
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
