import HeroSection from "../components/HeroSection"
import PopularCards from "../components/PopularCards"
import Upcoming from "../components/Upcoming"
export default function Home({popularData,upcomingData,responsive }) {

    return (
        <>
            <HeroSection popularData={popularData} />
            <Upcoming  responsive={responsive} />
            <PopularCards popularData={popularData} responsive={responsive} />
        </>
    )
}