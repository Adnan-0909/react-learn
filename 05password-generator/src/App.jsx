import { useCallback, useEffect, useRef, useState } from "react"
function App() {
  const [length,setLength] = useState(5)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+='1234567890'
    if(charAllowed) str+= '~ ` ! @ # $ % ^ & * ( )" - _ = + [ ] { } \ | ; : , . < > / ?'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str[char]
    }
    setPassword(pass)

  } , [length,numberAllowed,charAllowed])

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])
  return (
    <>
    <h1 className="text-4xl text-center bg-olive-500 ">Password Generator</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 my-8 text-white-500  text-center">
      <div className="flex shadow rounded-lg bg-gray-500 overflow-hidden mb-4 text-center">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref = {passwordRef}
        />
        <button 
        onClick={copyPasswordtoClipboard}
        className="outline-none bg-blue-400 text-white
        px-5 py-0 shrink-0">copy</button>

      </div>
      <div className="flex test-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={20}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
