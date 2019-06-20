import React from 'react'

export default function Search({ getMovies }) {
  const handleChange = e => {
    const { value } = e.target

    if (value !== ' ') {
      getMovies(e.target.value)
    }
  }

  const capitalize = {
    textTransform: 'capitalize'
  }

  return (
    <div>
      <input
        style={capitalize}
        type="text"
        onChange={handleChange}
        placeholder="Search for movies..."
      />
    </div>
  )
}
