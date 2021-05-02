import React from 'react';
import './MainNav.scss';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'antd';
import logoWhite from '../../../public/img/logo-white.svg';

interface INavLink {
  title: string;
  path: string;
}

const links: INavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/shop' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'About us', path: '/about' },
  { title: 'Contact us', path: '/contact' },
];

const MainNav: React.FC = () => {
  return (
    <nav className="landing-nav">
      <div className="container">
        <NavLink to="/">
          <img className="landing-nav__logo" src="/img/logo-white.svg" alt="logo" />
        </NavLink>
        <div className="landing-nav__wrap">
          <ul>
            {links.map((item: INavLink) => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
