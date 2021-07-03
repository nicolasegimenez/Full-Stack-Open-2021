import React from 'react';
import ReactDOM from 'react-dom';

const App =()=>
  {console.log('Hello from component')
	const now = new Date()
	const a=10
	const b=20
   return (
      <div>
	 <p>Hello World, it is {now.toString()}</p>
	 <p>
	    {a} plus {b} is {a + b}

	   </p>	   
      </div>
   )
}

ReactDOM.render(<App />,  document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
