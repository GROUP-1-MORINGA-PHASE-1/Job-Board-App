import React from 'react'

function ShortListItem({job,handleShortlistClick, handleApplyClick}) {
    return (
        <div className='shortlist-card'>
          <h2>{job.role}</h2>
          <p>{job.company_name}</p>
          {job.location ? <p>LOCATION: {job.location}</p> : null}
          {job.employment_type ? <p>TYPE: {job.employment_type}</p> : null}
          <div className="job-btns">
              <button onClick={handleApplyClick}>Apply</button>
              <button onClick={handleShortlistClick}>Remove from Shortlist</button>
          </div>
        </div>
      );
}

export default ShortListItem
