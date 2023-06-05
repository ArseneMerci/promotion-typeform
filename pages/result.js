import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from 'next/image'
import { clearAll } from "../utils/persist";
import { useEffect } from "react";
import {AiFillCheckCircle} from 'react-icons/ai'
import styles from '../styles/HomePage.module.css'

const ResultPage = () => {
    const router = useRouter();
    const { query } = router;
    useEffect(() => {
        clearAll();
    }, []);
    const redirect = () => {
        clearAll();
        window.location.href = "/order";
    };
    return (
        <div className="main">
            <div className={styles.resultMainContainer}>
                <div className={styles.resultContainer}>
                    <div>
                        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between' , alignItems:'center',margin:'20px 0px'}}>
                            <div className={styles.resultPhoto}>
                                <Image
                                    src="/assets/success.svg"
                                    alt="success"
                                    layout="fill"
                                />
                            </div>
                            <h1 className={styles.resultTitle}>Payment succesfully!</h1>
                            <h1 className={styles.resultTitle2}>Transaction id: {query.transactionId}</h1>
                        </div>
                        <div className={styles.resultHr}></div>
                        <div>
                            <div style={{display:'flex' ,justifyContent:'space-between',marginBottom:'10px'}}>
                                <h1 className={styles.resultTitle2}>Amount Paid</h1>
                                <h1 className={styles.resultTitle2}>RWF {query.totalPrice}</h1>
                            </div>
                            <div style={{display:'flex' ,justifyContent:'space-between'}}>
                                <h1 className={styles.resultTitle2}>Method</h1>
                                <h1 className={styles.resultTitle2}>{query.payment_type}</h1>
                            </div>
                        </div>
                        <Button class="btn btn-primary" onClick={redirect}>
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
export default ResultPage;
