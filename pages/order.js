import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import StepOne from "../components/steps/step_one";
import StepTwo from "../components/steps/step_two";
import StepThree from "../components/steps/step_three";
import { useSelector, useDispatch } from "react-redux";
import StepFour from "../components/steps/step_four";
import StepFive from "../components/steps/step_five";
import StepBudget from "../components/steps/step_budget";
import StepCheckout from "../components/steps/step_checkout";
import StepTwoColors from "../components/steps/step_two_colors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { clearError } from "../state/slices/steps.slice";

function Order() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.steps);
  const error = useSelector((state) => state.steps.error);
  useEffect(() => {
    if (error) {
      toast.error(error);
      setTimeout(() => {
        dispatch(clearError());
      }, 1000);
    }
  }, [error]);
  return (
    <div className={styles.container}>
      <Head>
        <title>MOZAIK CONCEPTS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Header />
      <ToastContainer />
      <main className="main">
        {selector.activeStep === 0 && <StepOne />}
        {selector.activeStep === 1 && <StepTwo />}
        {selector.activeStep === 2 && <StepTwoColors />}
        {selector.activeStep === 3 && <StepThree />}
        {selector.activeStep === 4 && <StepFour />}
        {selector.activeStep === 5 && <StepBudget />}
        {selector.activeStep === 6 && <StepFive />}
        {selector.activeStep === 7 && <StepCheckout />}
      </main>
      <Footer />
    </div>
  );
}

export default Order;
