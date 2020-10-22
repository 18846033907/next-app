import React from 'react'     
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import Page from '../components/page'

export default function Home() {
  return (
    <div className={styles.container}>
        <button onClick={()=>Router.push('/blog')} >Blog</button>
        <button onClick={()=>Router.push('/about')} >About</button>
        <div>这里是主页</div>
        <Page />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
