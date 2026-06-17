import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';

// ScrollToTop component to reset window scroll position on page changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element after a brief delay
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    // Otherwise scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-vnsBg font-body text-vnsText-primary">
        {/* Sticky Header Nav */}
        <Navbar />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Call / WhatsApp CTA Actions */}
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
