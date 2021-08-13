import React from 'react';
import Header from '../components/Header.jsx';
import Content from '../components/Content.jsx';
import Total from '../components/Total.jsx'

const App = () => {
    const title = "Web Development Curriculum"
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
            
     return(
   
 
      <div>
      <Header title = {title}/>
      <Content parts = {courses[0]["parts"]} totalParts ={courses}/>
      <Total parts ={courses[0]["parts"]}/>
 
      </div>
     )}

export default App;