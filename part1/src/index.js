import React from 'react';
import ReactDOM from 'react-dom';
const Hello=(props)=>{

	return(
		<div> 
		<p> Hello {props.name}, you are {props.age} years old </p> 
		</div>
	)}
const Footer =()=>(
   <div>
	greeting app created by <a href="https://github.com/nicoarkano">nicoarkano</a>
   </div>)

const App =()=>{
	const name = 'Peter'
	const age=10
	
	console.log(name, age);
	return(
		<div>
		<h1>Grettings</h1>
		<Hello name ="Maya" age={26+10}/>
		<Hello name={name} age={age}/>
		<Footer />
		</div>
   )
}

ReactDOM.render(<App />,  document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
