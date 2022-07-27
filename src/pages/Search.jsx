
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import '../components/MovieCard.css'
import Navbar from "../layout/Navbar"



const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY 

const Search = () => {
const [searchParams] = useSearchParams()

  const [topMovies, setTopMovies] = useState([])
  const query = searchParams.get("q")


  const getSearchMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)

  }

  useEffect(() => {
    const searchQueryUrl = `${searchURL}?${apiKey}&query=${query}`

    getSearchMovies(searchQueryUrl)

  }, [query])


  return (

    <div className="container">
      <Navbar />
      <h2 className="title"> Resutados para: <span className="query_text">{query}</span></h2>
      <div className="movies_container">
        {topMovies.length > 0 && topMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>

 ) 
}

export default Search