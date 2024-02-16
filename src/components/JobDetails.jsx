import React from 'react';

const JobDetails = ({ job, setSelectedJob, addToShortlist }) => {
  const data = job.text
  const handleAddToShortlist = () => {
    addToShortlist(job);
  };
  return (
    <div className='details-container'>
      <h2>{job.role}</h2>
      <p>{job.company_name}</p>
      {job.location ? <p>LOCATION: {job.location}</p> : null}
      {job.employment_type ? <p>TYPE: {job.employment_type}</p> : null}
      <div dangerouslySetInnerHTML={{__html: data}}/>
      <div className="job-btns">
        <button onClick={handleAddToShortlist}>Add to Shortlist</button>
        <button onClick={() => setSelectedJob(null)}>Go Back</button>
      </div>

    </div>
  );
};




export default JobDetails
