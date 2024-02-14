import React, {useState, useEffect} from 'react';


const JobDetails = ({ match }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`http://localhost:3000/results/${match.params.id}`);
      setJob(response.data);
    };

    fetchJob();
  }, [match.params.id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;