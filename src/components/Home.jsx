import React from 'react'
import Header from './Header'
import Auth from './Auth'

function Home({handleSearchChange}) {
  return (
    <>
      <Header handleSearchChange={handleSearchChange}/>
      <Auth/>
    </>
  )
}

export default Home
