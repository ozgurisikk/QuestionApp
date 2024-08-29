import React from 'react';

function GameOver({ correctAnswers, wrongAnswers, totalQuestions, handleRestart }) {
  return (
    <div className="game-over">
      <h2>Oyun Bitti!</h2>
      <p>Toplam Soru: {totalQuestions}
        <br />
        <br />

        Doğru Cevap: {correctAnswers}
        <br />
        <br />

        Yanlış Cevap: {wrongAnswers}
      </p>
      
      <button onClick={handleRestart}>Yeniden Başla</button>
    </div>
  );
}

export default GameOver;