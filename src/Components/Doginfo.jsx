import React, { useEffect, useState } from 'react'
import './Doginfi.css'
export default function Doginfo() {
    
    const [image,setImage] = useState(' ');
    const getDog = async ()=>{
        try
        {
            const response = fetch('https://dog.ceo/api/breeds/image/random');
            const data =await (await response).json();
            setImage(data.message)
        }
        catch (error){
            console.log(error)
        }

  
    //  console.log({data})
    }

    useEffect(() =>{
        getDog();
    },[])
  return (
    <div>
      
        <img className='img' src={image} alt="dog"/> 
      {/* <button onClick={getDog}>get dog</button> */}
    </div>
  )
}
