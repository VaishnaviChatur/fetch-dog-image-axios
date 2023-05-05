import React, { useState,useEffect } from 'react'
import './Doginfi.css'
import axios from 'axios'
export default function Doginfo() { 
    const [image,setImage] = useState(' ');
    const getDog = async ()=>{

        try
        {
         
          const response= await axios.get('https://dog.ceo/api/breeds/image/random')
         
           
           
               setImage(response.data.message)
            
        }
        catch (error){
            console.log(error)
        }
       
    }

    useEffect(() =>{
        getDog();
    },[])
  return (
    <div>
      
        <img className='img' src={image} alt="dog"/> 
        <br></br>
        <br></br>
      <button className='btn' onClick={getDog}>get dog image</button>
    </div>
  )
}
