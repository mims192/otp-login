import React, { useState,useRef, useEffect } from 'react'

function OtpInput({length=4,onOtpSubmit=()=>{}}) {
    const [otp,setOtp]=useState(new Array(length).fill(""));
    const inputrefs=useRef([])
    const handleChange=(index,e)=>{
        const value=e.target.value;
        if(isNaN(value)) return;  //not a number
        const newotp=[...otp] //whatever is already inside the otp //not changing the state directly
        //allow only ont input
        newotp[index]=value.substring(value.length-1);//ng
        setOtp(newotp)      //setters are asynchornous
        const combinedOtp=newotp.join("") //thats why we using newotp instead of setotp
        if(combinedOtp.length===length){
          onOtpSubmit(combinedOtp);  
        }
        //move to next input if current field is filled
        if(value && index<length-1 && inputrefs.current[index+1]){ //do we have access to next element
            inputrefs.current[index+1].focus();
        }
        // Move to next empty input
          const nextEmptyIndex =  newotp.indexOf("");

        if(value && nextEmptyIndex!==-1 && inputrefs.current[nextEmptyIndex])
        {
            inputrefs.current[nextEmptyIndex].focus();
        }



    }
const handleClick = (index) => {
  const input = inputrefs.current[index];
  if (input) {
    input.setSelectionRange(1, 1); // move cursor to front

  }
  if(index>0 && !otp[index-1]){
    inputrefs.current[otp.indexOf("")].focus();
  }

};

  
    //move to prev input if current field is filled
  const handlekeydown=(index,e)=>{
      if(e.key=="Backspace" && !otp[index] && index>0 && inputrefs.current[index-1] ){
        inputrefs.current[index-1].focus();
      }
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
            className='border border-gray-300 p-2 mt-5 ml-2 mr-2 w-[40px] h-[40px] text-xl rounded-sm '   //diff btween % and px
            type='text'
            ref={(input)=>(inputrefs.current[index]=input)}

            value={value}
            onChange={(e)=>handleChange(index,e)}
            onClick={()=>handleClick(index)}
            onKeyDown={(e)=>handlekeydown(index,e)}
            />
          
         })
      }
    </div>
  )
}

export default OtpInput
