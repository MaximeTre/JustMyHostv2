import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Legal from './pages/Legal';
import Offers from './pages/Offers';
import Games from './pages/Games';
import VpsOffers from './pages/VpsOffers';
import VpsLxc from './pages/VpsLxc';
import VpsKvm from './pages/VpsKvm';
import WebOffers from './pages/WebOffers';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import NotFound from './pages/404'; // Import de la page 404
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mentions-legales" element={<Legal />} />
            <Route path="offres" element={<Offers />} />
            <Route path="offres/vps" element={<VpsOffers />} />
            <Route path="offres/vps/lxc" element={<VpsLxc />} />
            <Route path="offres/vps/kvm" element={<VpsKvm />} />
            <Route path="offres/web" element={<WebOffers />} />
            <Route path="games" element={<Games />} />
            <Route path="contact" element={<Contact />} />
            <Route path="partners" element={<Partners />} />
            <Route path="*" element={<NotFound />} /> {/* Route 404 */}
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
