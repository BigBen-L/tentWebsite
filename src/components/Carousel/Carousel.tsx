import React from 'react';
import './Carousel.scss';
import { Carousel } from 'antd';

const HomepageCarousel: React.FC = () => {

  return (
    <>
      <div>
        <Carousel autoplay effect='fade'>
          <div>
            <h3 className={`content background-img-1`}>

            </h3>
          </div>
          <div>
            <h3 className={`content background-img-2`}>

            </h3>
          </div>
          <div>
            <h3 className={`content background-img-3`}>

            </h3>
          </div>
        </Carousel>
        <div className={`ad-container`} >
          <p>
            <b>STUNNING</b>
            , authentic but Modern,
            <br />
            100% cottoncanvas,
            <b>BELL TENTS</b>
          </p>
        </div>
        <div className={`ad-shop`}>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  )
}

export default HomepageCarousel;