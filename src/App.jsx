import { useState } from 'react'
import NavBar from './NavBar'
import Principal from './Principal'
import News from './News'
import Ranking from './Ranking'



function App() {

  return (
    <>
      <NavBar />
      <div className='flex flex-col mx-auto w-[1250px] items-start pt-0 justify-between mb-20'>
        <div className="flex w-[1250px] items-start pt-0 justify-between mb-20">

          <Principal />
          <News />
        </div>

        <Ranking />
      </div>
      
    </>
  )
}

export default App
