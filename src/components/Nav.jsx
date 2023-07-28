import { useEffect, useState, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import Search from "./Ui/Search"
import { fetchApiData } from "../Api/FetchApiData"


export default function Nav() {

    const [genres, setGenres] = useState([])
    const [show, setShow] = useState(false)
    const [dropdownToggle, setDropdownToggle] = useState(false);
    const menuRef = useRef()

    function allToggle() {
        setDropdownToggle(false)
        setShow(false)
    }

    useEffect(() => {
        function handler(e) {
            if (!menuRef.current.contains(e.target)) {

                setDropdownToggle(false)
            }

        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })



    useEffect(() => {
        fetchApiData(`/genre/movie/list?language=en-US`)
            .then((data) => setGenres(data.genres))
    }, [])



    return (
        <>
            <nav>
                <Link to="/" className="links"><h1 className="logo">Movie<span>Chill</span></h1></Link>
                <ul className={`ul-links ${show && "ul-show"} `}>
                    <li><NavLink to="/" className="links">Home</NavLink></li>
                    <li><NavLink to="/popularPage" className="links">Popular</NavLink></li>
                    <li><NavLink to="/topRatedPage" className="links">TopRated</NavLink></li>
                    <li><NavLink to="/upcomingPage" className="links">UpComing</NavLink></li>
                    <li><NavLink to="/nowPlayingPage" className="links">NowPlaying</NavLink></li>
                    <div className="dropdown-menu" ref={menuRef} >
                        <NavLink className="links"><li onClick={() => setDropdownToggle(!dropdownToggle)}>Genres</li></NavLink>

                        <div className={`${dropdownToggle ? "dropdown-show" : "dropdown"}`}>
                            {dropdownToggle ? genres.length > 0 && genres.map((genre, index) => {
                                return <span className="dropdown_links" onClick={allToggle}>
                                    <Link key={index} to={`/genres/${genre.id}/${genre.name}`} className="links">{genre?.name}</Link>
                                </span>

                            }) : ""}
                        </div>
                    </div>

                </ul>
                <Search />

                <i className="fa-solid fa-bars" onClick={() => setShow(!show)} ></i>
            </nav>
        </>
    )
}