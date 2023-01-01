import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import SlideShow from "./SlideShow"

function App() {

  const [movieData, setMovieData] = useState([]);
  const [nextPagez, setNextPage] = useState(1);
  const [latest, setLatest] = useState([]);
  const [latest2, setLatest2] = useState(""); 
 

  useEffect(() => {
    Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5733ae936e60b6a387b67aa4e845fcf2&language=en-US&page=${nextPagez}`).then((res) =>{
 
 nextPagez === 1 ? setMovieData(res.data.results): setMovieData(res.data.results);
 nextPagez === 1 && setLatest(res.data.results);
 nextPagez === 1 && setLatest2(res.data.results[0].backdrop_path);


    console.log(res.data.results);
  });

  }, [nextPagez]);

  const nextPage = () => {
    return setNextPage(nextPagez + 1);
  };


  const prevPage = () => {
    return setNextPage(nextPagez - 1);
  };



  return (
    <div className="App">
       
      <SlideShow img={latest} lat={latest2} />
      <div id="barBelow"></div>
      <input type="search" placeholder="Search for a movie..."/>
      <button>Search</button> 
      <div className="movieList">
        
      {movieData.map((movie, index ) =>{
        
        return <MovieCard key={index} {...movie} id={movieData[index].id}/>

      })}
      </div>
      <div id="nextPrev">
        {nextPagez > 1 ? <button onClick={prevPage}>Previous Page</button> : <button disabled onClick={prevPage}>Previous Page</button>}
        <button onClick={nextPage}>Next Page</button>
      </div>

    </div>
  );
}

export default App;
