import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ong Projeto Almeida</title>
        <meta name="description" content="Site Oficial da Ong Projeto Almeida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}
