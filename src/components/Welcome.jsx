
function Welcome({ handleIsStarted }) {
  return (
    <div className="welcome-page">
        <div className="banner">
            <img src="../../assets/ezel.jpg" alt="" />
        </div>
        <div className="title">
            <h1>Quest App'e Hoşgeldin!</h1>
        </div>
        <div className="definition">
            <p>Bu testte sizi 10 soruluk bir meydan okuma bekliyor! Her soru için 30 saniyeniz var, ve cevabınızı işaretler işaretlemez bir sonraki soruya geçeceksiniz. Tüm soruları bitirdiğinizde, sonuçlarınızı hemen görebileceksiniz. Hazır mısınız? Başlayalım!</p>
        </div>
        <div className="button-div">
            <button id="start" onClick={handleIsStarted}>Teste Başla!</button>
        </div>
    </div>
  )
}

export default Welcome


