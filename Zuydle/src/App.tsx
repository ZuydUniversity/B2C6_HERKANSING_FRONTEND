import { useState } from 'react'
import './App.css'
import PasswordInput from './Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <div className="app">
            <PasswordInput label="Password:" placeholder="Enter your password" />
        </div>
    </>
  )
}

export default App
