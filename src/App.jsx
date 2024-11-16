import { useState } from 'react'
import NavBar from './NavBar'
import Principal from './Principal'
import News from './News'
import Ranking from './Ranking'



function App() {

  return (
    <>
      <NavBar />
      <div className='flex flex-col mx-auto w-screen lg:w-[1250px] items-start pt-0 justify-between mb-20 px-5 md:px-0'>
        <div className="flex flex-col lg:flex-row w-full lg:w-[1250px] items-start pt-0 justify-between mb-20">

          <Principal />
          <News />
        </div>

        <Ranking />
      </div>
      
    </>
  )
}

export default App
