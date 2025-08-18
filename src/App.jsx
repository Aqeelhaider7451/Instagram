import React, { useState } from 'react'
import Goku from './components/Goku'
import Navbar from './components/Instagram/rendRowFiles/Navbar'
import HomePage from './components/Instagram/rendRowFiles/HomePage'
import LoginPage from './components/Instagram/loginComponents/LoginPage'

const App = () => {
  const [user, setUser] = useState(true);


  const handleLogin = (email, password) => {

    if (email === 'aqeel@1.com' && password == 123) {
      setUser(true);
    } else {
      alert('Invalid credentials')
    }

  }
  return (
    <>
      {/* <Goku /> */}
      {!user ? (<LoginPage handleLogin={handleLogin} />) : (<HomePage />)}
    </>
  )
}

export default App