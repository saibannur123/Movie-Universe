

const getPosterURL = (posterpath) =>{

    return `https://image.tmdb.org/t/p/w500/${posterpath}`
   
}

   const replaceImage = (error) => {    
    error.target.src = "/notFound.png";
}


const MovieCard = ({poster_path, title, data, id}) => {
    
    return(
    
    <div className="movieElement">
       <a href={id} >
    
        <img className="indivMovie" src={getPosterURL(poster_path)} onError={replaceImage}  alt={title}/>
       </a>    
    </div>
    );

}

export default MovieCard