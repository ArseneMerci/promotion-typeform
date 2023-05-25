import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { clearAll } from "../utils/persist";
import {AiFillCheckCircle} from 'react-icons/ai'
import styles from '../styles/HomePage.module.css'
const ResultPage = () => {
    const redirect = () => {
        clearAll();
        window.location.href = "/order";
    };
    return (
        <div className="main">
            <div className={styles.resultMainContainer}>
                <div className={styles.resultContainer}>
                    <div>
                        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between' , alignItems:'center'}}>
                            < AiFillCheckCircle className={styles.resultIcon}/>
                            <h1 className={styles.resultTitle}>Payment succesfully!</h1>
                            <h1 className={styles.resultTitle2}>Transaction id: 085377489</h1>
                        </div>
                        <div className={styles.resultHr}></div>
                        <div>
                            <div style={{display:'flex' ,justifyContent:'space-between'}}>
                                <h1 className={styles.resultTitle2}>Amount Paid</h1>
                                <h1 className={styles.resultTitle2}>RWF 300K</h1>
                            </div>
                            <div style={{display:'flex' ,justifyContent:'space-between'}}>
                                <h1 className={styles.resultTitle2}>Amount Paid</h1>
                                <h1 className={styles.resultTitle2}>RWF 300K</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="success-container">
                <img
                    src="/assets/success.svg"
                    alt="success"
                    className="success-image"
                />
                <section>
                    <p>Thank you for filling this form, your request has been received and we will get back to you shortly.</p>
                    <Button variant="text" className="back-to-home" onClick={redirect}>
                        Back To Home
                    </Button>
                </section>
            </div> */}
        </div>
    );
};
export function getStaticProps() {
    return {
        props: {}
    }
}
export default ResultPage;
