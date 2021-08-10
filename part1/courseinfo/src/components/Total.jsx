import React from 'react'
const Total =({parts})=>{
	console.log("parts", parts)
	const result = parts.map(parts => parts.exercises)
    console.log("result",result)
	
	var total = result.reduce(function(a, b){ 
		console.log("a ",a,"b", b)
		return a + b; 
	});

	console.log(total)
	return(

		
	<strong><p>Number of exercises {total}</p></strong>

	)}
export default Total
