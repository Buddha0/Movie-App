import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Nav from './Nav'
import Home from './Pages/Home';
import PopularPage from './Pages/PopularPage';
import TopRatedPage from './Pages/topRatedPage';
import CardsInfo from './Pages/CardsInfo';
import Filter from './Pages/Filter';
function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2
    },
 
  };

  const [upcomingData, setUpcomingData] = useState([])
  const [popularData, setPopularData] = useState([])
  const [topRatedData, setTopRatedData] = useState([])

  const [pages, setPages] = useState(5)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTE0YTFkZjczNWQ2YzUwMDZkMmIxMWJmYjM4NjU3YyIsInN1YiI6IjY0ODgxNjBlOTkyNTljMDExYzQxYmJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1n88x9JoBFrZS6epR_O1HlAj5jauWLKU7yOKVOkGnig'
    }
  };

  async function fetchData() {
    const upcomingApiData = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}`, options)
    setUpcomingData(upcomingApiData.data.results)
   
    
    const popularApiData = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pages}`, options)
   setPopularData(popularApiData.data.results)
 
  

    const topRatedApiData = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pages}`, options)
    setTopRatedData(topRatedApiData.data.results)

  }

  useEffect(() => {
    fetchData();
    
  }, [pages]);

  

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home popularData={popularData} responsive={responsive} upcomingData={upcomingData} />} />
        <Route exact path="/popularPage" element={<PopularPage popularData={popularData} />} />
        <Route exact path="/topRatedPage" element={<TopRatedPage topRatedData={topRatedData} />} />
        <Route exact path = "/cardsInfo/:id" element = {<CardsInfo responsive={responsive} options = {options} /> }></Route>
        <Route exact path="/filter/:name" element={<Filter/>} />
      </Routes>
    </Router>
  </>
  )
}

export default App
