import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Events = () => {
  return (
    <>
    <Header></Header>
    <section class="">
  <div class="container px-5 py-10 md:py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Glimpses of Past Events</h1>
        <div class="h-1 w-80 bg-pink-400 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Explore our memorable past events, showcasing our community's vibrant spirit and dedication. From inspiring campaigns to engaging workshops, these moments highlight our journey and achievements. Relive the experiences that have shaped our organization's impactful story.

</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-gradient-to-r pb-0  from-yellow-50 bg-pink-100 border border-gray-200 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://myohiofun.com/wp-content/uploads/2021/04/MothersDay.png" alt="content"/>
          <div className="flex gap-x-4 items-center justify-between">
          <div className="">
          <h3 class="tracking-widest text-pink-600 text-sm mb-1 font-medium title-font">21 May, 2024</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Sufal Event</h2>
          </div>
          <button className='bg-pink-500 text-sm px-2 py-1 rounded-lg text-white'>View More</button>
          </div>
          
          
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-gradient-to-r pb-0  from-yellow-50 bg-pink-100 border border-gray-200 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://myohiofun.com/wp-content/uploads/2021/04/MothersDay.png" alt="content"/>
          <div className="flex gap-x-4 items-center justify-between">
          <div className="">
          <h3 class="tracking-widest text-pink-600 text-sm mb-1 font-medium title-font">21 May, 2024</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Sufal Event</h2>
          </div>
          <button className='bg-pink-500 text-sm px-2 py-1 rounded-lg text-white'>View More</button>
          </div>
          
          
          
        </div>
      </div>
      
      
      
    </div>
  </div>
</section>
<Footer></Footer>
    </>
    
  )
}

export default Events