import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import FilterCards from "../components/FilterCards"
export default function Filter() {
    const { name } = useParams()
    const [searchedData, setSearchedData] = useState([])
    const [loading, setLoading] = useState(true)


    async function fetchData() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTE0YTFkZjczNWQ2YzUwMDZkMmIxMWJmYjM4NjU3YyIsInN1YiI6IjY0ODgxNjBlOTkyNTljMDExYzQxYmJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1n88x9JoBFrZS6epR_O1HlAj5jauWLKU7yOKVOkGnig',
            },
        };
        const searchedDataApi = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
            options
        );
        setSearchedData(searchedDataApi.data.results);
        setLoading(false)
    }

    function DataFoundOrNot() {

        if (loading) {
            return null
        }
        if (searchedData.length === 0) {
            return <h1>No Data found</h1>; // Return the error message directly
        }
        return null;
    }

    useEffect(() => {
        fetchData();
    }, [name]);

    return (
        <>
            <section className='section filter-pageSection'>
                <DataFoundOrNot />

                {searchedData.length > 0 && (
                    <FilterCards data={searchedData} title={`Movies For ${name.toUpperCase()}`} />
                )}
            </section>
        </>
    );
}    