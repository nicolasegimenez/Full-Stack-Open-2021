import React from 'react'
const Total =({parts})=>{

	const result = parts.map(parts => parts.exercises)

	
	var total = result.reduce(function(a, b){ 
		return a + b; 
	});

	return(

		
	<strong><p>Number of exercises {total}</p></strong>

	)}
export default Total
