import React from 'react'
import Banner from './Banner/Banner'
import Blognavabar from './Blognavabar'
import Blogs from './MainContainer/Blog/Blogs'
import VisibilityFilter from './MainContainer/Visibilityfilter/VisibilityFilter'

function HomeContainer() {
  return (
    <div>
    <Banner/>
    <VisibilityFilter/>
    <Blogs/>
    </div>
  )
}

export default HomeContainer