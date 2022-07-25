import styles from "./header.module.css";
import classNames from "classnames";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";
import printStepName from "../../utils/printStepName";
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
                    <h2>MOZAIK</h2>
                </div>
                <div
                    className={classNames(
                        "col-lg-10 col-md-7 col-sm-",
                        styles.stepsHolder
                    )}
                >
                    <Stepper
                        className="stepsForLg"
                        activeStep={selector.activeStep}
                        connector={<CustomConnector />}
                    >
                    {/* <Stepper
                        className={styles.stepsForLg}
                        activeStep={selector.activeStep}
                        connector={<CustomConnector />}
                    > */}
                        <Step key="step 1">
                            <StepLabel>My Project</StepLabel>
                        </Step>
                        <Step key="step 2">
                            <StepLabel>My Decoration</StepLabel>
                        </Step>
                        <Step key="step 3">
                            <StepLabel>My Request</StepLabel>
                        </Step>
                        <Step key="step 4">
                            <StepLabel>Image Uploads</StepLabel>
                        </Step>
                        <Step key="step 5">
                            <StepLabel>Information</StepLabel>
                        </Step>
                    </Stepper>
                    <div className="stepForSm">
                        <p>{printStepName(selector.activeStep + 1)}</p>
                        <span className="stepSmNumber">{selector.activeStep + 1}</span>
                    </div>
                    {/* <div className={styles.stepForSm}>
                        <p>{printStepName(selector.activeStep + 1)}</p>
                        <span className={styles.stepSmNumber}>{selector.activeStep + 1}</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
