import { useParams } from "react-router-dom";
import { fetchApiData } from "../Api/FetchApiData";
import { useEffect, useState } from "react";
import FilterCards from "../components/FilterCards";





export default function Genres() {
  const { id, name } = useParams();
  const [genreDetail, setGenreDetail] = useState([])
  const [loading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true)
    try {
    const data = await fetchApiData(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=${id}`
    )
    setGenreDetail(data.results)
    }
   
    catch (error) {
      console.log("error: ", error)
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
    
  },[id]);

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

      <section className='section popular-pageSection'>
        <FilterCards data={genreDetail} title={`${name} movies`} />
      </section>
    </>
  );
}
