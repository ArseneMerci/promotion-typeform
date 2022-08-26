import styles from '../styles/HomePage.module.css'
import Stepper from 'react-stepper-horizontal'
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Home() {
    const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>MOZAIK CONCEPTS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
        <div className={styles.imageBackground}>
            <div className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <img src="/assets/logoLight.png" className={styles.logo} alt="logo" />
                    {/* <div className={styles.overlay}></div> */}
                </div>
                <div className={styles.contact}>
                    <button onClick={()=>{router.push('https://www.mozaikconcepts.com/Contact')}} className={styles.contactButton}>Contact</button>
                </div>
            </div>
            <div className={styles.backgroundContent}>
                <h1 className={styles.headerTitle}><span>The Interior of Your</span> <span>Home Re-Imagined in 3-D</span></h1>
                <p className={styles.pdata}>
                    Whether you are designing your house for the first time or renovating it, we can help you find your style
                    as well as guiding you using our 3D rendering App and follow up on the whole project until it is completed
                </p>
            </div>
        </div>
        <div className={styles.main}>
            <center>
            <h1>HOW IT WORKS</h1>
            </center>
            <div className={styles.steps}>
            <Stepper defaultColor="#fcc603" activeColor="#fcc603" defaultTitleColor="#000" steps={ [{title: 'Choose room'}, {title: 'Choose Budget'}, {title: 'Choose Style'}, {title: 'Customise request'}, {title: 'Define your Floor plan'}, {title: 'Provide Contacts then Submit'}] } />
            </div>
            <center>
                <button onClick={()=>{router.push('/order')}} className={styles.startButton}>Start Now</button>
            </center>
            {/* <StepsTry /> */}
        </div>
    </div>
  );
}

