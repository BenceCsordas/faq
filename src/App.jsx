import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Faq } from './components/faq'



function App() {



  return (
    <div className='min-h-screen bg-gradient-to-br from-bg-indigo-50 to-purple-100 flex justify-center items-center'>
      <div className='max-w-3xl bg-white shadow-xl rounded p-8'>
        <h1 className='text-blue-500 font-bold text-2xl text-center mb-6'>Questions and Answers about Login</h1>
        <Faq/>
      </div>
    </div>
  )
}

export default App
