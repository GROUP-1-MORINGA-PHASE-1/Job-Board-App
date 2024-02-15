import React from 'react';
import Header from './Header';
import JobItem from './JobItem';

const ShortList = ({ shortlistedJobs, onApply, onRemove }) => {
  return (
    <div>
      <Header />
      <div className='shortlist-container'>
        {shortlistedJobs.length > 0 ? (
          shortlistedJobs.map((job) => (
            <JobItem key={job.id} job={job} onApply={() => onApply(job.id)} onRemove={() => onRemove(job.id)} />
          ))
        ) : (
          // Display message when there are no jobs in the shortlist
          <p>No jobs in the shortlist</p>
        )}
      </div>
    </div>
  );
};

export default ShortList;
