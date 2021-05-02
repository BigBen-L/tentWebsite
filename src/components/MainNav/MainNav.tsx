import React from 'react';
import './MainNav.scss';
import { NavLink } from 'react-router-dom';

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
              <NavLink to={item.path} key={item.path}>
                <li>{item.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
