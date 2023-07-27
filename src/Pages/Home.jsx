import HeroSection from "../components/HomeComponents/HeroSection"
import PopularCards from "../components/HomeComponents/PopularCards"
import NowPlayingCards from "../components/HomeComponents/NowPlayingCards"


export default function Home({popularData,responsive, nowPlayingData }) {

    return (
        <>
            <HeroSection popularData={popularData.slice(0,6)} />
            <  NowPlayingCards responsive={responsive}  nowPlayingData  = { nowPlayingData }/>
            <PopularCards popularData={popularData} responsive={responsive} />
        </>
    )
}