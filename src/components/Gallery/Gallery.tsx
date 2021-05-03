import React from 'react';
import './Gallery.scss';
import { Image, Row, Col } from 'antd';

const imgList = [
  { link: '/img/homepage/1.jpg', desc: '1' },
  { link: '/img/homepage/2.jpg', desc: '2' },
  { link: '/img/homepage/3.jpg', desc: '3' },
  { link: '/img/homepage/4.jpg', desc: '4' },
  { link: '/img/homepage/5.jpg', desc: '5' },
  { link: '/img/homepage/6.jpg', desc: '6' },
];
const GalleryWindow: React.FC = () => {

  function ImageDemo() {
    return (
      <Image.PreviewGroup>
        <Row justify="space-between" gutter={[24, 24]}>
          {imgList.map((item: any, key) => (
            <Col key = {key} span={8}>
              <Image
                height={300}
                className={'img-body'}
                src={item.link}
              />
            </Col>
          ))}
        </Row>
      </Image.PreviewGroup>
    );
  }

  return (
    <>
      <div className={'gallery-container'}>
        <h2 className={'gallery-container-header'}>Gallery</h2>
        <div className={'gallery-container-body'}>
          <ImageDemo />
        </div>
      </div>
    </>
  )
}

export default GalleryWindow