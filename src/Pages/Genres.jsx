import { useParams } from "react-router-dom";
import { fetchApiData } from "../FetchApiData";
import { useEffect, useState } from "react";
import FilterCards from "../components/FilterCards";



export default function Genres() {
  const {id,name} = useParams();
  const[genreDetail ,setGenreDetail] = useState([])
  console.log(genreDetail)
  

  useEffect(() => {
    fetchApiData(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=${id}`
    ).then((data)=>setGenreDetail(data.results));
  }, [id]);
  
 

  return (
    <>

      <section className='section popular-pageSection'>
        <FilterCards data = {genreDetail} title = {`${name} movies`}/>
        </section>
    </>
  );
}
