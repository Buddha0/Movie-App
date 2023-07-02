
import FilterCards from "../components/FilterCards"
export default function PopularPage({ popularData }) {
    

    return (
        <section className='section popular-pageSection'>
        <FilterCards data = {popularData} title = {"Popular Movies"} />
        </section>
    )
}