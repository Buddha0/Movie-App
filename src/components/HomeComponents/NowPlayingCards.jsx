import Carousel from 'react-multi-carousel';
import Cards from '../Cards';


export default function NowPlayingCards({ responsive, nowPlayingData }) {
    return (
      <>
        <section className='section popular-section'>
          <div className='max-width'>
            <div className='column'>
              <h1 className='heading'>Now Playing Movies</h1>
              <Carousel responsive={responsive} swipeable={false} draggable={false}>
                {nowPlayingData .map((datas, index) => (
                  <Cards key={index} datas={datas} index={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </>
    );
  }
  