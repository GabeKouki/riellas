import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div className="HomepageContainer">
      <Header />
      <section className="Hero">
      <Hero />
      </section>
      <section className="Menu">
        <Menu />
      </section>
      {/* <About />  */}
    </div>
  )
}

export default Home