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
    { link: '/img/collapseImg/Cotton/3M.jpg', desc: '3M' },
    { link: '/img/collapseImg/Cotton/4M.jpg', desc: '4M' },
    { link: '/img/collapseImg/Cotton/5M.jpg', desc: '5M' },
    { link: '/img/collapseImg/Cotton/6M.jpg', desc: '6M' },
  ],
  [
    { link: '/img/collapseImg/Oxford/4M.jpg', desc: '4M' },
    { link: '/img/collapseImg/Oxford/5M.jpg', desc: '5M' },
  ],
  [
    { link: '/img/collapseImg/Bell/Arch.jpg', desc: 'Arch' },
    { link: '/img/collapseImg/Bell/awning.jpg', desc: 'Awning' },
    { link: '/img/collapseImg/Bell/floormat.jpg', desc: 'Floormat' },
    { link: '/img/collapseImg/Bell/roof.jpg', desc: 'Roof' },
  ],
  [
    { link: '/img/collapseImg/Tee/Pyramid.jpg', desc: 'Pyramid' },
    { link: '/img/collapseImg/Tee/white.jpg', desc: 'White' },
  ],
  [{ link: '/img/collapseImg/Tou/touareg.jpg', desc: 'Touareg' }],
  [{ link: '/img/collapseImg/Emp/Emperor.jpg', desc: 'Emperor' }],
];

const ProductCollapse: React.FC = () => {
  const panelItem = headerList.map((item: any, index: any) => (
    <Panel header={item} key={index}>
      <Row justify="start" gutter={[24, 24]}>
        {imgUrl[index].map((item: any, index: any) => (
          <Col key={index} lg={{ span: '12' }} xl={{ span: '8' }}>
            <h3 className={'product-header'}>Featur: {item.desc}</h3>
            <img src={item.link} alt={item.desc} className={'product-img'}/>
          </Col>
        ))}
      </Row>
    </Panel>
  ));

  return (
    <>
      <h2 className="header">Our Products</h2>
      <div className={'body'}>
        <Collapse defaultActiveKey={['0']}>
          {panelItem}
        </Collapse>
      </div>
    </>
  );
};

export default ProductCollapse;
