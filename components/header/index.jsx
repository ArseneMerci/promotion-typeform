import styles from "./header.module.css";
import classNames from "classnames";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";
export const CustomConnector = () => {
    return (
        <section className={classNames(styles.line)}>
            <hr />
        </section>
    );
};
const Header = () => {
    const selector = useSelector((state) => state.steps);
    return (
        <div className={classNames("container-fluid", styles.containerFluid)}>
            <div className={classNames("row", styles.row)}>
                <div
                    className={classNames(
                        "col-lg-1 col-sm-4",
                        styles.logoContainer
                    )}
                >
                    <h2>MOIZAKA</h2>
                </div>
                <div
                    className={classNames(
                        "col-lg-10 col-md-7 col-sm-",
                        styles.stepsHolder
                    )}
                >
                    <Stepper
                        className={styles.stepsForLg}
                        activeStep={selector.activeStep}
                        connector={<CustomConnector />}
                    >
                        <Step key="step 1">
                            <StepLabel>labe 1</StepLabel>
                        </Step>
                        <Step key="step 2">
                            <StepLabel>labe 2</StepLabel>
                        </Step>
                        <Step key="step 3">
                            <StepLabel>labe 3</StepLabel>
                        </Step>
                        <Step key="step 4">
                            <StepLabel>labe 4</StepLabel>
                        </Step>
                        <Step key="step 5">
                            <StepLabel>labe 5</StepLabel>
                        </Step>
                    </Stepper>
                    <div className={styles.stepForSm}>
                        <span>{selector.activeStep+1}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
