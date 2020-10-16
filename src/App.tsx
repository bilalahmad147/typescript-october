import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuizDetail} from './services/service_api'

function App() {
  
  const [Question, setQuestion] = useState([])

  useEffect(() => {
    getQuizDetail(5,"easy")
    setQuestion(1)
  }, [])

  return (
    <div className="App">
      <h1>{Question}</h1>
    </div>
  );
}

export default App;
