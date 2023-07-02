import FilterCards from "../components/FilterCards"

export default function TopRatedPage({topRatedData}){
    return(
        <>
         <section className='section popular-pageSection'>
        <FilterCards data = {topRatedData} title = {"TopRated Movies"}/>
        </section>
        </>
    )
}