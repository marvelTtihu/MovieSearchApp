import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section>
            <h2>404NOT FOUND!</h2>
                <p>Sorry, we couldn't find the page you were looking for. To return to my logo homepage, click on the button below</p>
                <Link to="/">Go back home</Link>
        </section>
    );
}

export default NotFound