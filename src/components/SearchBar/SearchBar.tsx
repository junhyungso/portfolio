import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useRef, useState } from 'react';
import { ProjectData } from '../../types/types';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  projects: ProjectData[];
  onSelect?: (project: ProjectData) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  projects,
  onSelect,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
    setHighlightedIndex(-1);
  };

  const handleSelect = (project: ProjectData) => {
    setSearchQuery(project.title);
    setShowSuggestions(false);
    onSelect?.(project);
  };

  const handleBlur = () => {
    // delay closing so click event can register
    setTimeout(() => setShowSuggestions(false), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredProjects.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredProjects.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredProjects.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && filteredProjects[highlightedIndex]) {
        handleSelect(filteredProjects[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Ensure highlighted suggestion stays visible if list scrolls
  useEffect(() => {
    if (
      listRef.current &&
      highlightedIndex >= 0 &&
      listRef.current.children[highlightedIndex]
    ) {
      (
        listRef.current.children[highlightedIndex] as HTMLElement
      ).scrollIntoView({
        block: 'nearest',
      });
    }
  }, [highlightedIndex]);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(filteredProjects.length > 0)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.headerSearchButton}>
        <SearchIcon />
      </button>

      {showSuggestions && filteredProjects.length > 0 && (
        <ul ref={listRef} className={styles.suggestionsList}>
          {filteredProjects.map((project, index) => (
            <li
              key={project.id}
              onClick={() => handleSelect(project)}
              className={`${styles.suggestionItem} ${
                index === highlightedIndex ? styles.highlighted : ''
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
