import {useState,useEffect} from "react";
function Joke(){
  const [joke,setJoke] = useState('');
  const fetchJoke = async ()=>{
    try {
      const response = await fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',{
  method: 'GET',
  url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
  headers: {
    'x-rapidapi-key': '90daf35750msh11588106a0e0b1bp1061d3jsn141126a69de8',
    'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com'
  }

      })
      if(!response.ok)
      {
        throw new Error('network not ok')
      }
  
      const data = await response.json()
      setJoke(data[0].joke)
    }
    catch {
      console.error('Error:',error)
    }}
    useEffect(()=>{
      fetchJoke()
    },[])

    return(
    <div className="">
      <p>Joke: </p>
      {joke && <p>{joke}</p>}
    </div>
    )

  }


export default Joke