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
	   <h1>Statistics</h1>
      <table>
      <thead></thead>
      <tbody>
      <tr>
      <th>Good</th>
      <th>Neutral</th>
      <th>Bad</th>
      <th>Total</th>
      <th>Average</th>
      <th>Positive</th>
      <th>Neutral</th>
      <th>Bad</th>
      </tr>
      <tr>
	 <td>{good}</td>
	 <td>{neutral}</td>
	 <td>{bad}</td>
	 <td>{good + neutral + bad}</td>
	 <td>{average.toFixed(2)}</td>
	 <td>{percentageGood.toFixed(2)}%</td>
	 <td>{percentageNeutral.toFixed(2)}%</td>
	 <td>{percentageBad.toFixed(2)}%</td>

      </tr>
      </tbody>
      </table>
     </div>
   )}
	else {return(
	 <div>
		<p> No feedback given. Please Click a Button for see the statistics</p>
	 </div>
	 
	)}
};
export default Statistics;
