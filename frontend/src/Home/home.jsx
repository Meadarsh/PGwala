import React from 'react'
import LandingPage from './landingPage'
import SecondPage from './secondPage'
import WhyChooseus from './whyChooseus'
import ContactUs from './contactUs'
import Footer from '../Components/footer'
import Hilights from './hilights'

const Home = () => {
  return (
    <>
    <LandingPage/>
    <SecondPage/>
    <Hilights/>
    <WhyChooseus/>
    <Footer/>
    </>
  )
}

export default Home