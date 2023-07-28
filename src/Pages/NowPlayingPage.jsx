import FilterCards from "../components/FilterCards"
import { fetchApiData } from "../Api/FetchApiData";
import Pagination from "../components/Ui/Pagination";
import {useState,useEffect} from "react"

export default function NowPlayingPage(){

    const [nowPlayingData, setNowPlayingData] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(20)
    const [loading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);
        try {
            const data = await fetchApiData(`/movie/now_playing?language=en-US&page=${page}&include_adult=true`);
            setNowPlayingData(data.results);
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
        <FilterCards data = {nowPlayingData} title = {"NowPlaying Movies"}/>
        <Pagination setPage={setPage} currentPage = {page} pages = {pages}/>
        </section>
        </>
    )
}