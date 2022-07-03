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
                    <p>Your order succesfull sent,</p>
                    <Button variant="text" onClick={redirect}>
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
