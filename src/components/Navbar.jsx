import { Link } from "react-router-dom";

const Navbar = ({searchTerm, setSearchTerm}) => {

    return(
        <header className="flex justify-between items-center px-20 py-4 border-2 border-gray-200 shadow-md relative">
            <h3>My Logo</h3>
            <nav className="list-none flex items-center gap-20">
                <li><Link to="/">Home</Link></li>
                <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
                className="border-2 border-gray-200 px-4 rounded-4xl py-2"
                />
            </nav>
        </header>
    );
}

export default Navbar