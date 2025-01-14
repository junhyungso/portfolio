// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #141414;
  max-width: 100%;
  color: white;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <p>© 2025 Junhyung So. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
