import React, { useState,useRef, useEffect } from 'react'

function OtpInput({length=4,onOtpSubmit=()=>{}}) {
    const [otp,setOtp]=useState(new Array(length).fill(""));
    const inputrefs=useRef([])
    const handleChange=(index,e)=>{
        const value=e.target.value;
        if(isNaN(value)) return;  //not a number
        const newotp=[...otp] //whatever is already inside the otp
        //allow only ont input
        newotp[index]=value.substring(value.length-1);//ng
        setOtp(newotp)      //setters are asynchornous
        const combinedOtp=newotp.join("")
        if(combinedOtp.length===length){
          onOtpSubmit(combinedOtp);  
        }
        //move to next input if current field is filled
        if(value && index<length-1 && inputrefs.current[index+1]){
            inputrefs.current[index+1 ].focus();
        }

    }
    const handleClick=()=>{
 
    }
    const handlekeydown=()=>{

    }
    console.log(inputrefs);

    useEffect(()=>{
        if(inputrefs.current[0]){
            inputrefs.current[0].focus();
        }
    },[])
  return (
    <div className='p-3 mx-auto' >
      {
         otp.map((value,index)=>{
            return <input //imp
            key={index}
            className='border border-gray-300 p-2 mt-5 ml-2 mr-2 w-[40px] h-[40px] text-xl rounded-sm '
            type='text'
            ref={(input)=>(inputrefs.current[index]=input)}

            value={value}
            onChange={(e)=>handleChange(index,e)}
            onClick={handleClick}
            onKeyDown={(e)=>handlekeydown(index,e)}
            />
          
         })
      }
    </div>
  )
}

export default OtpInput
