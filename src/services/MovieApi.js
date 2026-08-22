const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `http://omdbapi.com/`;  

export async function searchMovie(title) {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
    if(!response.ok){
        throw new Error("Failed to fetch.");
    }
    const data = await response.json();

    if(data.Response === "False"){
        throw new Error(data.Error);
    }
    return data.Search;
}
