import React from 'react'
import LandingPage from './landingPage'
import SecondPage from './secondPage'
import WhyChooseus from './whyChooseus'
import ContactUs from './contactUs'
import Footer from '../Components/footer'
import Hilights from './hilights'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
       <Helmet>
      {/* Primary Meta Tags */}
      <title>Flat4U - Find Flats, Rooms, and PG Rentals, Goregaon East, West, Malad West, Andheri West</title>
      <meta
        name="description"
        content="Flat 4 U is your most reliable choice to find Flats, Rooms, and PG Rentals in Goregaon East, West, Malad West, Andheri West. Visit us now for more information."
      />
      <meta
        name="keywords"
        content="Flats, Rooms, and PG Rentals, Goregaon East, West, Malad West, Andheri West"
      />
      <meta name="author" content="Flat4U" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags (for social media previews) */}
      <meta property="og:title" content="Flat4U - Find Flats, Rooms, and PG Rentals" />
      <meta
        property="og:description"
        content="Flat 4 U is your most reliable choice to find Flats, Rooms, and PG Rentals in Goregaon East, West, Malad West, Andheri West. Visit us now for more information."
      />
      <meta property="og:image" content="Your Image URL" />
      <meta property="og:url" content="Your Website URL" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content="Flat4U - Find Flats, Rooms, and PG Rentals" />
      <meta
        name="twitter:description"
        content="Flat 4 U is your most reliable choice to find Flats, Rooms, and PG Rentals in Goregaon East, West, Malad West, Andheri West. Visit us now for more information."
      />
      <meta name="twitter:image" content="Your Image URL" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@YourTwitterHandle" />
    </Helmet>
    <LandingPage/>
    <SecondPage/>
    <Hilights/>
    <WhyChooseus/>
    <Footer/>
    </>
  )
}

export default Home