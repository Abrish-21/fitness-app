import React, { useState, useEffect } from "react";
function Joke() {
  const  handleClick = ()=>{
    const [joke, setJoke] = useState(null);
    useEffect(()=>  {
      fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
        
        method: 'GET',
      url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
      headers: {
        'x-rapidapi-key': '90daf35750msh11588106a0e0b1bp1061d3jsn141126a69de8',
        'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com'
      }
    
    })
    .then((response)=>response.json())
    .then((data)=>{
      setJoke(data[0].joke)
      console.log(data)
    })
    
     },[])
  }
 
  return (
    <div>
      <h2>Joke of the day:</h2>
      {joke && <p>{joke}</p>}
      <button type="button" onClick={handleClick}>
        see more jokes</button>
    </div>
  );
}
export default Joke;