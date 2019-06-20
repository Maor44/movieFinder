import React, { useState } from 'react'
import axios from 'axios'

const MovieModal = ({ handleClose, show, children, movieId }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  const [movie, setData] = useState('')

  const getData = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?i=${movieId}&apikey=c8d3ec5b`
    )

    setData(res.data)
  }

  if (show) {
    getData()
  }

  const {
    Title,
    Released,
    Poster,
    Genre,
    Plot,
    imdbRating,
    Rated,
    Director,
    Runtime
  } = movie

  return (
    <div className={show ? 'modal-wrapper' : null}>
      <section className={`modal-main ${showHideClassName}`}>
        <button
          className="waves-effect waves-light btn card-btn close-modal"
          onClick={handleClose}
        >
          close
        </button>
        <img className="modal-image" src={Poster} alt="" />
        <div className="content">
          <h4 className="title">{Title}</h4>
          <div>
            <small>
              <strong>Director:</strong>
              {Director}
            </small>
          </div>
          <div>
            <small>
              <strong>Released:</strong>
              {Released}
            </small>
          </div>
          <div>
            <small>
              <strong>Genre:</strong>
              {Genre}
            </small>
          </div>
          <p>{Plot}</p>

          <span className="chip red lighten-2 white-text">{Rated}</span>
          <span className="chip amber accent-2 white-text">{imdbRating}</span>
          <span className="chip grey accent-2 white-text">{Runtime}</span>
        </div>
      </section>
    </div>
  )
}

export default MovieModal
