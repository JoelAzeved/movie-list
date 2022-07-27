import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import './MovieCard.css'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movies_card">
        <img src={imageUrl + movie.poster_path} alt="Movie Image" />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard