import React from 'react'
import Header from './Header'

function Home({handleSearchChange}) {
  return (
    <div className='home'>
      <Header handleSearchChange={handleSearchChange}/>
      <p>Looking for something new? <br/> Your next job awaits.</p>
      <p>Let us help you make that career switch today.</p>
    </div>
  )
}

export default Home
