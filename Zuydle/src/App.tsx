import { useState } from 'react'
import githubLogo from '/githubLogo.svg'
import './App.css'

function App() {
  const [gold, setGold] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND/issues" target="_blank">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setGold((gold) => gold + 1)}>
          Gold {gold}
        </button>
      </div>
    </>
  )
}

export default App
