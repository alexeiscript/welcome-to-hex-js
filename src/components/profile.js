import React from 'react'

function Profile({ info }) {
  return (
    <div className="section profile">        
        <div className="image-div">
            <img src={info.profilePic} alt="avatar" width="150px" />
        </div>
        <div>
            <h1>{info.name}</h1>
            <p id="position">{info.position}</p>
            <p><span>Industry worked longest: </span>{info.industry}</p>
        </div>
    </div>
  )
}

export default Profile