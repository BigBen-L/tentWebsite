import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import ShopPage from './pages/ShopPage/ShopPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/shop/:tentId" component={ShopPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
