// src/components/ProjectCard.tsx
import React from 'react';
import styled from 'styled-components';

type ProjectProps = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
}) => (
  <Card>
    <img
      src={image}
      alt={title}
      style={{ width: '100%', borderRadius: '8px' }}
    />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </Card>
);

export default ProjectCard;
