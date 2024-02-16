import React, { useEffect, useState } from 'react'
import Header from './Header'
import ShortListItem from './ShortListItem'

function ShortList() {
    const [shortlist, setShortlist] = useState([])
  const [appliedJobs, setAppliedJobs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/shortlist')
    .then(response => response.json())
    .then(data => setShortlist(data))
  }, [])

  function handleShortlistClick(job) {
    let newShortlist = shortlist.filter((j) => j !== job);
    setShortlist(newShortlist)
  }
  function handleApplyClick(job){
    fetch('http://localhost:3000/applied', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(job),
        })
        .then((response) => response.json())
        .then((data) => {
          setAppliedJobs([...appliedJobs, data]);
        })
  }

  return (
    <div>
      <Header/>
      <div className='shortlist-container'>
         {shortlist.map(job => <ShortListItem  
            key={job.id} 
            job={job} 
            handleShortlistClick={handleShortlistClick}
            handleApplyClick={handleApplyClick}
        />)}
       <div/>
    </div>
    </div>
  )
         }
export default ShortList
