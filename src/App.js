import React, { useState, useEffect } from 'react'
import './styles/app.css'
import Profile from './components/profile'
import Accomplishment from './components/accomplishment'
import WhyMe from './components/whyMe'

const axios = require('axios')

function App() {

  const [details, setDetails] = useState()

  const getDetails = () => axios.get('http://localhost:4000/api/userProfile').then((res) => res.data)

  useEffect(() => {
    getDetails().then(details => setDetails(details))
  }, [])

  if (!details) {
    return null;
  }

  const { user, project, description } = details

  return (
    <div className="App">
      <div className="hex-div">
        <Profile info={user} />
        <Accomplishment accomplishment={project}/>
        <WhyMe whyMe={description}/>
      </div>
    </div>
  );
}

export default App
