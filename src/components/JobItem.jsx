import React from "react";
const JobItem = ({ job, setSelectedJob }) => {
  const handleClick = () => {
    setSelectedJob(job);
  };
  
  return (
    <div className='job-card' onClick={handleClick}>
      <h2>{job.role}</h2>
      <p>{job.company_name}</p>
      {job.location ? <p>LOCATION: {job.location}</p> : null}
      {job.employment_type ? <p>TYPE: {job.employment_type}</p> : null}

    </div>
  );
};

export default JobItem;
