import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { WorkWindow, WorkSample, Footer, Aboutme, Landing} from '../components'
import { ReviewCarousel } from '../sections'

const works = [
  {title: 'Rhema Services', description:'A Coffee business with a subscription package, review carousel, as well as personalized pages', imgFile:'macbook.png'},
  {title: 'DSKMTS', description:'A Coffee business with a subscription package, review carousel, as well as personalized pages', imgFile:'imac.png'},
  {title: 'The Forge', description:'A Coffee business with a subscription package, review carousel, as well as personalized pages', imgFile:'ipad.png'}
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-5 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Aboutme />
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 align-middle flex  ">
        <div className="lg:col-span-8 col-span-1 m-auto mt-36">
          {works.map((work) => ( <WorkSample work={work} key={work.title} />))}  
        </div>
      </div>
      <div>
        <ReviewCarousel />
        <WorkWindow />
      </div>
      <Footer />  

    </div>
  )
}

export default Home
