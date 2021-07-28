import React from 'react';
const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average = total/3
  const percentageGood = (good*100)/total 
  const percentageNeutral = (neutral*100)/total 
  const percentageBad = (bad*100)/total 
if (total > 0){	
   return(
     <div>
      <h1> Statistics </h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad} </p>
      <p>Average: {average} </p>
      <p>Positive: {percentageGood.toFixed(2)}% </p>
      <p>Neutral: {percentageNeutral.toFixed(2)}% </p>
      <p>Bad: {percentageBad.toFixed(2)}% </p>
     </div>
   )}
	else {return(
	 <div>
		<p> No feedback given. Please Click a Button for see the statistics</p>
	 </div>
	 
	)}
};
export default Statistics;
