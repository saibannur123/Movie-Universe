import "./App.css";
import Footer from "./Footer";

const currencyFormat = (num) => {
  let value = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return "$" + value.substring(0, value.length - 3);
};

const replaceImage = (error) => {
  error.target.src = "/notFound.png";
};

const MovieData = (props) => {
  let imgFull = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
  return (
    <>
      <div id="movieboxer">
        <div>
          <img id="movie-img" src={imgFull} alt={props.data.original_title} />
        </div>

        <div id="content-box">
          <h1 id="movieTitle">{props.data.original_title}</h1>
          <p id="plotContent">
            <span id="plot">
              PLOT<br></br>
              <br></br>
            </span>
            {props.data.overview}
          </p>
          <br></br>
          <p>
            <span>
              GENRES<br></br>
              <br></br>
            </span>
            {props.data.genres.map(function (name, index) {
              return (
                <span className="genres" key={index}>
                  <span className="genPadd">{name.name}</span>&nbsp;&nbsp;
                </span>
              );
            })}
          </p>
          <br></br>
          <br></br>
          <div>
            {" "}
            <span className="rbr" id="run-time">
              RUN-TIME: {props.data.runtime} mins
            </span>
            <span className="rbr" id="budget">
              BUDGET: {currencyFormat(props.data.budget)}
            </span>
            <span className="rbr" id="revenue">
              REVENUE: {currencyFormat(props.data.revenue)}
            </span>
          </div>
        </div>
      </div>
      <div id="actor">
        <h1 id="act-title">Actors</h1>

        <div id="actor-container">
          {props.actorData.cast.map((actor, index) => {
            return (
              <div key={index} className="card">
                <img
                  key={index}
                  className="actor-img"
                  alt={props.actorData.cast[index].name}
                  src={`https://image.tmdb.org/t/p/w185/${props.actorData.cast[index].profile_path}`}
                  onError={replaceImage}
                />
                <div className="card-container">
                  <h4>
                    <span className="realName">
                      {props.actorData.cast[index].name}
                    </span>
                    <br></br>
                    <span className="charName">
                      {props.actorData.cast[index].character}
                    </span>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieData;
