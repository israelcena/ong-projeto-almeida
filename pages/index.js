import Head from 'next/head'
import Navbar from './components/Navbar'
import Main from './components/Main'

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
