import React from 'react'
import Date from './Date'
const Card = ({userName,date,Month, Year}) => {
  return (
    <div style={{backgroundColor:"skyBlue", height:"100px", margin:"5px", width:"125px"}}>    
    {userName}
     <Date date={"23"} Month = {"March"} Year = {"2024"}/>
    </div>
  )
}

export default Card


// how to use props in react?