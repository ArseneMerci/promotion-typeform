import styles from '../styles/HomePage.module.css'
import Image from 'next/image'
import Stepper from 'react-stepper-horizontal'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';
import { FaImage,FaCertificate } from "react-icons/fa"
import { BsBriefcaseFill } from "react-icons/bs"

import { MdOutlineVerified } from "react-icons/md"
import profile from '../public/assets/edesign og.png'

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
                            layout='fill'
                        />
                        </a>
                    </Link>
                </div>
                <div className={styles.menuContainer}>
                    <Link href="https://www.mozaikconcepts.com/Contact"><button className='text-black'>Contact Us</button></Link>
                    <span></span>
                </div>
            </div>
            <div className={styles.headerContainer}>
                <div className={styles.headerText}>
                    <h1>The Interior of Your Home Re-Imagined in 3D</h1>
                </div>
                <div className={styles.headerSubText}>
                    <Link href="/order"><button className='text-black'>Get Started</button></Link>
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
                    <BsBriefcaseFill className={styles.icon}/>
                    <div>
                        <h1 className={styles.sTitle}>Professional Expertise</h1>
                        <p> Our skilled team brings in-depth knowledge and exceptional aesthetics to elevate your space.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <FaImage className={styles.icon}/>
                    <div>
                        <h1 className={styles.sTitle}>Visualizations and Renderings</h1>
                        <p>{`Our advanced tools and renderings bring designs to life, helping you make informed decisions.`}</p>
                    </div>
                </div>
            </div>
            <div className={styles.process}>
                <div className={styles.processPhoto}>
                    <Image
                        src={profile}
                        alt="Picture of process"
                        layout='fill'
                    />
                </div>
 
                <div className={styles.processDetails}>
                    <h1 className={styles.processTitle}>We provide you the best process experience</h1>
                    <div className={styles.list}>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>01</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Choose space</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                                <div className={styles.vl}></div>
                            <p className={styles.p}>{`Begin your design journey by choosing the specific room. We'll transform your living room, bedroom, kitchen, office,or any space into something extraordinary.`}</p>
                        </div>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>02</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Choose style</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                                <div className={styles.vl}></div>
                            <p className={styles.p}>{`Unveil your unique style through inspiration images. These visuals help us grasp your taste, guiding us to create a truly aesthetic and personalized design for you`}</p>
                        </div>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>03</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Choose colors</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                                <div className={styles.vl}></div>
                            <p className={styles.p}>{`Curate your color palette. We'll guide you in selecting hues that reflect your style and set the desired ambiance for your space.`}</p>
                        </div>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>04</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Upload plan or choose technician</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                                <div className={styles.vl}></div>
                            <p className={styles.p}>{`Upload your space photos for redesign or request a visit from our technician for an expert evaluation. Choose what works best for you.`}</p>
                        </div>
                        <div className={styles.one}>
                            <h1 className={styles.circle}>05</h1>
                            <div className={styles.details}>
                                <h1 className={styles.title}>Send information and checkout</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <p className={styles.p1}>{`Complete the process by providing necessary details and proceed to the secure payment checkout for a seamless experience.`}</p>
                        </div>
                        <div className={styles.line}></div>                       
                    </div> 
                </div>              
            </div>
        </div>
        <div className={styles.footerSubText}>
            <Link href="/order"><button>Get Started</button></Link>
            <span></span>
        </div>
    </div>
  );
}

