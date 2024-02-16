import React from 'react';

const SearchBar = ({ handleSearchChange, searchTerm, handleCategoryChange, selectedCategory }) => {
  const categories = ['role', 'employment_type', 'id', 'location', 'company_name'];

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
      <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
