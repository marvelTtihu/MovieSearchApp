const MovieGrid = ({ movie }) => {
    return(
        <section>
            <article>
                <p>{movie.Year}</p>
            </article>
            <figure>
                <img src={movie.Poster} alt={movie.Title}/>
            </figure>
            <article>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </article>
        </section>
    );
}

export default MovieGrid;