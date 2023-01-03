import "./App.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import MovieData from "./MovieData";

const MovieInfo = () => {
  let { id } = useParams();
  const [theData, setTheData] = useState();
  const [actorData, setActorData] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5733ae936e60b6a387b67aa4e845fcf2&language=en-US`
    ).then((rez) => {
      setTheData(rez.data);
    });

    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5733ae936e60b6a387b67aa4e845fcf2&language=en-US`
    ).then((res) => {
      setActorData(res.data);
    });
  }, [id]);

  return (
    <div>
      {theData != null && actorData != null && (
        <MovieData data={theData} actorData={actorData} />
      )}
    </div>
  );
};

export default MovieInfo;
