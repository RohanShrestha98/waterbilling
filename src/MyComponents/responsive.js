import React from 'react'
import Contact from './Contact'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Support from './Support'
import Wave from './Wave'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Wave/>
      <Services/>
      <Support/>
      <Contact/>
    </div>
  )
}
