import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { searchMovie } from "../services/MovieApi.js"
import MovieGrid from "../components/MovieGrid.jsx"

const Home = () => {
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");
    const[searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        if(searchTerm.trim()){
            setMovies([])
            setError("")
        }

        setLoading(true)
        setError("")
    const timeoutId = setTimeout(() => {
            const fetchMovie = async () => {
                try{
                    const data = await searchMovie(searchTerm)
                    setMovies(data)
                } catch(err) {
                    setError(err.message)
                } finally {
                    setLoading(false);
                }
            }

            fetchMovie();
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchTerm])

    return(
        <>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <main>
                <p>Look up a fresh Movies</p>
                <section>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    
                    {!loading && !error && (
                        <section>
                            {movies?.length > 0 ? (
                                    movies.map((movie) => (
                                        <MovieGrid key={movie.imdbID} movie={movie}/>
                                ))
                            ): (
                                <div>
                                    <h2>No movies found.</h2>
                                </div>
                            )}
                        </section>
                    )}
                </section>
            </main>    
        </>
    );
}

export default Home