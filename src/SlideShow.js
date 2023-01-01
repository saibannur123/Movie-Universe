import "./App.css";
import { useState, useEffect } from "react";

const SlideShow = (props) => {


  const [path, setPath] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
 
    setPath(`https://image.tmdb.org/t/p/w1280/${props.lat}`); // causing 404 error


    
  }, [props.lat]);


  const slideShadow = () => {
    let len = 0;
    props.img.length > 7 ? len = 5 : len = props.img.length;
    try {
     
      setSlideIndex(slideIndex + 1);
      if (slideIndex > len - 1) {
        setSlideIndex(0);
      }
      setPath(
        "https://image.tmdb.org/t/p/w1280/" +
          props.img[slideIndex].backdrop_path
      );
    } catch (error) {
      console.log();
    }
  };
  setTimeout(slideShadow, 3500);

  return (
    //  <div className="bg" style={{background: "url(" + getPosterURL(movieData[0].backdrop_path + ")",}}>

    <div
      className="bg" onLoad={slideShadow}
      style={{
        backgroundImage: "url(" + path + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default SlideShow;


