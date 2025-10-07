import { useEffect, useState } from 'react';
import './LoadingBar.css';

type Props = {
  duration: number;
  onComplete: () => void;
};
const LoadingBar = ({ duration, onComplete }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100;
    const step = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = Math.min(prev + step, 100);
        if (nextProgress === 100) {
          clearInterval(timer);
          if (onComplete) onComplete();
        }
        return nextProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <div className="loading-bar-container">
      <div
        className="loading-bar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
      ></div>
    </div>
  );
};

export default LoadingBar;
