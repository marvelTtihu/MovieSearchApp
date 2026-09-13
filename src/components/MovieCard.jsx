import { Link } from "react-router-dom";
import placeholderImg from "../assets/placeholderImg.png"

const MovieCard = ({ movie }) => {
    
    const moviePoster = movie.Poster !== "N/A"
        ? movie.Poster
        : placeholderImg

    return(
        <article>
            <Link to={`/movie/${movie.imdbID}`}> 
                <figure className="my-3">
                    <img src={moviePoster} alt={movie.Title} className="w-full h-[380px] object-cover transition-all duration-300 ease-in-out hover:scale-105"/>
                </figure>
            </Link>
                <p>{movie.Title}</p>
                <article className="flex gap-2 text-gray-100">
                    <p className="capitalize">{movie.Type}</p>
                    <span>•</span>
                    <p>{movie.Year}</p>
                </article>
        </article>
    );
}

export default MovieCard;