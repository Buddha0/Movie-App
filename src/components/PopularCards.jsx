import Carousel from 'react-multi-carousel';
import Cards from './Cards';


export default function PopularCards({ responsive, popularData }) {
    return (
      <>
        <section className='section popular-section'>
          <div className='max-width'>
            <div className='column'>
              <h1 className='heading'>Popular Movies</h1>
              <Carousel responsive={responsive} swipeable={false} draggable={false}>
                {popularData.map((datas, index) => (
                  <Cards key={index} datas={datas} index={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </>
    );
  }
  