import React from 'react';
import JobItem from './JobItem';
import Header from './Header';

const JobList = ({ jobs }) => {
  return (
    <>
      <Header/>
      <div className='job-container'>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;