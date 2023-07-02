import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
export default function HeroSection({ popularData }) {

    

    return (
        <>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={500}
                interval={5000}
                infiniteLoop={true}
            >
                {popularData?.map((datas) => (
                    <Link to={`/cardsInfo/${datas.id}`} key={datas.id}>
                        <section className="section hero-section">
                            <div className="hero-section-background">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${datas.backdrop_path 
                                    ? datas.backdrop_path 
                                    : (datas.poster_path )}`}
                                    className="image-top"
                                    alt={datas.title}
                                />

                            </div>
                            <div className="hero-section-description">
                                <h1 className="hero-section-heading">{datas.title}</h1>
                                <p>{datas.overview.substring(0, 200)}...</p>
                            </div>
                        </section>
                    </Link>
                ))}
            </Carousel>

        </>
    )
}