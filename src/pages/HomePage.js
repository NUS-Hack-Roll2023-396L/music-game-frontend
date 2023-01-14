import React from 'react'
import banner from '../assets/banner.png'
import PlayButton from '../components/PlayButton'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <BannerSection/>
    </>
  )
}

const BannerSection = () => (
  // <section className='grid grid-cols-5 align-middle'>
  //   <img src={banner} className='col-span-3' alt="Banner"
  //     // style={{
  //     //   width: "50"
  //     // }}
  //     />
  //   <h1 className='col-span-2 text-4xl align-middle'>Music is the soundtrack of your life</h1>
  //   <PlayButton/>
  // </section>
  <section className=''>
    <img src={banner} className='absolute left-12 ' alt="Banner"
        // style={{
        //   width: "50"
        // }}
        />
      <h1 className='flex flex-col justify-end items-end absolute right-12 top-72 text-7xl w-1/2 text-right'>
        <p className='mb-8'>Music is the soundtrack of your life</p>
        <Link to="/select-song">
          <PlayButton 
            className="transition-all"
            color="black" fontSize={90} />
        </Link>
      </h1>
  </section>
)
