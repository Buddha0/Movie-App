import { useState } from "react"
import { NavLink } from "react-router-dom"
import Search from "./components/Search"


export default function Nav() {
    const [show, setShow] = useState(false)
    return (
        <>
            <nav>
                <h1 className="logo">Movie<span>Chill</span></h1>
                <ul className={`ul-links ${show && "ul-show"} `}>   
                    <li><NavLink to="/" className="links">Home</NavLink></li>
                    <li><NavLink to="/popularPage" className="links">Popular</NavLink></li>
                    <li><NavLink to="/topRatedPage" className="links">TopRated</NavLink></li>
                </ul>
                <Search/>
                <i className="fa-solid fa-bars" onClick={() => setShow(!show)}></i>
            </nav>
        </>
    )
}