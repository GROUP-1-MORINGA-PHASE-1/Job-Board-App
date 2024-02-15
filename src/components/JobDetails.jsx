
import React, { useState, useEffect } from 'react';

const JobDetails = ({ match }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:3000/results/${match.params.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJob(data);
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        setError(error.message); // Set error state if fetch fails
        setLoading(false); // Set loading to false if fetch fails
      }
    };

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


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetch fails
  }

  return (
    <div>
      <h1>{job.role}</h1>
      <p>{job.company_name}</p>
      <p>{job.location}</p>
      <p>{job.text}</p>

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
