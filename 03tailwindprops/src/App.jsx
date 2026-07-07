import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    name: 'Adnan',
    age:20
    
  }

  return (
    <>
<h1 className="bg-green-400 text-black text-4xl rounded-2xl p-4">
  Tailwind
</h1>    
<Card name = "Adnan"/>
<Card/>

{/* <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/37730949/pexels-photo-37730949.jpeg" />
  </div>
  <div class="flex items-center">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div> */}
</>

  )
}

export default App
