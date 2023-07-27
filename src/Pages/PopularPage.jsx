
import { useEffect, useState } from "react"
import FilterCards from "../components/FilterCards"
import Pagination from "../components/Ui/Pagination";

import { fetchApiData } from "../Api/FetchApiData"

export default function PopularPage() {
    const [popularData, setPopularData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);
        try {
            const data = await fetchApiData(`/movie/popular?language=en-US&page=${page}`);
            setPopularData(data.results);
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

    return (
        <section className='section popular-pageSection'>
            <FilterCards data={popularData} title={"Popular Movies"} />
            <Pagination setPage={setPage} currentPage = {page}/>
        </section>

    )
}