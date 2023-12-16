import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <nav>
        <Link to="/Home">Home Page</Link>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
