import React from 'react'
import CubeGrid from '@bit/akameco.styled-spinkit.cube-grid'
import Post from './components/Post'
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='post-title'>Dear Journal</h1>
        <Post />
        <CubeGrid
          color="black"
          size={110}
        />
        <p>
          More stuff to go here
        </p>
      </header>
    </div>
  )
}

export default App
