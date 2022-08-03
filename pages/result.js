import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { clearAll } from "../utils/persist";
const ResultPage = () => {
    const redirect = () => {
        clearAll();
        window.location.href = "/";
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
                    <p>Thank you for filling this form, your request has been received and we will get back to you shortly.</p>
                    <Button variant="text" className="back-to-home" onClick={redirect}>
                        Back To Home
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
export default ResultPage;
