import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section className="flex justify-center items-center md:items-start h-screen flex-col text-white font-inter max-w-xl mx-auto px-4 md:px-0">
            <h2 className="mb-2 text-6xl md:text-8xl font-bold">404</h2>
            <h3 className="mb-6 text-2xl">Oops! Page Not Found :(</h3>
            <p className="mb-4 text-center md:text-left">Sorry, we couldn't find the page you were looking for. To return to homepage, click on the button below</p>
            <Link to="/" className="bg-black px-4 py-2 rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black active:bg-gray-100">← Home</Link>
        </section>
    );
}

export default NotFound;