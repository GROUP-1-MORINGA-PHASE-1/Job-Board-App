// import React, {useState, useEffect} from 'react';


// const JobDetails = ({ job }) => {
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//     const fetchJob = async () => {
//       const response = await fetch(`http://localhost:3000/results/${job.id}`);
//       setJob(response.data);
//     };

//     fetchJob();
//   }, [job.id]);

//   if (!job) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{job.role}</h2>
//       <p>{job.company_name}</p>
//       {(!job.location)? null : <p>LOCATION: {job.location}</p>}
//       {(!job.employment_type)? null : <p>TYPE: {job.employment_type}</p>}
//     </div>
//   );
// };

// export default JobDetails;
// import React, { useState, useEffect } from 'react';

// const JobDetails = ({ job }) => {
//   const [clickedJob, setClickedJob] = useState(job);

//   useEffect(() => {
//     const fetchJob = async () => {
//       const response = await fetch(`http://localhost:3000/results/${clickedJob.id}`);
//       const data = await response.json();
//       setClickedJob(data);
//     };

//     if (clickedJob.id) {
//       fetchJob();
//     }
//   }, [clickedJob.id]);

//   if (!clickedJob.id) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{clickedJob.role}</h2>
//       <p>{clickedJob.company_name}</p>
//       {clickedJob.location ? <p>LOCATION: {clickedJob.location}</p> : null}
//       {clickedJob.employment_type ? <p>TYPE: {clickedJob.employment_type}</p> : null}
//     </div>
//   );
// };

// export default JobDetails;
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