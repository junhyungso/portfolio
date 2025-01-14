import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Contact.css';

const Key = styled.div<{ keyType: string; position?: number }>`
  border: 1px solid #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-align: center;
  line-height: 200px;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  transition: transform 0.1s, box-shadow 0.1s;

  transition: transform 0.1s, background-color 0.1s;
  width: ${(props) => (props.keyType === 'white' ? '80px' : '60px')};
  height: ${(props) => (props.keyType === 'white' ? '200px' : '120px')};
  background-color: ${(props) => (props.keyType === 'white' ? '#fff' : '#000')};
  z-index: ${(props) => (props.keyType === 'white' ? '1' : '2')};
  margin-left: ${(props) => (props.keyType === 'black' ? '-30px' : '')};
  left: ${(props) => (props.keyType === 'black' ? `${props.position}px` : '')};
  position: ${(props) => (props.keyType === 'black' ? 'absolute' : '')};
  background: ${(props) =>
    props.keyType === 'white'
      ? 'linear-gradient(to bottom, #fff, #e0e0e0)'
      : 'linear-gradient(to bottom, #333, #000)'};
  box-shadow: ${(props) =>
    props.keyType === 'white'
      ? '0 5px 5px rgba(0, 0, 0, 0.2)'
      : '0 3px 5px rgba(0, 0, 0, 0.5)'}; /* Drop shadow for depth */
  &:active {
    transform: ${(props) =>
      props.keyType === 'white' ? 'scale(0.95)' : 'scale(0.97)'};
    background-color: ${(props) =>
      props.keyType === 'white' ? '#ccc' : '#444'};
  }
`;

const Contact = () => {
  const [loadingSec, setLoadingSec] = useState(0);

  const keys = [
    { note: 'C', type: 'white', id: 1 },
    { note: 'C#', type: 'black', position: 60, id: 2 },
    { note: 'D', type: 'white', id: 3 },
    { note: 'D#', type: 'black', position: 160, id: 4 },
    { note: 'E', type: 'white', id: 5 },
    { note: 'F', type: 'white', id: 6 },
    { note: 'F#', type: 'black', position: 300, id: 7 },
    { note: 'G', type: 'white', id: 8 },
    { note: 'G#', type: 'black', position: 380, id: 9 },
    { note: 'A', type: 'white', id: 10 },
    { note: 'A#', type: 'black', position: 460, id: 11 },
    { note: 'B', type: 'white', id: 12 },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setLoadingSec((prevSec) => prevSec + 1),
      300
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="piano">
        {keys.map((key) => (
          <Key
            keyType={key.type}
            position={key.position}
            key={key.note}
            style={key.id === loadingSec ? { backgroundColor: 'red' } : {}}
          />
        ))}
      </div>
      <div>Loading...</div>
    </>
  );
};

export default Contact;
