import React from 'react';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar';

const Header = () => {
    const navlinkStyles = {
        textDecoration: 'none',
        color: '#010101',
        borderRadius: '0.3125rem',
        margin: '0 1rem',
        padding: '0.3125rem',
        textAlign: 'center',
    }
  return (
    <div className='header'>
        <h1>The Room</h1>
        <nav>
            <NavLink to="/" style={navlinkStyles}>Home</NavLink>
            <NavLink to="/job-list" style={navlinkStyles}>Browse Jobs</NavLink>
            <NavLink to="/shortlist" style={navlinkStyles}>Shortlist</NavLink>
        </nav>
        {/* <SearchBar handleSearchChange={handleSearchChange}/> */}
    </div>
  );
};

export default Header;