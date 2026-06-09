
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPortfolio from './pages/AboutPortfolio';
import LpAios from './pages/LpAios';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Default site shell (dark theme): global Header + Footer around the page.
const SiteLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sixsen-orange selection:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPortfolio />} />
        </Route>
        {/* Standalone light-theme landing page with its own header/footer chrome. */}
        <Route path="/lp-aios" element={<LpAios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
