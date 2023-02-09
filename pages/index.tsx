import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { WorkWindow, WorkSample, ReviewCarousel, Footer, Aboutme} from '../components'

const works = [
  {title: 'Rhema Services', description:'A static page for a handyman company', imgFile:'macbook.png'},
  {title: 'The Forge', description:'A Coffee business with a subscription package, review carousel, as well as personalized pages', imgFile:'ipad.png'},
  {title: 'DSKMTS', description:'edited from the free dawn theme', imgFile:'imac.png'}
];

const Home: NextPage = () => {
  return (
    <div className="container  mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aboutme />
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 align-middle  ">
        <div className="lg:col-span-8 col-span-1 align-middle flex flex-col justify-center items-center">
          {works.map((work) => ( <WorkSample work={work} key={work.title} />))}  
        </div>
      </div>
      <div>
        <WorkWindow />
        <ReviewCarousel />
      </div>
      <Footer />  

    </div>
  )
}

export default Home
