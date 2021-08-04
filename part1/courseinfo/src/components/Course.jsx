import React from 'react'
import Header from './Header.jsx';
import Content from './Content.jsx';
import Total from './Total.jsx';
import Part from './Part'

const Courses = ({id, name, parts}) => {
	return (
	 <div>
	 <Header title = {id}/>
	 <Content parts = {name}/>
	 <Total parts ={parts}/>
	 </div>
	)
}

export default Courses
