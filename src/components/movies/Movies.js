import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import MovieModal from './MovieModal'

const Movies = ({ movies }) => {
  const [show, openModal] = useState(false)
  const [movieId, getMovieId] = useState('')

  const movieList = movies.map((movie, index) => {
    return (
      <MovieItem
        openModal={openModal}
        key={index}
        movieDetails={movie}
        getMovieId={getMovieId}
      />
    )
  })

  const handleClose = () => {
    openModal(false)
  }

  return (
    <div className="row">
      {' '}
      {movieList}{' '}
      <MovieModal show={show} movieId={movieId} handleClose={handleClose} />
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

export default Movies
