import './App.css';
import styles from "./styles/Home.module.css"
import arrow from "./assets/icon-arrow.svg"
import { useState } from 'react'

import Map from './Map';

function App() {

  const [input, setInput] = useState("")
  const [ip, setIP] = useState("192.212.174.101")
  const [location, setLocation] = useState("Brooklyn, NY 10001")
  const [timezone, setTimezone] = useState("UTC -5:00")
  const [isp, setIsp] = useState("SpaceX Starlink")

  const submitHandler = (e) => {
    e.preventDefault()
    
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.search}>
        <h1>IP Address Tracker</h1>
        <div className={styles.searchContainer}>
          <input className={styles.searchBox} type="text" name="ip" placeholder="Search for any IP address" value={input} onChange={(e)=>setInput(e.target.value)} />
          {/* <button className={styles.btnSearch}><svg className={styles.arrow}  xmlns="http://www.w3.org/2000/svg" ><path className={styles.arrowpath} fill="none" stroke="#fff" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button> */}
          <button className={styles.btnSearch}><img src={arrow} alt="arrow" /></button>
        </div>
        <div className={styles.output}>
          <div className={styles.outputBlob}>
            <h2>IP ADDRESS</h2>
            <h3>{ip}</h3>
          </div>

          <div className={styles.line}></div>

          <div className={styles.outputBlob}>
            <h2>LOCATION</h2>
            <h3>{location}</h3>
          </div>

          <div className={styles.line}></div>

          <div className={styles.outputBlob}>
            <h2>TIMEZONE</h2>
            <h3>{timezone}</h3>
          </div>

          <div className={styles.line}></div>

          <div className={styles.outputBlob}>
            <h2>ISP</h2>
            <h3>{isp}</h3>
          </div>

        </div>
      </div>
    </div>
    <div>
      <Map/>
    </div>
    </>
  );
}

export default App;
