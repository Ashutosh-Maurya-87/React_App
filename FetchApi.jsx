import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import { Component } from 'react';

const FetchApi = () =>{
    const [data, setData] = useState(' ');
     const api = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    useEffect(()=>{
    axios.get(api)
    .then(response=>{
        if(response){
            setData((response));
        }
        console.log(`this response: `,response.config.url);
    })
    .catch(error=>{
        console.log(`there are any error: ${error}`);
    })
},[api])
console.log(`data are : `,data.config);
 

return(
    <>
    <h4> This is a pokemon api data </h4>
    {
         
        
    }
    </>
)
}
  export default FetchApi;