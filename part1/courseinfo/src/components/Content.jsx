import React from 'react'
import Part from './Part.jsx'
const Content = ({parts, totalParts}) =>{

      console.log("total", totalParts)
	const arrayName = totalParts.map(totalParts => totalParts.name)
      const arrayParts = totalParts.map(totalParts => totalParts.parts)
      const arrayPartNames = arrayParts.map((arrayParts) => arrayParts)
      console.log("arrayName", arrayName)
      console.log("ArrayParts: ",arrayParts)
       
      console.log("arrayPartNames: ", arrayPartNames)


      return(
      <div>
      <Part subtitle={arrayName[0]}  part = {arrayParts[0][0].name} exercises = {parts[0]['exercises']}/>
      <Part part = {arrayName[1]} exercises = {parts[1]['exercises']}/>
      <Part part = {parts[2]['name']} exercises = {parts[2]['exercises']}/>
      </div>

      )

}

export default Content;
