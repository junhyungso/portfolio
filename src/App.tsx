// src/App.tsx
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoadingBar from './components/LoadingBar/LoadingBar';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/SideBar/SideBar';
import { ThemeProvider } from './context/ThemeContext';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import MyJourney from './pages/MyJourney/MyJourney';
import Projects from './pages/Projects/Projects';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSideMenuMinimized, setIsSideMenuMinimized] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsSideMenuMinimized(isMobile);
    return () => {};
  }, [isMobile]);

  return (
    <ThemeProvider>
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
            <NavBar
              isSideMenuMinimized={isSideMenuMinimized}
              setIsSideMenuMinimized={setIsSideMenuMinimized}
            />
            <main>
              <Sidebar isSideMenuMinimized={isSideMenuMinimized} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/myjourney" element={<MyJourney />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
