import React from 'react'
import "../../styles/schoolType.css"

const SchoolType = ({ photo, title, bulletPoints, learnMoreLink }) => {
  return (
      <div className="card">
          <img src={photo} alt={title} className="card-image" />
          <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <ul className="card-bullets">
                  {bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                  ))}
              </ul>
              <a href={learnMoreLink} className="card-button">Learn More</a>
          </div>
      </div>
  )
}

export default SchoolType