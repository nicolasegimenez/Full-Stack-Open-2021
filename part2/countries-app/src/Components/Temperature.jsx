import React from 'react'
const Temperature = ({weather}) =>{ 

console.log("weather component", weather)

    return(

<><p> <strong>Temperature:</strong>{weather.current.temperature}</p>
<br/>
<img src={weather.current.weather_icons[0]}></img>
<br />
<p><strong>Wind </strong> {weather.current.wind_speed}  Direction: {weather.current.wind_dir}</p> 

 </> 
         )}
export default Temperature
