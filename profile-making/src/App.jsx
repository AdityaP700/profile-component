import { useState } from 'react'
import './App.css'
import { UserProfile } from './Components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile/>

    </>
  )
}

export default App
