import { useState } from 'react'

import './App.css'
import UserContext from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
  <h1>hello</h1>
    </UserContextProvider>
  )
}

export default App
