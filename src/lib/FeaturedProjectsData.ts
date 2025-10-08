import dogs from '../assets/dogs.png';
import game2048 from '../assets/game2048.png';
import kanban from '../assets/kanban.jpg';
import portfolio from '../assets/portfolio.png';
import rosary from '../assets/rosary.jpg';
import { ProjectData } from '../types/types';

export const FeaturedProjectsData: ProjectData[] = [
  {
    id: '1',
    title: 'Adopt a Dog',
    description:
      'A website that allows users to adopt dogs from a shelter. The app includes features such as dog profiles, adoption forms, and a user-friendly interfaces.',
    images: [dogs],
    href: '/adopt-a-dog',
    github: 'https://github.com/junhyungso/adopt-dogs',
  },
  {
    id: '2',
    title: 'Rosary',
    description:
      'A web application that helps users to pray the rosary without a physical rosary in hand. It includes prayers and mysteries so that users can keep track of their rosary progress.',
    images: [rosary],
    href: '/rosary',
    github: 'https://github.com/junhyungso/rosary',
  },
  {
    id: '3',
    title: 'Kanban',
    description: 'A simple kanban board that allows me to organize my tasks.',
    images: [kanban],
    href: '/portfolio',
    github: 'https://github.com/junhyungso/kanban',
  },
  {
    id: '4',
    title: '2048 Game',
    description: 'A 2048 game we all used to play when younger.',
    images: [game2048],
    href: '/2048',
    github: 'https://github.com/junhyungso/2048game',
  },

  {
    id: '5',
    title: 'This Portfolio',
    description: 'A web application that showcases my portfolio of projects.',
    link: 'https://junhyungso.com',
    images: [portfolio],
    href: '/portfolio',
    github: 'https://github.com/junhyungso/portfolio',
  },
];
