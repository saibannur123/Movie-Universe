import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Nav";
import MovieInfo from "./MovieInfo";
import Error from "./Error";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieInfo />} />
          <Route path="/error" element={<h1>Page Not Found</h1>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
