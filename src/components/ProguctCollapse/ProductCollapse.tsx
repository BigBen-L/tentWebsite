import React from 'react';
import { Collapse, Row, Col } from 'antd';
import './ProductCollapse.scss';

const { Panel } = Collapse;

const headerList = [
  'Cotton Canvas Bell Tent',
  'Oxford Bell Tent',
  'Bell Tent Accessaries',
  'Teepee Tent',
  'Toureg Tent',
  'Emperor Tent',
];

const imgUrl = [
  [
    '/img/collapseImg/Cotton/3M.jpg',
    '/img/collapseImg/Cotton/4M.jpg',
    '/img/collapseImg/Cotton/5M.jpg',
    '/img/collapseImg/Cotton/6M.jpg',
  ],
  ['/img/collapseImg/Oxford/4M.jpg', '/img/collapseImg/Oxford/5M.jpg'],
  [
    '/img/collapseImg/Bell/Arch.jpg',
    '/img/collapseImg/Bell/awning.jpg',
    '/img/collapseImg/Bell/floormat.jpg',
    '/img/collapseImg/Bell/roof.jpg',
  ],
  ['/img/collapseImg/Tee/Pyramid.jpg', '/img/collapseImg/Tee/white.jpg'],
  ['/img/collapseImg/Tou/touareg.jpg'],
  ['/img/collapseImg/Emp/Emperor.jpg'],
];

const ProductCollapse: React.FC = () => {
  const panelItem = headerList.map((item: any, index: any) => (
    <Panel header={item} key={index}>
      <Row justify="start" gutter={[24, 24]}>
        {imgUrl[index].map((item: any, index: any) => (
          <Col key={index} lg={{ span: '12' }} xl={{ span: '8' }}>
            <img src={item} alt="tent" />
          </Col>
        ))}
      </Row>
    </Panel>
  ));

  return (
    <>
      <h2 className="header">Our Products</h2>
      <Collapse defaultActiveKey={['0']}>{panelItem}</Collapse>
    </>
  );
};

export default ProductCollapse;
