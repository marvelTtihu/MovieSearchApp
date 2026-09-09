import { Link } from "react-router-dom";
import Search from "../assets/Search.png"

const Navbar = ({query, setQuery}) => {

    return(
        <header className="flex justify-between items-center px-20 py-4 bg-zinc-800 text-white relative">
            <h3 className="font-bold text-xl md:text-2xl">MVT.</h3>
            <nav className="list-none flex items-center gap-6">
                <li><Link to="/">Home</Link></li>
                <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies"
                className="border-2 border-gray-900 px-4 rounded-4xl py-1 outline-none"
                />
                <img src={Search} alt="SearchIcon" width="16" height="16" className="absolute right-24"/>
            </nav>
        </header>
    );
}

export default Navbar