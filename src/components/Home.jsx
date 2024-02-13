import React from 'react'
import Videosection from './Videosection'
import Viewsection from './Viewsection'
import Homeproducts from './Homeproducts'
import Learnmore from './Learnmore'
import Animatedtext1 from './Animatedtext1'
import Imageslider from './Imageslider'
import Clockanimated from './Clockanimated'
import Appsection from './Appsection'
import Reviewsection from './Reviewsection'
import Shoppingnew from './Shoppingnew'

function Home() {
  return (
    <div>
         <Videosection/>
        <Viewsection/>
        <Homeproducts/>
        <Learnmore/>
        <Imageslider/>
        <Clockanimated/> 
        <div className='px-[2rem]'>
        <Shoppingnew/>
        </div>
        
       
         <Learnmore/>
        {/* <Animatedtext1/> */}
       
      
        {/* <Appsection/> */}
        <Reviewsection/>
    </div>
  )
}

export default Home