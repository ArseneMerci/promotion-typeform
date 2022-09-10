import styles from '../styles/HomePage.module.css'
import Stepper from 'react-stepper-horizontal'
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Home() {
    const router = useRouter()
  return (
    <>
      <Head>
        <title>MOZAIK CONCEPTS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
        <div className={`container-fluid ${styles.container}`}>
            <div className={`row ${styles.navbar}`}>
                <div className={`col-lg-2 col-sm-6 ${styles.logoContainer}`}>
                    <h1>MOZAIK</h1>
                </div>
                <div className={`col-lg-10  col-sm-6 ${styles.menuContainer}`}>
                    <button>Get Started</button>
                    <span></span>
                </div>
            </div>
            <div className={`row ${styles.headerContainer}`}>
                <div className={`col-lg-12 col-sm-12 ${styles.headerText}`}>
                    <h1>Make room for <br/>&nbsp;better living</h1>
                </div>
                <div className={`col-lg-12 col-sm-12 ${styles.headerSubText}`}>
                    <h4>Stunning interior design services, now within reach.</h4>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.spaceContainer}`}>
                <div className={` col-lg-12 col-sm-12 ${styles.spaceTitle}`}>
                   <p>LOVE THE SPACE YOU’RE IN</p>
                </div>
                <div className={` col-lg-12 col-sm-12 ${styles.spaceContent}`}>
                    <p>
                       Bring your dream home to life with one-on-<br/>one design help & hand-picked products<br/> tailored to your style, space, and budget.
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.showStyleContainer}`}>
                <div className={` col-lg-4  col-md-12 ${styles.styleContent}`}>
                    <h4>Reimagine your space.</h4>
                    <p>Your designer will work with 
                    you one-on-one to bring your vision to life,
                    complete with a 3D rendering of your actual space. </p>
                </div>
                <div className={` col-lg-8  col-md-12 ${styles.styleImage}`}>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.showStyleContainer } ${styles.mar5}`}>
                <div className={` col-lg-8  col-md-12 ${styles.styleImage}`} >
                   
                </div>
                <div className={` col-lg-4  col-md-12 ${styles.styleContent}`} >
                   <h4>Reimagine your space.</h4>
                    <p>Your designer will work with 
                    you one-on-one to bring your vision to life,
                    complete with a 3D rendering of your actual space. </p>
                </div>
            </div>
        </div>
    </>
  );
}

