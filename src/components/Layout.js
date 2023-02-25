import Head from 'next/head'
import Nav from './Nav'
import styles from '@/styles/Test.module.css'
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>לוחמים להייטק</title>
        <meta name="description" content="My site description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>אתר זה נבנה על ידי <span className={styles.underline}>דניאל</span></footer>
    </>
  )
}

export default Layout
