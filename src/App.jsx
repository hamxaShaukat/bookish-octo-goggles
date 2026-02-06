import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import LandingPage from './components/landing-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <LandingPage />
    </>
  )
}

export default App
