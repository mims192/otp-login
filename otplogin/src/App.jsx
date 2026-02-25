import React from 'react'
import Phone_login from './components/Phone_login'

function App() {
  return (
    <div className='flex flex-col p-6 items-center justify-center  text-2xl'>
      <h1 className='p-3'>Login with Phone</h1>
      <div>
        <Phone_login/>
      </div>
      
    </div>
  )
}

export default App

