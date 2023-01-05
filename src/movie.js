import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SlideShow from "./SlideShow";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [nextPagez, setNextPage] = useState(1);
  const [latest, setLatest] = useState([]);
  const [latest2, setLatest2] = useState("");
  const [searchData, setSearchData] = useState("");
  const [timer, setTimer] = useState(null);
  const [theTitle, setTheTitle] = useState("Latest Movies");
  const [maxPage, setMaxPage] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=5733ae936e60b6a387b67aa4e845fcf2&language=en-US&page=${nextPagez}`
    ).then((res) => {
      nextPagez === 1
        ? setMovieData(res.data.results)
        : setMovieData(res.data.results);
      nextPagez === 1 && setLatest(res.data.results);
      nextPagez === 1 && setLatest2(res.data.results[0].backdrop_path);
      setTheTitle("Now Playing");
      setMaxPage(res.data.total_pages);
      
    });

    if (searchData !== "") {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5733ae936e60b6a387b67aa4e845fcf2&language=en-US&page=${nextPagez}&include_adult=false&query=${searchData}`
      ).then((rez) => {
        nextPagez === 1
          ? setMovieData(rez.data.results)
          : setMovieData(rez.data.results);
        setTheTitle("Search Results");
        console.log(rez.data.total_pages);
        setMaxPage(rez.data.total_pages);
      });
    }
  }, [nextPagez, searchData]);

  const nextPage = () => {
    window.scrollTo(0, 800);
    return setNextPage(nextPagez + 1);
  };

  const prevPage = () => {
    window.scrollTo(0, 800);
    return setNextPage(nextPagez - 1);
  };

  const updateSearch = (event) => {
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      setSearchData(event.target.value);
      setNextPage(1);
    }, 500);

    setTimer(newTimer);
  };

  return (
    <div className="App">
      <SlideShow img={latest} lat={latest2} />
      <div id="barBelow"></div>
      <h1 id="homez">Welcome to the MovieUniverse</h1>
      <input
        type="search"
        id="search-bar"
        placeholder="Search"
        onChange={updateSearch}
      />
      <h1 id="home_title">{theTitle}</h1>

      <div className="movieList">
        {movieData.map((movie, index) => {
          return <MovieCard key={index} {...movie} id={movieData[index].id} />;
        })}
      </div>
      <div id="nextPrev">
        {nextPagez > 1 ? (
          <button className="previous" onClick={prevPage}>
            &#8249;
          </button>
        ) : (
          <button disabled className="previous" onClick={prevPage}>
            &#8249;
          </button>
        )}

        {nextPagez < maxPage ? (
          <button className="next" onClick={nextPage}>
            &#8250;
          </button>
        ) : (
          <button disabled className="next" onClick={nextPage}>
            &#8250;
          </button>
        )}
        {maxPage !== 0 && <p id="pageNum">[{nextPagez} of {maxPage}]</p>}
      </div>
    </div>
  );
}

export default App;
