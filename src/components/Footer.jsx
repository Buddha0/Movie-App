import { Link } from "react-router-dom"
export default function Footer() {

    const movies = [
        {
        name: "Popular Movies",
        link:"/popularPage"
    },
    {
        name: "TopRatedMovies",
        link:"/topRatedPage"
    }
    ,  
    {
        name: "Upcoming Movies",
        link:"/"
    }


]
function scroolToTop(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}
    return (
        <>
            <div className="footer-section">
            <h1 className="footer-logo">
                        Movie<span>Chill</span>
                    </h1>
                <div className="footer-flex">
       
                   

                    
                    <div className="footer-movies">
                        <h1 className="footer-title">Movies</h1>
                        {movies.map((x,index)=>{
                           return<Link to ={x.link} className="links" onClick={scroolToTop}><p className = "footer-small" key = {index}>{x.name}</p></Link> 
                        })}
                      

                    </div> 

                 
                    <div className="footer-movies">
                        <h1 className="footer-title no-click">Resoruce</h1>
                        <p className = "footer-small no-click">Google</p>
                        <p className = "footer-small no-click">TMDB</p>
                        <p className = "footer-small no-click">Youtube</p>
                    </div>

                    <div className="footer-movies">
                        <h1 className="footer-title no-click">Partners</h1>
                        <p className ="footer-small no-click">Random Partner</p>
                        <p className ="footer-small no-click">Cookies</p>
                        <p className ="footer-small no-click">Privacy</p>
                       
                    </div>

                </div>
                <div className="footer-end">
                    <p>Copyright @2023 All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}