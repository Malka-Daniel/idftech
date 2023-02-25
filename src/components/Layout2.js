import Head from 'next/head'
import Nav2 from './Nav2'
import styles from '@/styles/Intro.module.css'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>לוחמים להייטק</title>
        <meta name="description" content="My site description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav2 />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
