import React from 'react';
import './ActionCard.scss';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const ActionCard: React.FC = () => {

  return (
    <>
      <Row className={'action'} justify="space-between">
        <Col span={7} className={`action-container`}>
          <Link to="/about">
            <h3 className={`action-container-head`}>
              About Us
            </h3>
          </Link>
        </Col>
        <Col span={7} className={`action-container`}>
          <Link to="/shop">
            <h3 className={`action-container-head`}>
              Shop
            </h3>
          </Link>
        </Col>
        <Col span={7} className={`action-container`}>
          <Link to="/gallery">
            <h3 className={`action-container-head`}>
              Gallery
            </h3>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default ActionCard