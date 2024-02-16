import React from 'react';

const SearchBar = ({ handleSearchChange, searchTerm }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchChange(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search jobs"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;