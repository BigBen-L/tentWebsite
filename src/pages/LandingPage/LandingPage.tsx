import React from 'react';
import './LandingPage.scss';
import { Row, Col, Space } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CalculatorFilled, CheckCircleFilled, MessageFilled, RightOutlined } from '@ant-design/icons';
import HomePageCarousel from '../../components/Carousel/Carousel'
import ActionCard from '../../components/ActionCard/ActionCard'

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="landing-page">
        <HomePageCarousel />
        <ActionCard />
      </main>
    </>
  );
};

export default LandingPage;
