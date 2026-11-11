import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Navbar'
import MainComponent from './MainComponent'

let count = 0;

function App() {

  count++
  // console.log("Hello App component")
  console.log('count:', count)

  return (
    <>
      <h1>count: {count}</h1>
      <Navbar />
      <MainComponent />
    </>
  )
}

export default App
