import React, { useEffect } from 'react';
import './App.css';
import Question_card from './components/question_card';
import { getQuizDetail } from './services/service_api'

function App() {

  useEffect(() => {
    async function quizDetail() {
      const question = await getQuizDetail(5, 'easy')
    }
    quizDetail();
  }, [])

  return (
    <div className="App">
      <Question_card
        question={question.question}
        option={question.answer}
      />
    </div>
  );
}

export default App;
