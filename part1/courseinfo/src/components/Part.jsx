import React from 'react';
   const Part =({part, exercises})=>{
	 console.log("Part.jsx {part, exercises}", part, exercises)
   return(  
	 <p>{part} {exercises}</p>)
};
export default Part;
