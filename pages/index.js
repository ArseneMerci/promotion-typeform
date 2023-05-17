import styles from '../styles/HomePage.module.css'
import Image from 'next/image'
import Stepper from 'react-stepper-horizontal'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';
import { FaShippingFast,FaCertificate } from "react-icons/fa"
import { MdOutlineVerified } from "react-icons/md"
import profile from '../public/assets/aboute4.jpg'

export default function Home() {
    const router = useRouter()
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>MOZAIK CONCEPTS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <Link href="https://mozaikconcepts.com">
                        <a>
                        <Image
                            src="/assets/logoLight.png"
                            alt="logo"
                            width={120}
                            height={100}
                        />
                        </a>
                    </Link>
                </div>
                <div className={styles.menuContainer}>
                    <Link href="https://www.mozaikconcepts.com/Contact"><button >Contact Us</button></Link>
                    <span></span>
                </div>
            </div>
            <div className={styles.headerContainer}>
                <div className={styles.headerText}>
                    <h1>The Interior of Your Home Re-Imagined in 3D</h1>
                </div>
                <div className={styles.headerSubText}>
                    <Link href="/order"><button >Get Started</button></Link>
                    <span></span>
                </div>
            </div>
        </div>
        <div className={styles.containerTwo}>
            <div className={styles.headTwo}>
                <div className={styles.hr}></div>
                <div>
                    <h1 className={styles.titleTwo}>Benefits you get when</h1>
                    <h1 className={styles.titleTwo}>using our services</h1>
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.card}>
                    <FaCertificate className={styles.icon}/>
                    <div>
                        <h1 className={styles.sTitle}>Best Quality</h1>
                        <p>All of our furniture uses the best materials and choices for our customers</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <FaShippingFast className={styles.icon}/>
                    <div>
                        <h1 className={styles.sTitle}>Free shipping</h1>
                        <p>All of our furniture uses the best materials and choices for our customers</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <MdOutlineVerified className={styles.icon}/>
                    <div>
                        <h1 className={styles.sTitle}>Warranty</h1>
                        <p>All of our furniture uses the best materials and choices for our customers</p>
                    </div>
                </div>
            </div>
            <div className={styles.process}>
                <Image
                    src={profile}
                    className={styles.processPhoto}
                    alt="Picture of process"
                    width="430px"
                    height="450px"
                /> 
                <div className={styles.processDetails}>
                    <h1 className={styles.processTitle}>We provide you the best process experience</h1>
                    <div className={styles.list}>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>01</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Briefing</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                                <div className={styles.vl}></div>
                            <p className={styles.p}>First thing to determine the concept and the model you want , then choose what color and materials you want to use in furniture.</p>
                        </div>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>02</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Processing</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                                <div className={styles.vl}></div>
                            <p className={styles.p}>When the briefing process is complete and what the client wants has been achieved. then we carry out the execution of the desired concept</p>
                        </div>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>03</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Finishing</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <p className={styles.p1}>When the process is complete we will immediately carry out the finishing stage and we do it carefully and make sure there are no mistake.</p>
                        </div>
                        <div className={styles.line}></div>                       
                    </div> 
                </div>              
            </div>
        </div>
    </div>
  );
}

