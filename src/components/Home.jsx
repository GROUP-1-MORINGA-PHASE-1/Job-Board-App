import React from 'react'
import Header from './Header'
import {useNavigate} from 'react-router-dom'

function Home({handleSearchChange}) {
  const textStyles ={
    fontSize: "20px",

  }
  const navigate = useNavigate()
  
  function handleHomeBtnClick(){
    navigate('/job-list')
  }

  const btnStyle = {
    width: '30%',
    borderRadius: '6px',
    backgroundColor: '#f2542d',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  }
  return (
    <>
      <Header handleSearchChange={handleSearchChange}/>
      <div className="home-content">
        <h1 style={{color: 'black', fontSize: '100px', textAlign: 'center', }}>Welcome to <br/> The Room.</h1>
        <div className="home-txt" style={textStyles}>
          <p>Looking to make that career change?</p>
          <p>Let us help you  find the perfect opportunity for your skills.</p>
          <button style={btnStyle} onClick={handleHomeBtnClick}>Get Started</button>  
        </div>
      </div>
    </>
  )
}

export default Home
// import React, { useState } from 'react'
// import Header from './Header'
// import Auth from './Auth'

// function Home({ handleSearchChange }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true)
//   }

//   return (
//     <>
//       <Header handleSearchChange={handleSearchChange} />
//       {!isLoggedIn ? (
//         <Auth onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         <>
//           <h2>Welcome to the Job Board</h2>
//           <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//         </>
//       )}
//     </>
//   )
// }

// export default Home