import React from 'react'

import AboveNav from '../components/AboveNav'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import TheySay from '../components/TheySay'
import WhatWeDid from '../components/WhatWeDid'
import WhatWeDo from '../components/WhatWeDo'
import WhereWeAre from '../components/WhereWeAre'
import Whyus from '../components/Whyus'
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <ScrollToTop smooth top="700"/>
      <AboveNav />
      <Navbar border={"home"} />
      <Slider />
      <Whyus />
      <WhatWeDid />
      <WhatWeDo />
      <WhereWeAre />
      <TheySay />
      <Footer />
    </div>
  )
}

export default Home