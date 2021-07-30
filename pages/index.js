import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../comps/Map'), { ssr: false });
export default function Home() {
  return (
    <>
    <Head>
      <title>IP Tracker</title>
      <link rel="shortcut icon" type="image/png" href="../public/favicon-32x32.png"/>
    </Head>
    <div className={styles.container}>
      <div className={styles.search}>
        <h1>IP Address Tracker</h1>
        <div className={styles.searchContainer}>
          <input className={styles.searchBox} type="text" name="ip" placeholder="Search for any IP address"/>
          {/* <button className={styles.btnSearch}><svg className={styles.arrow}  xmlns="http://www.w3.org/2000/svg" ><path className={styles.arrowpath} fill="none" stroke="#fff" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button> */}
          <button className={styles.btnSearch}><Image src={require("../public/icon-arrow.svg")} alt="arrow"></Image></button>
        </div>
      </div>
      <div className={styles.map}>
        
      <Map/>
      </div>
    </div>
    </>
  )
}
