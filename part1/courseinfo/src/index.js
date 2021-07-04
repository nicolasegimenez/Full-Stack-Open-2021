import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
const App =()=>{
	 const course = 'Half Stack Application development'
	 const part1 = 'Fundamentals of React'
	 const exercises1= 10
	 const part2 = 'Using props to pass data'
	 const exercises2 = 7
	 const part3 = 'State of a component'
	 const exercises3 = 14


	return(
	<div>
	 <h1>{course}</h1>
	 <Header></Header>
	 <p> 
	    {part1} {exercises1} 
	 </p>
	 <p>
	    {part2} {exercises2}
	 </p>
	 <p>
	    {part3} {exercises3}
	 </p>
	 <p>
	    Number of excercises: { exercises1 + exercises2 + exercises3 }
		</p>
	 </div>
	)}

      ReactDOM.render(<App />,  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
