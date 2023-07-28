

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards({ datas }) {

  const imageUrl = `https://image.tmdb.org/t/p/original/${
    datas?.poster_path ? datas.poster_path : datas?.backdrop_path
  }`;

  const [loadingImage, setLoadingImage] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setLoadingImage(false);
    };
    image.onerror = () => {
      setLoadingImage(false);
      setImageError(true);
    };
  }, [imageUrl]);

  function scroolToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {loadingImage || imageError ? ( // Check if loadingImage is true or image loading error occurred
        <div className="cards">
          <div className="skeleton-image"></div>
          <div className="cards-description">
            <p className="card-title"></p>
          </div>
        </div>
      ) : (
        // Show the movie card once the image has loaded successfully
        <Link
          to={`/cardsInfo/${datas.id}`}
          className="links"
          onClick={scroolToTop}
        >
          <div className="cards">
            <img src={imageUrl} alt={datas.original_title} className="card-img" />
            <div className="cards-description">
              <p className="card-title">{datas.original_title}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
