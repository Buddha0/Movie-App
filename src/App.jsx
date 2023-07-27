import { useEffect, useState } from 'react'
import './App.css'
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Pages/Home';
import PopularPage from './Pages/PopularPage';
import TopRatedPage from './Pages/TopRatedPage';
import CardsInfo from './Pages/CardsInfo';
import Filter from './Pages/Filter';
import { fetchApiData } from './Api/FetchApiData';
import Genres from './Pages/Genres';
import Footer from './components/Footer';
import UpcomingPage from './Pages/UpcomingPage';
import NowPlayingPage from './Pages/NowPlayingPage';

function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 800, min: 320 },
      items: 2
    },
    smallmobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1
    },

  };


  const [popularData, setPopularData] = useState([])
  const [nowPlayingData, setNowPlayingData] = useState([])
  const [loading, setLoading] = useState(true)


  async function fetchData() {
    setLoading(true)
    try {
      const popularDataApi = await fetchApiData(`/movie/popular?language=en-US&page=1`)
      setPopularData(popularDataApi.results)

      const nowPlayingDataApi = await fetchApiData(`/movie/now_playing?language=en-US&page=1`)
      setNowPlayingData(nowPlayingDataApi.results)
        
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000)

  }, []);

  if (loading) {
    return (
      <>
        <div className='dead-center'>
          <span className='loader'></span>
        </div>
      </>
    )
  }


  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home popularData={popularData} responsive={responsive} nowPlayingData = {nowPlayingData}  />} />
          <Route exact path="/popularPage" element={<PopularPage />} />
          <Route exact path="/topRatedPage" element={<TopRatedPage />} />
          <Route exact path="/upcomingPage" element={< UpcomingPage />} />
          <Route exact path="/nowPlayingPage" element={< NowPlayingPage />} />
          <Route exact path="/cardsInfo/:id" element={<CardsInfo responsive={responsive} />} />
          <Route exact path="/search/:name" element={<Filter />} />
          <Route exact path="/genres/:id/:name" element={<Genres />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
