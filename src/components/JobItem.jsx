import React from 'react';
// import { Link } from 'react-router-dom';

const JobItem = ({ job }) => {
  const dirtyText = job.text

  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(dirtyText, 'text/html');
  const text = htmlDoc.body.textContent;
  return (
    <div className='job-card'>
        <h2>{job.role}</h2>
        <p>{job.company_name}</p>
        <p>{job.location}</p>
        <p>{job.employment_type}</p>
        <p>{text}</p>
        <div className="job-btns">
          <button>Add to Shortlist</button>
        </div>
    </div>
  );
};

export default JobItem;