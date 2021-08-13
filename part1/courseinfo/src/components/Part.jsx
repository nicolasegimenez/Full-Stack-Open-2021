import React from 'react';
   const Part =({part, exercises, subtitle})=>{

   return(  
   <div>
   <h2>{subtitle}</h2>
	 <p>{part} {exercises}</p>
    </div>
    )
};
export default Part;
