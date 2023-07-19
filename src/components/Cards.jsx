import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Cards({ datas, index }) {
    const [img, setImg] = useState()
    const imageUrl = `https://image.tmdb.org/t/p/original/${datas?.poster_path ? datas?.poster_path : datas?.backdrop_path}`;
    useEffect(() => {
        const image = new Image()
        image.src = imageUrl
        image.onload = () => {
            setTimeout(() => {
                setImg(image)
            }, 2000)

        }

    }, [imageUrl])

    function scroolToTop() {
        window.scrollTo(0, 0)
    }


    return (
        <>
            {img && datas ? (
                <Link to={`/cardsInfo/${datas.id}`} className="links" onClick={scroolToTop}>
                    <div className='cards' key={index}>
                        <img src={img.src} alt={datas.original_title} className="card-img" />
                        <div className="cards-description">
                            <p className='card-title'>{datas.original_title}</p>
                        </div>
                    </div>
                </Link>) : (

                <div className='cards' key={index}>
                  <div className="skeleton-image"></div>
                    <div className="cards-description">
                        <p className='card-title'></p>
                    </div>
                </div>


            )
            }
        </>
    )
}