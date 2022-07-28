import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsFillFileEarmarkTextFill, BsHourglassSplit } from 'react-icons/bs'
import MovieCard from '../components/MovieCard'
import Navbar from '../layout/Navbar'

import './Movie.css'


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const moviesUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(moviesUrl)
  }, [])
  return (
    <div>
      <Navbar/>
      <div className="movie_page">
      
        {movie && (
      
          <div>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
              <h3>
                <BsWallet2 /> Budget
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Revenue:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Runtime:
              </h3>
              <p>{movie.runtime}</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Overview:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Movie