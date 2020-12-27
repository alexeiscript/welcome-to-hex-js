import React from 'react'

function Accomplishment({ accomplishment }) {
    console.log(accomplishment)
  return (
    <div className="section accomplishment">
      <h4 className="heading">
        Project / accomplishment I'm proud of
      </h4>
      <p className="description">{accomplishment}</p>
    </div>
  )
}

export default Accomplishment