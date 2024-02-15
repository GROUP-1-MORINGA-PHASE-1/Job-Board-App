import React from 'react';

const JobItem = ({ job, onApply, onRemove }) => { // Added onApply and onRemove props
  // Extracting text content from HTML
  const dirtyText = job.text;
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(dirtyText, 'text/html');
  // Extracting text content from the parsed HTML
  const text = htmlDoc.body.textContent;

  return (
    <div className='job-card'>
      <h2>{job.role}</h2>
      <p>{job.company_name}</p>
      <p>{job.location}</p>
      <p>{text}</p>
      <div className="job-btns">
        <button onClick={onApply}>Apply</button> {/* Added onApply click handler */}
        <button onClick={onRemove}>Remove</button> {/* Added onRemove click handler */}
      </div>
    </div>
  );
};

export default JobItem;
