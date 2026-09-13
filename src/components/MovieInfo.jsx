const MovieInfo = ({ movie }) => {
    return(
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-neutral-800 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-6 md:p-10">
                    <figure className="flex justify-center md:justify-start">
                        <img src={movie.Poster} alt={movie.Title}/>
                    </figure>
                    <article>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{movie.Title}</h2>
                        <p className="text-lg md:text-xl mb-4">{movie.Plot}</p>
                            <p className="bg-neutral-900 max-w-max text-sm px-4 mb-4 py-1">{movie.Year} • {movie.Runtime} • {movie.Rated}</p>
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span className="bg-yellow-500 px-3 py-1">
                                ⭐ {movie.imdbRating}
                            </span>
                            <span className="text-sm text-neutral-400">
                                IMDB Rating
                            </span>
                        </div>
                        <div className="mt-34">
                            <button className="bg-red-400 py-2 px-4 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:underline hover:underline-offset-4 active:bg-red-100">Watch Now</button>
                        </div>
                    </article>
                </div>
            </div>
        </article>
    )
}

export default MovieInfo;