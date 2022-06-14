import Head from 'next/head'
import Navbar from './components/Navbar'
import Main from './components/Main'
import AboutUs from './components/AboutUs'
import OwnProjects from './components/OwnProjects'
import GetInvolved from './components/GetInvolved'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ong Projeto Almeida</title>
        <meta name="description" content="Site Oficial da Ong Projeto Almeida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main />
      <AboutUs />
      <OwnProjects />
      <GetInvolved />
      <Partners />
      <Footer />
    </>
  )
}
