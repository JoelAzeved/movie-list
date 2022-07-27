
import { useState, useEffect } from "react"
import Navbar from "../layout/Navbar"
import MovieCard from "../components/MovieCard"
import '../components/MovieCard.css'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setTopMovies(data.results)
        
    }

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)

    }, [])
    return (
        <div className="container">
            <Navbar />
            <h2 className="title"> 20 melhores filmes: </h2>
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

export default Home