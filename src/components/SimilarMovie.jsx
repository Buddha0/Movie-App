import Cards from "./Cards"
export default function SimilarMovies({showTrailer,similarMovies}){
    return(
        <>
        {similarMovies.length > 0 &&  <div className={`${showTrailer ? "similar-section-lowOpacity" : "similar-section"}`}>
      
                    <div className='column'>
                        <h1 className='similar-movie-heading'>Similar Movies</h1>
                        <div className="grid">
                            {similarMovies.slice(0, 5).map((datas, index) => (
                                <Cards key={index} datas={datas} index={index} />
                            ))}
                        </div>
                    </div>
         
            </div> }
        
        </>
    )
}