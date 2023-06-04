import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { clearAll } from "../utils/persist";
import { useEffect } from "react";
const PaymentFailedPage = () => {
    const redirect = () => {
        window.location.href = "/order";
    };
    return (
        <div className="main">
            <div className="success-container">
                <img
                    src="/assets/success.svg"
                    alt="success"
                    className="success-image"
                />
                <section>
                    <span>Ouups! Payment Failed please Try again</span>
                    <Button variant="text" className="back-to-home" onClick={redirect}>
                        Back To Order
                    </Button>
                </section>
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
