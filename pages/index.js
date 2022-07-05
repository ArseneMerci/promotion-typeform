import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import StepOne from "../components/steps/step_one";
import StepTwo from "../components/steps/step_two";
import StepThree from "../components/steps/step_three";
import { useSelector } from "react-redux";
import StepFour from "../components/steps/step_four";
import StepFive from "../components/steps/step_five";
export default function Home() {
    const selector = useSelector((state) => state.steps);
    return (
        <div className={styles.container}>
            <Head>
                <title>MOZAIK</title>
                <meta
                    name="description"
                    content=""
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="main">
                 <div className="main-above-space"></div>
                {selector.activeStep === 0 && <StepOne />}
                {selector.activeStep === 1 && <StepTwo />}
                {selector.activeStep === 2 && <StepThree />}
                {selector.activeStep === 3 && <StepFour />}
                {selector.activeStep === 4 && <StepFive />}
                <div className="main-add-space"></div>
            </main>
            <Footer />
        </div>
    );
}
