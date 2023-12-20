import { CssBaseline } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
// import Home from "./Home.jsx";
// import MovieInformation from "./MovieInformation/MovieInformation.jsx";
// import Actors from "./Actors/Actors.jsx";
//Import all the components in one go
import { MovieInformation, Actors, Home, Profile } from "./";

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

          <Route
            exact
            path="/movies/:id"
            element={<MovieInformation />}
          ></Route>
          <Route exact path="/actors/:id" element={<Actors />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
