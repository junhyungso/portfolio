// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #141414;
  color: white;
`;

const Header: React.FC = () => {
  return (
    <Navbar>
      <Link to="/">Home</Link>
      <div>
        <input
          type="text"
          className="header__search"
          placeholder="Search projects..."
        />
      </div>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Navbar>
  );
};

export default Header;
