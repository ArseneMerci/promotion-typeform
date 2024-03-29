import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from 'next/image'

import { clearAll } from "../utils/persist";
import { useEffect } from "react";
import styles from '../styles/HomePage.module.css'


const PaymentFailedPage = () => {
    const redirect = () => {
        window.location.href = "/order";
    };
    return (
        <div className="main">
            <div className={styles.resultMainContainer}>
                <div className={styles.resultContainer}>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between' , alignItems:'center',margin:'20px 0px'}}>
                        <div className={styles.photo}>
                            <div className={styles.resultPhoto1} style={{display:'flex',}}>
                                <Image
                                    src="/assets/decline2.svg"
                                    alt="success"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        <h1 className={styles.resultTitle3}>Failed!</h1>
                        <h1 className={styles.resultTitle2}>Ouups! Payment Failed please Try again</h1>
                    </div>
                        <div  style={{width:'100%', display:'flex'}}>
                            <Button className={styles.btn} style={{border:'1px #1DA1F2 solid', fontWeight:'100',padding:'5px 10px',borderRadius:'5px', margin:'10px auto',}} onClick={redirect}>
                            Back To Order
                            </Button>
                        </div>
                </div>
            </div>
        </div>
    );
};
export function getStaticProps() {
    return {
        props: {}
    }
}
export default PaymentFailedPage;
