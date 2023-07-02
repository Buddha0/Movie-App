import Carousel from 'react-multi-carousel';
import Cards from './Cards';
export default function Upcoming({ responsive, upcomingData }) {
    return (
      <>
        <section className='section upcoming-section'>
          <div className='max-width'>
            <div className='column'>
              <h1 className='heading'>Upcoming Movies</h1>
              <Carousel responsive={responsive} swipeable={false} draggable={false}>
                {upcomingData.map((datas, index) => (
                  <Cards key={index} datas={datas} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </>
    );
  }