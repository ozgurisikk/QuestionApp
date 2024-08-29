import React from 'react';

function GameOver({ correctAnswers, wrongAnswers, totalQuestions, handleRestart, userAnswers }) {
  return (
    <div className="game-over">
      <h2>Oyun Bitti!</h2>
      <p>Toplam Soru: {totalQuestions}</p>
      <p>Doğru Cevap: {correctAnswers}</p>
      <p>Yanlış Cevap: {wrongAnswers}</p>
      
      <h3>Cevaplarınız:</h3>
      <ul className="user-answers">
        {userAnswers.map((answer, index) => (
          <li key={index} className={answer.isCorrect ? "correct" : "incorrect"}>
            Soru {answer.questionNumber}: 
            Cevabınız: {answer.userAnswer} 
            {!answer.isCorrect && <span> (Doğru cevap: {answer.correctAnswer})</span>}
          </li>
        ))}
      </ul>
      
      <button onClick={handleRestart}>Yeniden Başla</button>
    </div>
  );
}

export default GameOver;