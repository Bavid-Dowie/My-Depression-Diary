import React from 'react'
import CubeGrid from '@bit/akameco.styled-spinkit.cube-grid'
import Welcome from './components/Welcome'
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <CubeGrid
          color="black"
          size={110}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
