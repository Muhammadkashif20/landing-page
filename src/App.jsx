import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      {/* Components and And Props Practice */}
      <div>
      {/* <h1 className="underline font-thin text-4xl text-center ">Hello World!</h1>
      <div className='flex flex-row'>
      <Button bgColor={'bg-red-500'} passName='Home'/>
      <Button cursorChange={'cursor-move'} passName='About Us'/>
      <Button textColor={'text-green-500'} bgColor={'bg-orange-300'}  passName='Skills'/>
      <Button passName='Contact'/>
      </div> */}
      </div>
      {/* Header Section */}
        <Header/>
{/* Hero Section */}
<Hero/>
{/* Features Section */}
<Feature/>
{/* Testimonials Section */}
<Testimonials/>
{/* Footer Section */}
<Footer/>
    </div>
  )
}

export default App
