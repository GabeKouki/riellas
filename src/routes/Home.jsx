import React from 'react'
import HomepageHero from '../components/HomepageHero'
import HomepageAbout from '../components/HomepageAbout'
import HomepageMenu from '../components/HomepageMenu'
import HomepageReviews from '../components/HomepageReviews'
import HomepageGallery from '../components/HomepageGallery'
import HomepageContact from '../components/HomepageContact'
import ToolTip from '../components/ToolTip'

const Home = () => {
  return (
    <>
    <HomepageHero />
    <HomepageAbout />
    <HomepageMenu />
    <HomepageReviews />
    <HomepageGallery />
    <HomepageContact />
    <ToolTip />
    </>
  )
}

export default Home