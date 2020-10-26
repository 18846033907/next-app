import React from 'react';
import Router from 'next/router';
// import { constants } from '@containers/home/store';
// import useInterval from '@lib/useInterval';
// import { useDispatch } from 'react-redux';
import styles from '@styles/Home.module.css';
import Clock from '@containers/home/clock';
import Counter from '@containers/home/counter';

// const { TICK } = constants;

export default function Home() {
  // const dispatch = useDispatch();
  // useInterval(() => {
  //   dispatch({
  //     type: TICK,
  //     light: true,
  //     lastUpdate: Date.now(),
  //   });
  // }, 1000);
  return (
    <div className={styles.container}>
      <button type="button" onClick={() => Router.push('/blog')}>
        Blog
      </button>
      <button type="button" onClick={() => Router.push('/about')}>
        About
      </button>
      <div>这里是主页</div>
      <>
        <Clock />
        <Counter />
      </>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
