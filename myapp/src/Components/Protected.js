import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
   const {Component} = props
   const Navigate = useNavigate();
   useEffect(()=>{
    let login = localStorage.getItem('login');
    if(!login){
        Navigate('login')
    }
   })
  return (
    <div>
        <h1>
            
        </h1>

            
<Component/>
    </div>
  )
}
