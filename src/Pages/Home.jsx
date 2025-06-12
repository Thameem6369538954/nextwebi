import React from 'react'
import Header from '../Components/Header'
import CategoryGrid from '../Components/Cate'
import Trending from '../Components/TrendingProductsCarousel'
import AboutUs from '../Components/AboutUs'
import Offerbanner from '../Components/Offerbanner'
import ContactUs from '../Components/Contactus'
import BrandMarquee from '../Components/BrandImg'


const Home = () => {
  return (
    <div>
        <Header />
        <CategoryGrid />
        <BrandMarquee />
        <Trending />
        <Offerbanner />
        <AboutUs />
        <ContactUs />
    </div>
  )
}

export default Home