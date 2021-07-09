import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Total from './components/Total.jsx';
const App =()=>{
   const course = 'Half Stack application development'
   
   const parts  = [
	{
	 name: 'Fundamentals of React',
	 exercises: 10
	},

	 { 
	 name: 'Using props to pass data',
	 exercises: 7
	 },
   
       { name:'State of a component',
	 exercises: 14
       } 
   ]    // const-definitions	
	return(

	 <div>
	 <Header title = {course}/>
	<Content parts = {parts}/>

	 <Total parts ={parts}/>
	 </div>
	)}

 ReactDOM.render(<App />,  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
