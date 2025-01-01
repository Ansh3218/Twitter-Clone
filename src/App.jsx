import React from 'react'
import Navbar from './Components/Header/Navbar'
import Content from './Components/Content-For-Your/Content'
import Right from './Components/Search/Right'

const App = () => {
  return (
    <>
     <div className="w-full h-screen flex scroll-hide">
        <div className="first-container w-[65%] max-md:w-[20%] flex p-4 justify-center items-center max-[500px]:">
           <Navbar/>
        </div>
        <div className="second-container w-full max-md:mr-5">
          <Content/>
        </div>
        <div className="third-container w-[65%] max-md:hidden">
          <Right/>
        </div>
    </div>
    </>
  )
}

export default App