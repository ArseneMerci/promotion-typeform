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
                        "col-lg-1 col-md-12",
                        styles.logoContainer
                    )}
                >
                    <h2>MOZAIK</h2>
                </div>
                <div
                    className={classNames(
                        "col-lg-10 col-md-12",
                        styles.stepsHolder
                    )}
                >
                    <Stepper
                        activeStep={selector.activeStep}
                        connector={<CustomConnector />}
                    >
                        <Step key="step 1">
                            <StepLabel>My Project</StepLabel>
                        </Step>
                        <Step key="step 2">
                            <StepLabel>My Decoration Style</StepLabel>
                        </Step>
                        <Step key="step 3">
                            <StepLabel>My Requests</StepLabel>
                        </Step>
                        <Step key="step 4">
                            <StepLabel>My space</StepLabel>
                        </Step>
                        <Step key="step 5">
                            <StepLabel>Information</StepLabel>
                        </Step>
                    </Stepper>
                </div>
            </div>
        </div>
    );
};

export default Header;
