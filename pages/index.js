import styles from '../styles/HomePage.module.css'
import Image from 'next/image'
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
                <div className={`col-lg-2 col-md-6 col-sm-2 ${styles.logoContainer}`}>
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    {/* <img className={styles.logoContainerImg} src="/assets/logo.png" /> */}
                </div>
                <div className={`col-lg-10 col-md-6 col-sm-6 ${styles.menuContainer}`}>
                    <button>Get Started</button>
                    <span></span>
                </div>
            </div>
            <div className={`row ${styles.headerContainer}`}>
                <div className={`col-lg-12 col-sm-12 ${styles.headerText}`}>
                    <h1>The Interior of Your<br/>&nbsp;Home Re-Imagined in 3-D</h1>
                </div>
                <div className={`col-lg-12 col-sm-12 ${styles.headerSubText}`}>
                    <h4>
                </h4>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.spaceContainer}`}>
                <div className={` col-lg-12 col-sm-12 ${styles.spaceTitle}`}>
                    <span>Title ....</span>
                </div>
                <div className={` col-lg-12 col-sm-12 ${styles.spaceContent}`}>
                    <p>
                    Whether you are designing your house for the first time or renovating it, we can help you find your style
                    as well as guiding you using our 3D rendering App and follow up on the whole project until it is completed
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.showStyleContainer}`}>
                <div className={` col-lg-4  col-md-12 ${styles.styleContent}`}>
                    <h4>Tell Us What You Want.</h4>
                    <p>Through different steps, we get to understand your style and how you
                        want your space to look like. </p>
                </div>
                <div className={` col-lg-8  col-md-12 ${styles.styleImage1}`}>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.showStyleContainer } ${styles.mar5}`}>
                <div className={` col-lg-8  col-md-12 ${styles.styleImage2}`} >
                   
                </div>
                <div className={` col-lg-4  col-md-12 ${styles.styleContent}`} >
                   <h4>Your Space Re-Imagined in 3D.</h4>
                    <p>
                        Using renowned sofwatres, our designers will come up with 3D concepts 
                        and moodboards that will help you visualize your desired space. They will also
                        work hand in hand with you to make sure that they deliver a final product you are satisfied with.
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className={` row ${styles.showStyleContainer}`}>
                <div className={` col-lg-4  col-md-12 ${styles.styleContent}`}>
                    <h4>Happiness Guarantee.</h4>
                    <p>
                        On top of the 3D concepts and moodboards, our team will also provide you with a shopping list 
                        of every item included in the design to make shopping list of every item included in the design
                        to make shopping and the whole experience easy for you.
                    </p>
                </div>
                <div className={` col-lg-8  col-md-12 ${styles.styleImage3}`}>
                </div>
            </div>
        </div>
    </>
  );
}

