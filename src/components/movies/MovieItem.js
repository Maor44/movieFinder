import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MovieItem = ({ movieDetails, openModal, getMovieId }) => {
  const { Title, Poster, Year, imdbID } = movieDetails

  const handleClick = () => {
    openModal(true)
    getMovieId(imdbID)
  }
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Poster} />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">{Title}</span>
          <strong>Year: </strong>
          <small>{Year}</small>
          <button
            onClick={handleClick}
            className="waves-effect waves-light btn card-btn"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  movieDetails: PropTypes.object.isRequired
}

export default MovieItem
