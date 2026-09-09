import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { searchMovie } from "../services/MovieApi.js"
import MovieGrid from "../components/MovieGrid.jsx"

const Home = () => {
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");
    const[query, setQuery] = useState("Avengers");


    useEffect(() => {
        if(!query.trim()) return;

        const timeoutId = setTimeout(() => {
                const fetchMovie = async () => {
                    setLoading(true)
                    setError("")

                    try{
                        const data = await searchMovie(query);
                        setMovies(data);
                    } catch(err) {
                        setError(err.message);
                        setMovies([]);
                    } finally {
                        setLoading(false);
                    }
                }

                fetchMovie();
            }, 500);

            return () => clearTimeout(timeoutId);
        }, [query])

    return(
        <section>
            <Navbar query={query} setQuery={setQuery}/>
            <section className="text-white">
                <section>
                    {loading && <p className="flex justify-center items-center py-28">Loading...</p>}
                    {error && <div className="max-w-max mx-auto py-28"><p className="flex justify-center items-center bg-red-400 p-4 rounded-xl">Error: {error} </p></div>}
                    
                    {!loading && !error && (
                        <article className="py-28 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {movies?.length > 0 ? (
                                    movies.map((movie) => (
                                        <MovieGrid key={movie.imdbID} movie={movie}/>
                                ))
                            ): (
                                <article className="col-span-full flex justify-center py-28">
                                    <h2 className="text-8xl">Find your movies!</h2>
                                </article>
                            )}
                        </article>
                    )}
                </section>
            </section>    
        </section>
    );
}

export default Home