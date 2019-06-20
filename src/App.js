import React, { useState } from 'react'
import axios from 'axios'

import './App.css'

import Search from './components/layout/Search'
import Movies from './components/movies/Movies'

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async text => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${text}&apikey=c8d3ec5b`
    )

    setMovies(res.data.Search)
  }

  return (
    <div className="App">
      <div className="container">
        <Search getMovies={getMovies} />
        {movies && <Movies movies={movies} />}
      </div>
    </div>
  )
}

export default App
