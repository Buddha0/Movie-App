import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";


export default function CardsInfo({ options }) {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([])


    async function fetchData() {
        const movieDetailsApi = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
        );
        setMovieDetails(movieDetailsApi.data);
        const similairMoviesApi = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
        setSimilarMovies(similairMoviesApi.data.results)
    }

    useEffect(() => {
        fetchData();
    }, [movieDetails]);



    return (
        <>
        
            <section className="section card-details-section">
                <div className="card-info-background">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path ? movieDetails.backdrop_path : movieDetails.poster_path}`}
                        className="image-top"
                    ></img>
                </div>
                <div className="linear-gradient-overlay"></div>
                {movieDetails && (

                    <div className=" max-width absolute">
                        <div className="row">
                            <div className="card-poster">
                                
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path ? movieDetails.poster_path : movieDetails.backdrop_path}`}
                                    alt={movieDetails?.title}
                                />
                            </div>

                            <div className="card-description">
                                <h1 className="title">{movieDetails?.title}</h1>
                                <p className="sub-para">{movieDetails?.tagline}</p>
                                <div className="status">
                                    <p className="status-info">{movieDetails?.vote_average}</p>
                                    {movieDetails.genres && (
                                        <div className="genres">
                                            {movieDetails.genres.map((x) => (
                                                <p key={x.id}>{x.name}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <span className="overview">Overview</span>
                                <p className="description">
                                    {movieDetails && movieDetails.overview && movieDetails.overview.substring(0, 500)}..
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </section >

            <div className="similar-section">
                <div className='max-width'>
                    <div className='column'>
                        <h1 className='heading'>Similar Movies</h1>
                        <div className="grid">
                            {similarMovies.slice(0, 4).map((datas, index) => (
                                <Cards key={index} datas={datas} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
