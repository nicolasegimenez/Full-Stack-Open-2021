import React from 'react'

const TrueMessage = ({message})=> {
      if(message === null){
      return null
      }

	return(
	 <div className="message">

		 {message}
	 </div>
	)
}
export default TrueMessage
