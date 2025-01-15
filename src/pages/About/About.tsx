// src/pages/About.tsx
import { useNavigate } from 'react-router-dom';
import LoadingBar from '../../components/LoadingBar/LoadingBar';

const About = () => {
  const navigate = useNavigate();
  const handleComplete = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Loading...</h1>
      <LoadingBar duration={1000} onComplete={handleComplete} />
    </div>
  );
};

export default About;
