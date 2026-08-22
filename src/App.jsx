import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </main>
    );
}

export default App;