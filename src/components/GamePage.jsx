import { useState, useEffect, useContext } from 'react';
import MainContext from '../components/context/MainContext';
import GameOver from './GameOver'; 
import '../App.css';


function GamePage() {
  const { questions, setIsStarted } = useContext(MainContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // Yeni state

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    if (timeLeft === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questions[currentQuestionIndex].answer;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }
    setUserAnswers(prev => [...prev, {
      questionNumber: currentQuestionIndex + 1,
      userAnswer: option,
      correctAnswer: questions[currentQuestionIndex].answer,
      isCorrect: isCorrect
    }]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setTimeLeft(30);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const handleRestart = () => {
    setIsStarted(false);
  };

  if (isGameOver) {
    return (
      <GameOver
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
        totalQuestions={questions.length}
        handleRestart={handleRestart}
        userAnswers={userAnswers}
      />
    );
  }


  return (
    <div className='game-page'>
      <h2 className="question-number">Soru {currentQuestionIndex + 1}</h2>
      <div className="timer">Kalan Süre: {timeLeft} saniye</div>

      <div className='question-image-container'>
        <img className='question-image' src={`/${questions[currentQuestionIndex].media}`} alt="Question" />
      </div>
      
      <p className="question-text">{questions[currentQuestionIndex].question}</p>

      {timeLeft <= 26 && (
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button className="option-button" key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}

export default GamePage;