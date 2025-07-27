import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Products = lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
// const Sustainability = lazy(() => import('./pages/Sustainability').then(module => ({ default: module.Sustainability })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
// const ExportTrackRecord = lazy(() => import('./pages/ExportTrackRecord').then(module => ({ default: module.ExportTrackRecord })));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/sustainability" element={<Sustainability />} /> */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/track-record" element={<ExportTrackRecord />} /> */}
              </Routes>
            </Suspense>
          </AnimatePresence>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;