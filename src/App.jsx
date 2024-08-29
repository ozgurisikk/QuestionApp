import {  useContext } from 'react'
import React from 'react'
import './App.css'
import Welcome from './components/Welcome'
import MainContext from './components/context/MainContext'
import GamePage from './components/GamePage'

function App() {
  const {isStarted, setIsStarted} = useContext(MainContext)
  
  const handleIsStarted = () =>{
    setIsStarted((prev) => !prev);
  }
  

  return (
    <>
      <div className='main'>
        <div className="container">
          {isStarted ? <GamePage/> : <Welcome handleIsStarted={handleIsStarted} />}
          

        </div>
      </div>
      
    </>
  )
}

export default App
