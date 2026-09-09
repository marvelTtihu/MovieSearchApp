import { Link } from "react-router-dom";

const MovieGrid = ({ movie }) => {
    return(
        <article>
        <Link to={`/movie/${movie.imdbID}`}> 
            <figure className="my-3">
                <img src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450" } alt={movie.Title} className="w-full h-[450px]  object-cover rounded-xl transition-all duration-300 ease-in-out hover:scale-105"/>
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

export default MovieGrid;