import Carousel from 'react-multi-carousel';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import { fetchApiData } from '../FetchApiData';
export default function Upcoming({ responsive }) {
  const [loading,setLoading] = useState(true)

  const [upcomingData, setUpcomingData] = useState([])
  useEffect(()=>{
    setLoading(true)
    fetchApiData(`/movie/now_playing?language=en-US&page=1`)
    .then((data)=>{
      setUpcomingData(data.results)
      if(upcomingData){
        setLoading(false)
      }
     
    })
  },[])

  if(loading){
 return <h1>loadinggg....</h1>
  }
    return (
      <>
        <section className='section upcoming-section'>
          <div className='max-width'>
            <div className='column'>
              <h1 className='heading'>Upcoming Movies</h1>
              <Carousel responsive={responsive} swipeable={false} draggable={false}>
                {upcomingData?.map((datas, index) => (
                  <Cards key={index} datas={datas} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </>
    );
  }