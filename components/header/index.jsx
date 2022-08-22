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
                    <h2><a href="https://mozaikconcepts.com">MOZAIK</a></h2>
                </div>
                <div
                    className={classNames(
                        "col-lg-10 col-md-7 col-sm-",
                        styles.stepsHolder
                    )}
                >
                    <div className={styles.stepForSm}>
                        <p>{printStepName(selector.activeStep)}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
