import React, { useState, useEffect } from 'react';
import JobItem from './JobItem';
import Header from './Header';
import JobDetails from './JobDetails';
import SearchBar from './SearchBar';

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [shortlistedJobs, setShortlistedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('title');

  useEffect(() => {
    // Filter jobs based on search term and selected category
    const filtered = jobs.filter((job) => {
      const categoryValue = job[selectedCategory]?.toLowerCase(); // Get category value (title, location, type)
      return categoryValue && categoryValue.includes(searchTerm.toLowerCase());
    });
  
    setFilteredJobs(filtered);
  }, [searchTerm, jobs, selectedCategory]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToShortlist = (job) => {
    fetch('http://localhost:3000/shortlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
        setShortlistedJobs([...shortlistedJobs, data]);
      });
  };

  return (
    <>
      <Header />
      <SearchBar
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        handleCategoryChange={handleCategoryChange}
      />
      <div className='job-container'>
        {selectedJob ? (
          <JobDetails
            job={selectedJob}
            setSelectedJob={setSelectedJob}
            addToShortlist={addToShortlist}
          />
        ) : (
          filteredJobs.map((job) => (
            <JobItem
              key={job.id}
              job={job}
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
            />
          ))
        )}
      </div>
    </>
  );
};

export default JobList;
