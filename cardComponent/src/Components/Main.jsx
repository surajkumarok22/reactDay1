import React from 'react'
import Card from './Card'
const Main = () => {
  return (
    <div style={{backgroundColor:"gray", padding:"5px", display:"flex",alignItems:"center"}}>
    <Card userName ={"Nirma"} />
    <Card userName ={"Tide"}/>
    <Card userName ={"SurphExcel"}/>
    <Card userName ={"Wheel"}/>
    <Card userName ={"Ghadi"}/>
    </div>
  )
}

export default Main