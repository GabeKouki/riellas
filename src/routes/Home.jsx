import React from 'react'
import HomepageHero from '../components/HomepageHero'
import HomepageAbout from '../components/HomepageAbout'
import HomepageMenu from '../components/HomepageMenu'
import HomepageReviews from '../components/HomepageReviews'
import HomepageGallery from '../components/HomepageGallery'
import HomepageContact from '../components/HomepageContact'

const Home = () => {
  return (
    <>
    <HomepageHero />
    <HomepageAbout />
    <HomepageMenu />
    <HomepageReviews />
    <HomepageGallery />
    <HomepageContact />
    </>
  )
}

export default Home