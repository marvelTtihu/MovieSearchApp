import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";


const App = () => {
    return(
        <main className="bg-zinc-900 min-h-screen">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movie/:id" element={<MovieDetail />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </main>
    );
}

export default App;