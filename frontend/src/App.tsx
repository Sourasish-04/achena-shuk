import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Counter from './components/Counter';
import Members from './components/Members';
import Projects from './components/Projects';
import About from './components/About';
import Reviews from './components/Reviews';
import PhotoScroll from './components/PhotoScroll';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import LoadingAnimation from './components/LoadingAnimation';
import AllMembers from './pages/AllMembers';
import VerifyMember from './pages/VerifyMember';
import AllProjects from './pages/AllProjects';
import Story from './pages/Story';
/* import Home from './pages/Home'; */
import Donation from './pages/Donation';
import { Fingerprint } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Router>
      <div className="bg-black text-white font-serif">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Counter />
              <Members />
              <Projects />
              <About />
              <Reviews />
              <PhotoScroll />
              <Testimonials />
              <Footer />
              <FloatingSocial />
            </>
          } />
          <Route path="/members" element={<AllMembers />} />
          <Route path="/verify" element={<VerifyMember />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/story" element={<Story />} />
          
          
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;