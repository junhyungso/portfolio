// src/App.tsx
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import LoadingBar from './components/LoadingBar/LoadingBar';
import Sidebar from './components/SideBar/Sidebar';
import About from './pages/About/MyJourney';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSideMenuMinimized, setIsSideMenuMinimized] = useState(false);

  const handleComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading && (
        <>
          <main style={{ padding: '20px' }}>
            <h1>Loading...</h1>
            <LoadingBar duration={1000} onComplete={handleComplete} />
          </main>
        </>
      )}
      {!isLoading && (
        <>
          <Header
            isSideMenuMinimized={isSideMenuMinimized}
            setIsSideMenuMinimized={setIsSideMenuMinimized}
          />
          <main>
            <Sidebar isSideMenuMinimized={isSideMenuMinimized} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
