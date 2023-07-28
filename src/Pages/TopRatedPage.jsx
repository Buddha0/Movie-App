import FilterCards from "../components/FilterCards"
import { fetchApiData } from "../Api/FetchApiData";
import Pagination from "../components/Ui/Pagination";

import {useState,useEffect} from "react"

export default function TopRatedPage(){

    const [topRatedData, setTopRatedData] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(500)
    const [loading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);
        try {
            const data = await fetchApiData(`/movie/top_rated?language=en-US&page=${page}&include_adult=true`);
            setTopRatedData(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])


    if (loading) {
        return (
            <>
                <div className='dead-center'>
                    <span className='loader'></span>
                </div>
            </>
        )
    }


    return(
        <>
         <section className='section popular-pageSection'>
        <FilterCards data = {topRatedData} title = {"TopRated Movies"}/>
        <Pagination setPage={setPage} currentPage = {page} pages = {pages}/>

        </section>
        </>
    )
}