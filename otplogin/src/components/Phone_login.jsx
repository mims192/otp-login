import React, { useState } from 'react'
import OtpInput from './OtpInput';

function Phone_login() {
    const [phoneNumber,setPhoneNumber]=useState("")
    const [showOtpInput,setShowOtpInput]=useState(false);
    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value)
        
    }
    const handlePhoneSubmit=(e)=>{
        e.preventDefault();
        //phone validation
        const regex=/[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert('Invalid Phone Number')
            return;
        }
        //Call the api
        //Show otp field
        setShowOtpInput(true);

    }
    const onOtpsubmit=(otp)=>{
      console.log("login successful",otp)

    }
  return (
    <div>
      {!showOtpInput? <form onSubmit={handlePhoneSubmit}>
        <input type='text' value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number' className='border border-blue-400 rounded-xl p-1'/>
        <button type='submit' className='p-1 bg-blue-100 rounded-2xl ml-4'>Submit</button>
      </form>:<div>
        <p>Enter Otp sent to {phoneNumber}</p>
        <OtpInput
        length={4} 
        onOtpSubmit={onOtpsubmit} />
        </div>}
      
    </div>
  )
}

export default Phone_login
