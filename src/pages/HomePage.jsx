// import React from 'react'
import Layout from './Layout'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Testimonials from '../components/Home/Testimonials'
import Location from '../components/Home/Location'
import Pricelist from '../components/Home/PriceList'
import ContactUs from '../components/Home/ContactUs'

/**
 * Renders the home page of the website.
 * @returns {JSX.Element} The home page component.
 */
const HomePage = () => {
  return (
    <Layout>
        {/* <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to Dolphin Laundry</h1>
            <p className="mb-4">The best laundry service in town!</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Join Now</button>
        </main> */}

      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <Pricelist/>
      <ContactUs />

      {/* <FeedbackForm /> */}
    </Layout>
  )
}

export default HomePage