import githubLogo from '/githubLogo.svg'
import './App.css'
import './Gold.tsx'
import Gold from './Gold.tsx'

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND/issues" target="_blank">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <Gold></Gold>
    </>
  )
}

export default App
