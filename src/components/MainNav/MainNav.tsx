import React from 'react';
import './MainNav.scss';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import logoWhite from '../../../public/img/logo-white.svg';

const MainNav: React.FC = () => {
  return (
    <nav className="landing-nav">
      <div className="container">
        <img className="landing-nav__logo" src="/img/logo-white.svg" alt="logo" />
        <div className="landing-nav__wrap">
          <Link to="/sign-up">
            <Button className="ant-btn-ghost--theme-white" type="ghost">
              Sign Up
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button className="ant-btn-ghost--theme-white" type="ghost">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
