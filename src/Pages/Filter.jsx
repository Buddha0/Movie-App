import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FilterCards from "../components/FilterCards"
import { fetchApiData } from "../Api/FetchApiData";
export default function Filter() {
    const { name } = useParams()
    const [searchedData, setSearchedData] = useState([])
    const [loading, setLoading] = useState(true)


    async function fetchData() {
        setLoading(true)
        try{
            fetchApiData(`/search/movie?query=${name}&include_adult=false&language=en-US&page=1`).
            then((data)=>{
                setSearchedData(data.results)
                setLoading(false)

            })
            
        }
        catch(error){
            console.log(error)
        }
      
    }

    function DataFoundOrNot() {

        if (loading) {
            return     <div className="dead-center"> <span className = "loader"></span></div>
    
      
        }
        if (searchedData.length <=0) {
            return (
                <div className="dead-center">
                    <h1>{`Sorry no result found for ${name}`}</h1>
                </div>
            ); // Return the error message directly
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