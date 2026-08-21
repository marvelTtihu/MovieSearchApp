import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { searchMovie } from "../services/MovieApi.js"

const Home = () => {
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");
    const[searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            setError("");
            try{
                const data = await searchMovie(searchTerm)
                setMovies(data.search)
            } catch(err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }

        fetchMovie();
    }, [searchTerm])


    return(
        <>
            <Navbar search={searchTerm} setSearchTerm={setSearchTerm}/>
            <main>
                <p>Look up a fresh Movies</p>
                <section>
                    { loading ? ( <div>loading...</div> ) :
                    error ? ( <div>{error}</div>) : (
                        movies?.map((movie) => (
                            <article key={movie.id}>
                                {movie.Title}
                            </article>
                        ))
                    )}
                </section>
            </main>    
        </>
    );
}

export default Home