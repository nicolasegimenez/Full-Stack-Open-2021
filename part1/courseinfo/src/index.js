import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Total from './components/Total.jsx';
const App =()=>{
   const course = 'Half Stack application development'
   const part1 = 'Fundamentals of React'
   const exercises1 = 10
   const part2 = 'Using props to pass data'
   const exercises2 = 7
   const part3 = 'State of a component'
   const exercises3 = 14     // const-definitions	
	return(

	 <div>
	 <Header title = {course}/>
	<Content
		// eslint-disable-next-line
		part1 = {part1} exercises= {exercises1}
		// eslint-disable-next-line 
		part2 = {part2} exercises= {exercises2}
		// eslint-disable-next-line
		part3 = {part3} exercises= {exercises3}
		/>

	 <Total
		  exercises1={exercises1}
		  exercises2={exercises2}
		  exercises3={exercises3}
		/>
	 </div>
	)}

 ReactDOM.render(<App />,  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
