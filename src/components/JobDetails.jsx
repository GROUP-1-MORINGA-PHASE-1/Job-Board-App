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

    fetchJob();
  }, [match.params.id]);

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
    </div>
  );
};

export default JobDetails;
