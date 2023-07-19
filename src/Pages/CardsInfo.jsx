
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimilarMovies from "../components/SimilarMovie";
import { fetchApiData } from "../FetchApiData";
import React from 'react'
import ReactPlayer from 'react-player'


export default function CardsInfo() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([])
    const [movieVideo, setMovieVideo] = useState([])
    const [showTrailer, setShowTrailer] = useState(false)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        fetchApiData(`/movie/${id}?language=en-US`).then((data) => setMovieDetails(data));
        fetchApiData(`/movie/${id}/similar?language=en-US&page=1`).then((data) => setSimilarMovies(data.results))
        fetchApiData(`/movie/${id}/videos?language=en-US`).then((data) => setMovieVideo(data.results))
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [id, movieDetails, similarMovies]);



    if (loading) {
        return (
            <div className="dead-center">
                <span className="loader"></span>
            </div>
        )

    }


    return (
        <>



            <section className={`${showTrailer ? "section card-details-section-lowOpacity" : "section card-details-section"}`}>
                <div className="card-info-background">
                    {movieDetails.backdrop_path || movieDetails.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path ? movieDetails.backdrop_path : movieDetails.poster_path}`}
                            className="image-top"
                        />
                    ) : (
                        <div className="skeleton-loading-big"></div>
                    )}

                </div>

                {movieDetails && (
                    <div className=" max-width">
                        <div className="row">
                            <div className="card-poster">
                                {movieDetails.poster_path || movieDetails.backdrop_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path ? movieDetails.poster_path : movieDetails.backdrop_path}`}
                                        className="image-top"
                                    />
                                ) : <div className="card-poster-skeleton"></div>}

                            </div>

                            <div className="card-description">
                                {showTrailer && <div className="player-container">
                                    <p className="close-trailer" onClick={() => setShowTrailer(false)}>Close</p>
                                    <ReactPlayer controls={true} width='100%' url={`https://www.youtube.com/watch?v=${movieVideo[0]?.key}`} />
                                </div>}
                                <h1 className="title">{movieDetails?.title}</h1>
                                <p className="sub-para">{movieDetails?.tagline}</p>
                                <div className="status">
                                    <div className="play-trailer" onClick={() => setShowTrailer(!showTrailer)}>
                                        <i class="fa-solid fa-circle-play"></i> <span>Watch Trailer</span>
                                    </div>


                                    {movieDetails.genres && (

                                        <div className="genres">
                                            <p className="status-info">{movieDetails?.vote_average}</p>
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

            <SimilarMovies similarMovies={similarMovies} showTrailer={showTrailer} />


        </>
    );
}
