import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'



function App() {
  return (
    <div className='max-w-[620px] py-6 px-6 m-auto'>
      <Navbar />
      <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-slate-500">
        <div className="bg-white h-0.5 rounded-full mt-5" style={{width: "45%"}}></div>
      </div>
    </div>
  )
}

export default App
