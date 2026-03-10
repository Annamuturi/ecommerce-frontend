import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import NewArrivals from '../components/newArrivals'
import Testimonials from '../components/testimonials'

const Home = () => {
  return (
    <div>
        <MainBanner />
        <Categories />
        <BestSeller />
        <NewArrivals />
        <BottomBanner />
        <NewsLetter />
        <Testimonials />
    </div>
  )
}

export default Home