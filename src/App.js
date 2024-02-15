import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import JobList from './components/JobList';
// import JobDetails from './components/JobDetails';
// import ApplyForm from './components/ApplyForm';
import Home from './components/Home';
import ShortList from './components/ShortList';
import Login from './components/Login';  
import SignUp from './components/SignUp';

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchJobs = () => {
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(data => {
      setJobs(data)
      console.log(data)
    })
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filteredJobs = jobs.filter((job) => {
  //   return (
  //     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     job.location.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  const handleApply = (jobId) => {
    // Handle apply functionality here
    console.log(`Applying for job with ID: ${jobId}`);
  };

  const handleRemove = (jobId) => {
    // Handle remove functionality here
    console.log(`Removing job with ID: ${jobId} from shortlist`);
  };

  return (
    <Router>
      <div className="App">
        {/* <Header handleSearchChange={handleSearchChange}/> */}
        <Routes>
          <Route exact path="/" element={<Home handleSearchChange={handleSearchChange}/>}/>
          <Route path="/job-list" element={<JobList jobs={jobs} />}/>  
          <Route path="/shortlist" element={<ShortList shortlistedJobs={jobs} onApply={handleApply} onRemove={handleRemove} />}/>  
          {/* <Route path="/apply" element={<ApplyForm />}/>   */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
   );
}

export default App;
