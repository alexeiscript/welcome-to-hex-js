import React from 'react'

function WhyMe ({ whyMe }) {
  return (
    <div className="section whyMe">
      <h4 className="heading">
        Why me?
      </h4>
      <p className="argument">{whyMe}</p>
    </div>
  )
}

export default WhyMe