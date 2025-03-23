import React from 'react'

const Date = ({date,Month, Year}) => {
  return (
    <div>
        <span>{date}</span>
        <span>{Month}</span>
        <span>{Year}</span>
        
    </div>
  )
}

export default Date