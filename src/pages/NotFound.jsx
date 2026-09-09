import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section className="flex justify-center items-center h-screen flex-col text-white">
            <h2 className="mb-6 text-4xl">404 NOT FOUND!</h2>
                <p className="mb-4">Sorry, we couldn't find the page you were looking for. To return to homepage, click on the button below</p>
                <Link to="/">Go back home</Link>
        </section>
    );
}

export default NotFound