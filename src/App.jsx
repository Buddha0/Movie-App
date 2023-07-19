import { useEffect, useState } from 'react'
import './App.css'
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Nav from './Nav'
import Home from './Pages/Home';
import PopularPage from './Pages/PopularPage';
import TopRatedPage from './Pages/topRatedPage';
import CardsInfo from './Pages/CardsInfo';
import Filter from './Pages/Filter';
import { fetchApiData } from './FetchApiData';
import Genres from './Pages/Genres';
import Footer from './components/Footer';

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
      breakpoint: { max: 1024, min: 500 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2
    },

  };
  // /

  const [popularData, setPopularData] = useState([])
  const [topRatedData, setTopRatedData] = useState([])
  const [loading, setLoading] = useState(true)

  const [pages, setPages] = useState(1)

  async function fetchData() {
    setLoading(true)


    fetchApiData(`/movie/popular?language=en-US&page=${pages}`)
      .then((data) => {
        setLoading(false)
        setPopularData(data.results)
      })

    fetchApiData(`/movie/top_rated?language=en-US&page=${pages}`)
      .then((data) => {
        setTopRatedData(data.results)
        setLoading(false)
      })



  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <span className='loader'></span>

      </>
    )
  }


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home popularData={popularData} responsive={responsive} />} />
          <Route exact path="/popularPage" element={<PopularPage popularData={popularData} />} />
          <Route exact path="/topRatedPage" element={<TopRatedPage topRatedData={topRatedData} />} />
          <Route exact path="/cardsInfo/:id" element={<CardsInfo responsive={responsive} />}></Route>
          <Route exact path="/search/:name" element={<Filter />} />
          <Route exact path="/genres/:id/:name" element={<Genres />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
