import { useState, useEffect } from "react";
import { getMovieById } from "../services/MovieApi";
import { useParams, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";


const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const[movie, setMovie] = useState(null);
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState("");
    
    useEffect(() => {

        const fetchMovie = async () => {
            setLoading(true);
            setError("");
            
            try {
                const data = await getMovieById(id);
                setMovie(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchMovie();

    }, [id])

    return(
        <section className="text-white relative">
            <Navbar />
            <button onClick={() => navigate(-1)} className="px-4 py-2 bg-black rounded-2xl absolute right-2 my-4 mr-2 md:bg-neutral-800">
                ← Back
            </button>

            {loading && <p className="flex justify-center items-center py-28">Loading...</p>}
            {error && (<div className="max-w-max mx-auto py-28"><p className="flex justify-center items-center bg-red-400 p-4 rounded-xl">Error: {error} </p></div>)}

            {!loading && !error && movie && (
                <article>
                    <MovieCard movie={movie} />
                </article>
            )}
        </section>
    );
}

export default MovieDetail;